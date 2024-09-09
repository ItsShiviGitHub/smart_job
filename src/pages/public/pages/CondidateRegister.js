import React, { useState, useMemo } from 'react';
import {
    Box, Button, CssBaseline, Stack, TextField, Grid, Typography, InputAdornment, IconButton, Divider, useTheme, Card, CardContent, Checkbox
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JobImage from '../../../assets/images/bluedotted.jpeg';
import LoginImg from '../../../assets/images/yunggirl.avif';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { createCandidate } from '../../../reduxSlice/candidateSlice';

const CondidateRegister = () => {
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = useMemo(() => yup.object({
        email: yup.string(),//.email('Enter a valid email'),
        mobile: yup.string(),//.min(10, 'Mobile number should be at least 10 characters'),//.required('Mobile number is required').matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),
        job_function: yup.string(),//.required('Job Function is required'),
        experience: yup.object().shape({
            years: yup.string().min(1, 'Experience years is required'),//.required('Experience years is required!'),
            months: yup.string().min(1, 'Experience months is required'),//.required('Experience months is required')
        }),//.required(),
        current_location: yup.string(),//.required('Location is required'),
        key_skills: yup.string(),//.required('Key skills are required'),
        check_box: yup.boolean(),//.oneOf([true], 'Check box is required'),
        password: yup.string(),//.min(6, 'Password should be at least 6 characters').max(8, 'Password should not exceed 8 characters'),//.required('Password is required'),
        confirm_password: yup.string(),//.oneOf([yup.ref('password'), null], 'Passwords must match'),//.required('Confirm password is required'),
    }), []);

    const formik = useFormik({
        initialValues: {
            email: "",
            mobile: "",
            job_function: "",
            experience: { years: '', months: '' },
            current_location: "",
            key_skills: "",
            check_box: false,
            password: "",
            confirm_password: "",
            resumeFile: null
        },
        validationSchema,
        onSubmit: (values) => {
            // console.log("vemklmrlmgrlk", values)
            dispatch(createCandidate(values)).unwrapResult().then((res) => console.log("response", res))

        },
    });

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();

    return (
        <>
            <ToastContainer position='top-right' />
            <CssBaseline />
            <Box sx={{
                position: 'relative',
                mx: { xs: 0 },
                backgroundImage: `url(${JobImage})`,
                height: { xs: '150vh', md: '120vh' }, width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}>
                <Box sx={{
                    position: 'absolute', background: 'rgba(255,255,255,0.4)', width: '100%', height: '100%'
                }}>
                    <Grid container justifyContent={'center'} sx={{ pt: { md: 2, xs: 3 }, }}>
                        <Grid item xs={12} md={4} >
                            <Box
                                sx={{
                                    position: 'relative',
                                    backdropFilter: 'blur(10px)',
                                    backgroundImage: `url(${LoginImg})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    objectPosition: 'center',
                                    objectFit: 'cover',
                                    height: '100%',
                                }}>
                                <Box sx={{
                                    position: 'absolute', background: 'rgba(0,0,0,0.2)', width: '100%', height: '100%'
                                }}>
                                    <Stack sx={{ p: 10 }}>
                                        <Typography sx={{ color: '#fdfdfd' }} variant='h4' fontWeight={'bold'}>Find your dream job</Typography>
                                        <Typography variant='h6' sx={{ color: '#fdfdfd', display: 'flex', fontSize: '13px', alignItems: 'center' }}><DoneRoundedIcon sx={{ px: 1 }} />One Click Apply</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Card elevation={2} sx={{ p: 1, m: { md: 0, xs: 1 }, backdropFilter: 'blur(10px)' }}>
                                <CardContent component="form" onSubmit={formik.handleSubmit}>
                                    <Stack direction="column" spacing={2}>
                                        {/* Email */}
                                        <Stack sx={{ justifyContent: 'space-between', gap: 1, alignItems: 'center' }} direction={'row'}>
                                            <Typography sx={{ textAlign: 'right' }}>Email:</Typography>
                                            <TextField
                                                sx={{ width: { md: '300px', xs: '220px' } }}
                                                {...formik.getFieldProps('email')}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                                size="small"
                                                placeholder="Email Address"
                                                autoComplete='off'
                                            />
                                        </Stack>

                                        {/* Mobile */}
                                        <Stack sx={{ justifyContent: 'space-between', gap: 1, alignItems: 'center' }} direction={'row'}>
                                            <Typography sx={{ textAlign: 'right' }}>Mobile Number:</Typography>
                                            <TextField
                                                sx={{ width: { md: '300px', xs: '220px' } }}
                                                {...formik.getFieldProps('mobile')}
                                                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                                helperText={formik.touched.mobile && formik.errors.mobile}
                                                size="small"
                                                placeholder="Phone Number"
                                                autoComplete='off'
                                                type="tel"
                                            />
                                        </Stack>

                                        {/* Job Function */}
                                        <Stack sx={{ justifyContent: 'space-between', gap: 1, alignItems: 'center' }} direction={'row'}>
                                            <Typography sx={{ textAlign: 'right' }}>Job Function:</Typography>
                                            <TextField
                                                sx={{ width: { md: '300px', xs: '220px' } }}
                                                {...formik.getFieldProps('job_function')}
                                                error={formik.touched.job_function && Boolean(formik.errors.job_function)}
                                                helperText={formik.touched.job_function && formik.errors.job_function}
                                                size="small"
                                                placeholder="Job Function"
                                                autoComplete='off'
                                            />
                                        </Stack>

                                        {/* Experience */}
                                        <Stack direction={'row'} sx={{ justifyContent: 'space-between', gap: 1, alignItems: 'center' }}  >
                                            <Typography sx={{ textAlign: 'right' }}>Experience:</Typography>
                                            <Stack direction={'row'} alignItems={'center'} gap={1} >
                                                <TextField
                                                    sx={{ width: { md: '106px', xs: '67px' } }}
                                                    {...formik.getFieldProps('experience.years')}
                                                    error={formik.touched.experience?.years && Boolean(formik.errors.experience?.years)}
                                                    helperText={formik.touched.experience?.years && formik.errors.experience?.years}
                                                    size="small"
                                                    placeholder="Years"
                                                    autoComplete='off'
                                                    type="number"
                                                />
                                                <Typography sx={{ textAlign: 'right' }}>Years</Typography>
                                                <TextField
                                                    sx={{ width: { md: '106px', xs: '67px' } }}
                                                    {...formik.getFieldProps('experience.months')}
                                                    error={formik.touched.experience?.months && Boolean(formik.errors.experience?.months)}
                                                    helperText={formik.touched.experience?.months && formik.errors.experience?.months}
                                                    size="small"
                                                    placeholder="Months"
                                                    autoComplete='off'
                                                    type="number"
                                                />
                                                <Typography sx={{ textAlign: 'right' }}>Months</Typography>
                                            </Stack>
                                        </Stack>

                                        {/* Location */}
                                        <Stack sx={{ justifyContent: 'space-between', gap: 1, alignItems: 'center' }} direction={'row'}>
                                            <Typography sx={{ textAlign: 'right' }}>Current Location:</Typography>
                                            <TextField
                                                sx={{ width: { md: '300px', xs: '220px' } }}
                                                {...formik.getFieldProps('current_location')}
                                                error={formik.touched.current_location && Boolean(formik.errors.current_location)}
                                                helperText={formik.touched.current_location && formik.errors.current_location}
                                                size="small"
                                                placeholder="Location"
                                                autoComplete='off'
                                            />
                                        </Stack>

                                        {/* Key Skills */}
                                        <Stack sx={{ justifyContent: 'space-between', gap: 1, alignItems: 'center' }} direction={'row'}>
                                            <Typography sx={{ textAlign: 'right' }}>Key Skills:</Typography>
                                            <TextField
                                                sx={{ width: { md: '300px', xs: '220px' } }}
                                                {...formik.getFieldProps('key_skills')}
                                                error={formik.touched.key_skills && Boolean(formik.errors.key_skills)}
                                                helperText={formik.touched.key_skills && formik.errors.key_skills}
                                                size="small"
                                                placeholder="Key Skills"
                                                autoComplete='off'
                                            />
                                        </Stack>

                                        {/* Resume */}
                                        <Stack sx={{ justifyContent: 'space-between', gap: 1, alignItems: 'center' }} direction={'row'}>
                                            <Typography sx={{ textAlign: 'right' }}>Upload Resume:</Typography>
                                            <TextField
                                                sx={{ width: { md: '300px', xs: '220px' } }}
                                                type="file"
                                                onChange={(event) => formik.setFieldValue('resumeFile', event.currentTarget.files[0])}
                                                error={formik.touched.resumeFile && Boolean(formik.errors.resumeFile)}
                                                helperText={formik.touched.resumeFile && formik.errors.resumeFile}
                                                size="small"
                                            />
                                        </Stack>

                                        {/* Password */}
                                        <Stack sx={{ justifyContent: 'space-between', gap: 1, alignItems: 'center' }} direction={'row'}>
                                            <Typography sx={{ textAlign: 'right' }}>Password:</Typography>
                                            <TextField
                                                sx={{ width: { md: '300px', xs: '220px' } }}
                                                {...formik.getFieldProps('password')}
                                                type={showPassword ? 'text' : 'password'}
                                                error={formik.touched.password && Boolean(formik.errors.password)}
                                                helperText={formik.touched.password && formik.errors.password}
                                                size="small"
                                                placeholder="Password"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Stack>

                                        {/* Confirm Password */}
                                        <Stack sx={{ justifyContent: 'space-between', gap: 1, alignItems: 'center' }} direction={'row'}>
                                            <Typography sx={{ textAlign: 'right' }}>Confirm Password:</Typography>
                                            <TextField
                                                sx={{ width: { md: '300px', xs: '220px' } }}
                                                {...formik.getFieldProps('confirm_password')}
                                                type={showPassword ? 'text' : 'password'}
                                                error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                                                helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                                                size="small"
                                                placeholder="Confirm Password"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Stack>

                                        {/* Checkbox */}
                                        <Stack direction={'row'} alignItems={'center'} >
                                            <Checkbox
                                                checked={formik.values.check_box}
                                                onChange={formik.handleChange}
                                                name="check_box"
                                                sx={{ '& .MuiSvgIcon-root': { fontSize: 25, borderRadius: '2px', px: 0, color: palette.text.primary } }}
                                            />
                                            <Typography fontSize={'12px'}>By clicking Register, you agree to the Terms and Conditions & Privacy Policy of our website.</Typography>
                                        </Stack>

                                        {/* Register Button */}
                                        <Stack alignItems={'center'}>
                                            <Button
                                                variant="contained"
                                                type="submit"
                                                color="primary"
                                                sx={{ textTransform: 'none', width: { md: '300px', xs: '220px' } }}
                                            >
                                                Register
                                            </Button>
                                        </Stack>

                                        {/* Divider */}
                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                            <Divider sx={{ flexGrow: 1 }} />
                                            <Typography variant="caption" sx={{ px: 2 }}>OR</Typography>
                                            <Divider sx={{ flexGrow: 1 }} />
                                        </Stack>

                                        {/* Login Link */}
                                        <Stack alignItems={'center'}>
                                            <Link to="/login" style={{ textDecoration: 'none', color: palette.primary.main }}>
                                                Already have an account? Login here.
                                            </Link>
                                        </Stack>

                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default CondidateRegister;
