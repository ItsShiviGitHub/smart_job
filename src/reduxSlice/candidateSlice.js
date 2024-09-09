import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:8001/candidate";


//==============================< SINGLE CANDIDATE >========================================//
export const fetchSingleData = createAsyncThunk("recruiters/fetchSingleData", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/get-data/${id}`);
        console.log("Fetched single data", response?.data?.response);
        return response?.data?.response;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to fetch single candidate data");
    }
});

//==============================< ALL CANDIDATE>========================================//
export const fetchAllCandidate = createAsyncThunk("candidate/fetchAllCandidate", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/get-all-data`);
        console.log("Candidate Data", response?.data);
        return response?.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to fetch candidate");
    }
});

//==============================< CREATE CANDIDATE >========================================//
export const createCandidate = createAsyncThunk("candidate/createCandidate", async (data, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
            }
        };

        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('mobile', data.mobile);
        formData.append('job_function', data.job_function);
        formData.append('years', data.experience.years);
        formData.append('months', data.experience.months);
        formData.append('current_location', data.current_location);
        formData.append('key_skills', data.key_skills);
        formData.append('password', data.password);
        formData.append('confirm_password', data.confirm_password);
        formData.append('resumeFile', data.resumeFile.name);

        const response = await axios.post(`${API_BASE_URL}/create`, formData, config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to add candidate");
    }
});
//==============================< UPDATE WITH TOKEN RECRUITER >========================================//
export const updateCandidate = createAsyncThunk('recruiters/updateCandidate', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/update/${id}`);

        if (response.data && response.data.response) {
            return response.data.response;
        } else {
            return rejectWithValue('Invalid response data');
        }
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
    }
});
//==============================< DELETE RECRUITER >========================================//
export const removeCandidate = createAsyncThunk("recruiters/removeCandidate", async (id, { rejectWithValue, getState }) => {
    const candidateInfo = getState()?.localStorage.getItem('candidateInfo');
    let token = '';
    if (candidateInfo) {
        const parsedCandidateInfo = JSON.parse(candidateInfo);
        token = parsedCandidateInfo?.data?.accessToken || 'Token currect';
        console.log("mera token", token);
    }
    if (!token) {
        return rejectWithValue('Token not found');
    }
    const header = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': "multipart/form-data",
        }
    };

    try {
        await axios.delete(`${API_BASE_URL}/delete/${id}`, header);
        window.location.reload();
        return id;
    } catch (error) {
        return rejectWithValue(error?.response?.data || "Failed to remove candidate");
    }
});



//==============================< LOGIN CANDIDATE >========================================//
export const candidateLogin = createAsyncThunk('candidateLogin', async (data, { rejectWithValue }) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/login`, data)
        localStorage.setItem('userInfoData', res?.data?.data)
        console.log("after fetchingcandidate data ", res?.data?.data?.accessToken)
        return res?.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

//==============================< Candidate Slice >========================================//
const initialState = {
    loading: false,
    userInfoData: null,
    candidateDetails: [],
    status: null,
    error: null,
    response: "",
    getSingleCandidate: null
};

const candidateSlice = createSlice({
    name: "candidate",
    initialState,
    reducers: {
        setCandidateData(state) {
            const candidate = JSON.parse(localStorage.getItem('candidateInfoData'))
            state.userInfoData = candidate
        },

        candidateLogout(state) {
            localStorage.clear();
            state.logoutloading = true
            console.log('Candidate Logout Successfull!!!')
        }
    },
    extraReducers: (builder) => {
        builder
            //============= < GET SINGLE CANDIDATE >===================//
            .addCase(fetchSingleData.pending, (state) => {
                state.status = 'loading';
                state.loading = true;
            })
            .addCase(fetchSingleData.fulfilled, (state, action) => {
                state.loading = false;
                state.getSingleCandidate = action.payload;
            })
            .addCase(fetchSingleData.rejected, (state, action) => {
                state.status = 'rejected';
                state.loading = false;
                state.error = action.payload;
            })
            //============= < GET ALL >===================//
            .addCase(fetchAllCandidate.pending, (state) => {
                state.status = 'loading';
                state.loading = true;
            })
            .addCase(fetchAllCandidate.fulfilled, (state, action) => {
                state.loading = false;
                state.candidateDetails = action.payload;
            })
            .addCase(fetchAllCandidate.rejected, (state, action) => {
                state.status = 'rejected';
                state.loading = false;
                state.error = action.payload;
            })
            //============= < CREATE >===================//
            .addCase(createCandidate.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createCandidate.fulfilled, (state, action) => {
                state.loading = false;
                if (Array.isArray(state.candidateDetails)) {
                    state.candidateDetails.push(action.payload);
                }
                state.response = "Candidate added successfully";
            })
            .addCase(createCandidate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //==============< UPDATE >===================//
            .addCase(updateCandidate.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.candidateDetails.findIndex((candidate) => candidate._id === action.payload._id);
                if (index !== -1) {
                    state.candidateDetails[index] = action.payload;
                    state.response = "Candidate updated successfully";
                }
            })
            .addCase(updateCandidate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //============= < DELETE >===================//
            .addCase(removeCandidate.fulfilled, (state, action) => {
                state.loading = false;
                state.candidateDetails = state.candidateDetails?.data?.filter((candidate) => candidate._id !== action.payload);
                state.response = "Candidate removed successfully";
            })
            .addCase(removeCandidate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //============= < LOGIN >===================//
            .addCase(candidateLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(candidateLogin.fulfilled, (state, action) => {
                state.userInfoData = action.payload;
                localStorage.setItem('userInfoData', JSON.stringify(action.payload))
                state.loading = false;
                state.logoutloading = false;
            })
            .addCase(candidateLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    },
});
export const { setCandidateData, candidateLogout } = candidateSlice.actions;
export default candidateSlice.reducer;
