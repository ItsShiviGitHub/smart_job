import { useTheme } from '@emotion/react';
import { Box, Button, Card, CardContent, CssBaseline, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import React, { useMemo } from 'react'
import JobImage from '../../../assets/images/banner4.jpg';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import JobImage2 from '../../../assets/images/banner1.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GoogleMap from './GoogleMap';

const ContactUs = () => {
    const { spacing, palette } = useTheme();
    const commonInputProps = {
        size: 'small',
        fullWidth: true,
        sx: { width: { lg: '240px', md: '80%', xs: '200px' }, FocusEvent: 'none', background: 'rgba(250,250,250,1)', p: .3, color: palette.primary.main },
    };

    const validationSchema = useMemo(() => yup.object({
        name: yup.string(),
        email: yup.string(),//.email('Enter a valid email'),
        contact: yup.string(),//.min(10, 'Mobile number should be at least 10 characters'),//.required('Mobile number is required').matches(/^[1-9]\d{9}$/, "Invalid Contact Number"),

    }), []);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            contact: "",
        },
        validationSchema,
        // onSubmit: (values) => {
        //     // console.log("vemklmrlmgrlk", values)
        //     dispatch(createCandidate(values)).unwrapResult().then((res) => console.log("response", res))

        // },
    });
    return (
        <>
            <CssBaseline />
            <Box sx={{
                position: 'relative',
                mx: { xs: 0 },
                backgroundImage: `url(${JobImage})`,
                height: { lg: '50vh', md: '50vh', xs: '60vh' },
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black overlay with 50% opacity
                    zIndex: 1,
                },
                zIndex: 0, // Ensures that content within the Box is above the overlay
            }}>
                <Stack direction={'row'} sx={{ px: { lg: spacing(17), md: spacing(1), xs: spacing(1) }, position: 'relative', zIndex: 2 }}>
                    <Box sx={{ width: '100%', height: '100%', }}>
                        <Box sx={{ display: { md: 'flex', xs: 'block' }, justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <Box sx={{ pt: 11, width: { lg: '600px', md: '100%', xs: '100%' }, mb: { md: '0px', xs: '20px' } }}>
                                <Typography variant='h3' sx={{ color: '#FDFDFD', py: 1, fontSize: { md: '36px', xs: '30px' }, fontWeight: 'bold' }}>Contact Us</Typography>
                                <Typography sx={{ color: '#b1b2b0', fontSize: { md: '18px', xs: '20px' } }}>Add Some Short Description</Typography>
                            </Box>
                            <Stack direction={'row'} spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Link sx={{ fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }} href="/"><span style={{ color: '#b71c1c' }}>Home</span></Link>
                                <KeyboardDoubleArrowRightIcon sx={{ color: '#FDFDFD' }} />
                                <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: '#FDFDFD' }} > Contact Page </Typography>
                                {/* <img src={LoginImg} alt='recruiter' style={{ borderRadius: '50%', height: '100%', width: '100%' }} /> */}
                            </Stack>
                        </Box>
                    </Box>
                </Stack >
            </Box>
            <Box sx={{ px: { lg: spacing(17), md: spacing(1), xs: spacing(3) }, py: 5 }}>
                <Stack sx={{ alignItems: 'center' }}>

                    <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: '50px' }}>Contact Us</Typography>
                </Stack>
                <Grid container spacing={2} sx={{ py: 5, mb: 5 }}>
                    <Grid item md={6} xs={12} sx={{ backgroundColor: 'black', color: 'whitesmoke' }}>
                        <Box sx={{ p: 3 }}>
                            <Stack direction={'row'} spacing={2}>
                                <AddIcCallIcon sx={{ border: '1px solid white', fontSize: '45px', p: 1 }} />
                                <Typography variant='h6' sx={{ color: 'greenyellow' }}>Mobile<br />+91 6758346872</Typography>
                            </Stack>
                            <Stack direction={'row'} spacing={2}>
                                <MailIcon sx={{ border: '1px solid white', fontSize: '45px', p: 1 }} />
                                <Typography variant='h6' sx={{ color: 'greenyellow' }}>Mail<br />info@example.com</Typography>
                            </Stack>
                            <Stack direction={'row'} spacing={2}>
                                <LocationOnIcon sx={{ border: '1px solid white', fontSize: '45px', p: 1 }} />
                                <Typography variant='h6' sx={{ color: 'greenyellow' }}>Loaction<br />Bhawani Market, Noida Sector 18</Typography>
                            </Stack>
                            <Stack direction={'row'} spacing={1} pt={6}>
                                <FacebookIcon sx={{ color: 'green' }} />
                                <TwitterIcon sx={{ color: 'green' }} />
                                <LinkedInIcon sx={{ color: 'green' }} />
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{ pt: '0px !important' }}>
                        <Box component="img"
                            src={JobImage2}
                            sx={{
                                width: '100%',
                                height: '100%'
                            }} alt='Job Image2' />
                    </Grid>
                </Grid>
                <Card
                    elevation={3}
                    sx={{
                        p: 4,
                        m: 'auto',
                        maxWidth: { md: '600px', xs: '90%' },
                        backdropFilter: 'blur(5px)',
                        textAlign: 'center', // Center content inside the card
                    }}
                >
                    <CardContent component="form" onSubmit={formik.handleSubmit}>
                        <Stack direction="column" spacing={3}>
                            {/* Name */}
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                alignItems="center"
                                spacing={1}
                                sx={{ justifyContent: 'center' }}
                            >
                                <Typography sx={{ minWidth: '80px' }}>Name:</Typography>
                                <TextField
                                    sx={{ width: { md: '400px', xs: '100%' } }}
                                    {...formik.getFieldProps('name')}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    size="small"
                                    placeholder="Enter Your Name"
                                    autoComplete="off"
                                />
                            </Stack>

                            {/* Email */}
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                alignItems="center"
                                spacing={1}
                                sx={{ justifyContent: 'center' }}
                            >
                                <Typography sx={{ minWidth: '80px' }}>Email:</Typography>
                                <TextField
                                    sx={{ width: { md: '400px', xs: '100%' } }}
                                    {...formik.getFieldProps('email')}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    size="small"
                                    placeholder="Email Address"
                                    autoComplete="off"
                                />
                            </Stack>

                            {/* Mobile */}
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                alignItems="center"
                                spacing={1}
                                sx={{ justifyContent: 'center' }}
                            >
                                <Typography sx={{ minWidth: '80px' }}>Contact:</Typography>
                                <TextField
                                    sx={{ width: { md: '400px', xs: '100%' } }}
                                    {...formik.getFieldProps('contact')}
                                    error={formik.touched.contact && Boolean(formik.errors.contact)}
                                    helperText={formik.touched.contact && formik.errors.contact}
                                    size="small"
                                    placeholder="Contact Number"
                                    autoComplete="off"
                                    type="tel"
                                />
                            </Stack>

                            {/* Feedback */}
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                alignItems="center"
                                spacing={1}
                                sx={{ justifyContent: 'center' }}
                            >
                                <Typography sx={{ minWidth: '80px' }}>Feedback:</Typography>
                                <TextField
                                    sx={{ width: { md: '400px', xs: '100%' } }}
                                    {...formik.getFieldProps('description')}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                    size="small"
                                    placeholder="Your Feedback..."
                                    autoComplete="off"
                                    rows={3}
                                    multiline
                                />
                            </Stack>

                            {/* Submit Button */}
                            <Stack alignItems="center">
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="primary"
                                    sx={{ textTransform: 'none', width: { md: '100px', xs: '100%' } }}
                                >
                                    Submit
                                </Button>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>


            </Box>
            <GoogleMap />
        </>
    )
}

export default ContactUs