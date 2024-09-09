import React, { useState, useMemo } from 'react';
import { Box, Button, Grid, Typography, TextField, Stack, Card, CardContent, IconButton, InputAdornment, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Visibility, VisibilityOff, DoneRounded } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JobImage from '../../../assets/images/blue.jpeg';
import LoginImg from '../../../assets/images/girlhr.jpg';

const CondidateLogin = () => {
    const { palette, spacing } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = useMemo(() => yup.object({
        email: yup.string().email('Enter a valid email').required('Email is required'),
        password: yup.string().min(6, 'Password should be at least 6 characters').max(8, 'Password should not exceed 8 characters').required('Password is required'),
    }), []);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const resultAction = await dispatch();
                const result = unwrapResult(resultAction);
                toast.success(result?.message);
                if (result?.Status) {
                    navigate('/otpinput');
                }
            } catch (error) {
                toast.error(error.message);
            }
        },
    });

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();

    return (
        <>
            <ToastContainer position='top-right' />
            <Box sx={{
                position: 'relative',
                mx: { xs: 0 },
                backgroundImage: `url(${JobImage})`,
                height: { md: '89vh', xs: '80vh' }, width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }}>
                <Box sx={{
                    position: 'absolute', background: 'rgba(255,255,255,0.4)', width: '100%', height: '100%'
                }}>
                    <Grid container justifyContent={'center'} sx={{ mt: { md: 15, xs: 2 } }}>
                        <Grid item xs={12} md={4} >
                            <Box
                                sx={{
                                    display: { md: 'block', xs: 'none' },
                                    position: 'relative',
                                    backdropFilter: 'blur(10px)',
                                    backgroundImage: `url(${LoginImg})`,
                                    backgroundSize: 'cover',
                                    height: '100%'
                                }}>
                                <Box sx={{
                                    position: 'absolute', background: 'rgba(0,0,0,0.2)', width: '100%', height: '100%'
                                }}>
                                    <Stack sx={{ p: 10 }}>
                                        <Typography sx={{ color: '#fdfdfd' }} variant='h4' fontWeight={'bold'}>Find your dream job</Typography>
                                        <Typography variant='h6' sx={{ color: '#fdfdfd', display: 'flex', fontSize: '13px', alignItems: 'center' }}><DoneRounded sx={{ px: 1 }} />One Click Apply</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Card elevation={2} sx={{ p: 1, m: { md: 0, xs: 1 }, backdropFilter: 'blur(10px)', }}>
                                <CardContent component="form" onSubmit={formik.handleSubmit}>
                                    <Stack direction="column" sx={{ p: 3 }}>
                                        <Typography variant='h6' fontWeight={'bold'} textAlign={'center'} sx={{ pb: 2 }}>Login to your Timesjobs account</Typography>
                                        <Stack direction={'column'}>
                                            <Typography sx={{ my: 1, textAlign: 'left' }}>Email / Login Id:</Typography>
                                            <TextField
                                                {...formik.getFieldProps('email')}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                                size="small"
                                                fullWidth
                                                placeholder="Email Address"
                                                autoComplete='off'
                                            />
                                        </Stack>
                                        <Stack direction={'column'}>
                                            <Typography sx={{ my: 1, textAlign: 'left' }}>Password:</Typography>
                                            <TextField
                                                {...formik.getFieldProps('password')}
                                                error={formik.touched.password && Boolean(formik.errors.password)}
                                                helperText={formik.touched.password && formik.errors.password}
                                                size="small"
                                                placeholder="Password"
                                                type={showPassword ? 'text' : 'password'}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                size="small"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Stack>
                                        <Stack direction={'row'} sx={{ my: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Typography>
                                                <Link to='/forgetpassword' style={{ textDecoration: 'none', fontSize: '10px', color: '#000' }}>
                                                    Forget Password?
                                                </Link>
                                            </Typography>
                                            <Button
                                                type="submit"
                                                size="small"
                                                variant="contained"
                                                sx={{
                                                    p: 1,
                                                    width: '150px',
                                                    transition: '0.5s ease-out',
                                                    // background: palette.secondary.main,
                                                    '&:hover': {
                                                        background: palette.secondary.main,
                                                    }
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </Stack>
                                        <Typography sx={{ color: '#000', mt: 1 }}>
                                            Don't have an account? <Link to='/condidateregister' style={{ color: palette.secondary.dark, fontWeight: 'bold', fontSize: '12px' }}>Register Now!</Link>
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default CondidateLogin;
