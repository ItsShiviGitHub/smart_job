import { Box, Button, Card, CardContent, Grid, Link, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import img1 from '../../../assets/images/callcenter.jpg';
import img2 from '../../../assets/images/feedback.jpg';
import img3 from '../../../assets/images/office1.jpg';
import EmailIcon from '@mui/icons-material/Email';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import { useDispatch } from 'react-redux';


const Contact = () => {
    // const dispatch = useDispatch();
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
        <Box sx={{ p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                    <Box sx={{ p: 2, mb: 2, backgroundColor: 'rgb(242, 176, 78)', borderRadius: '2px' }}>
                        <Typography variant='body2'> IMPORTANT: TimesJobs do not guarantee/commit any job directly or indirectly and do not arrange any
                            interview calls or send any appointment letter directly <Link>Know more..</Link></Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, mb: 2, backgroundColor: 'skyblue', borderRadius: '2px' }}>
                        <Typography sx={{ fontWeight: 900, color: 'white', fontSize: '22px' }}> Need Some Help? </Typography>
                        <Typography variant='h7' sx={{ color: 'white' }}>For Media Queries.<Link>Click Here</Link></Typography>
                    </Box>
                    <Paper sx={{ p: '30px 0px' }}>
                        <Grid container spacing={2} justifyContent="space-between" sx={{ p: 2 }}>
                            <Grid item xs={12} md={5}>
                                <Stack direction="column" spacing={2}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            backgroundImage: `url(${img1})`,
                                            backgroundSize: '180%',
                                            backgroundPosition: 'center 10%',
                                            height: '120px',
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: '#ffffff',
                                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                                            ml: 2
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                backgroundColor: 'black',
                                                p: 1,
                                                position: 'absolute',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Call Us
                                        </Typography>
                                    </Box>
                                    <Box sx={{ p: '10px 20px' }}>
                                        <Typography variant='body2'>Call us for corporate queries/ concern</Typography>
                                        <Typography variant='h6'><b>0120 6358222</b></Typography>
                                        <Typography variant='body2'>Monday to Friday Call 10AM to 6PM</Typography>
                                    </Box>
                                </Stack>
                                <Stack direction="column" spacing={2}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            backgroundImage: `url(${img2})`,
                                            backgroundSize: '180%',
                                            backgroundPosition: 'center 10%',
                                            height: '120px',
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: '#ffffff',
                                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                                            ml: 2
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                backgroundColor: 'black',
                                                p: 1,
                                                position: 'absolute',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Feedback
                                        </Typography>
                                    </Box>
                                    <Box sx={{ p: '10px 20px' }}>
                                        <Typography variant='body2'>Call us for corporate queries/ concern</Typography>
                                        <Typography variant='h6'><b>0120 6358222</b></Typography>
                                        <Typography variant='body2'>Monday to Friday Call 10AM to 6PM</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card elevation={2} sx={{ p: 1, m: { md: 0, xs: 1 }, backdropFilter: 'blur(10px)' }}>
                                    <CardContent component="form" onSubmit={formik.handleSubmit}>
                                        <Stack direction="column" spacing={2}>
                                            {/* Name */}
                                            <Stack sx={{ justifyContent: 'space-between', gap: 1, alignItems: 'center' }} direction={'row'}>
                                                <Typography sx={{ textAlign: 'right' }}>Name:</Typography>
                                                <TextField
                                                    sx={{ width: { md: '300px', xs: '220px' } }}
                                                    {...formik.getFieldProps('name')}
                                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                                    helperText={formik.touched.name && formik.errors.name}
                                                    size="small"
                                                    placeholder="Enter Your Name"
                                                    autoComplete='off'
                                                />
                                            </Stack>
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
                                                <Typography sx={{ textAlign: 'right' }}>Contact:</Typography>
                                                <TextField
                                                    sx={{ width: { md: '300px', xs: '220px' } }}
                                                    {...formik.getFieldProps('contact')}
                                                    error={formik.touched.contact && Boolean(formik.errors.contact)}
                                                    helperText={formik.touched.contact && formik.errors.contact}
                                                    size="small"
                                                    placeholder="Contact Number"
                                                    autoComplete='off'
                                                    type="tel"
                                                />
                                            </Stack>
                                            {/* Feedback */}
                                            <Stack sx={{ justifyContent: 'space-between', gap: 1, alignItems: 'center' }} direction={'row'}>
                                                <Typography sx={{ textAlign: 'right' }}>Feedback:</Typography>
                                                <TextField
                                                    sx={{ width: { md: '300px', xs: '220px' } }}
                                                    {...formik.getFieldProps('description')}
                                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                                    helperText={formik.touched.description && formik.errors.description}
                                                    size="small"
                                                    placeholder="Your Feedback..."
                                                    autoComplete='off'
                                                    type="text"
                                                    rows={3}
                                                    multiline
                                                />
                                            </Stack>
                                            {/* Submit Button */}
                                            <Stack alignItems={'center'}>
                                                <Button
                                                    variant="contained"
                                                    type="submit"
                                                    color="primary"
                                                    sx={{ textTransform: 'none', width: { md: '300px', xs: '220px' } }}
                                                >
                                                    Submit
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Box
                            sx={{
                                position: 'relative',
                                backgroundImage: `url(${img3})`,
                                width: { xs: '80vw', md: '70vw' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center', // Centers the inner Box horizontally
                                color: '#ffffff',
                                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                                backgroundSize: 'cover', // Ensure the image covers the Box
                                backgroundPosition: 'center', // Centers the background image
                                ml: 2

                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: 'white',
                                    opacity: '0.9',
                                    display: 'block',
                                    p: { xs: '30px 20px', md: '50px 50px' },
                                    color: 'black',
                                    width: { xs: '50vw', md: '30vw' },
                                    my: 5,
                                }}
                            >
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>You Can Also Visit Our Office At</Typography>
                                <Typography variant='body2'>TimesJobs.com</Typography>
                                <Typography variant='body2'>Times Business Solutions (A Division of Times Internet Ltd.)</Typography>
                                <Typography variant='body2'>Times Center (Digital Content Production Facility)</Typography>
                                <Typography variant='body2'>FC - 6, (Ground Floor),</Typography>
                                <Typography variant='body2'>Sector 16 A, Film City,</Typography>
                                <Typography variant='body2'>NOIDA - 201 301</Typography>
                                <Typography variant='body2'>Uttar Pradesh</Typography>
                            </Box>
                        </Box>
                    </Paper>

                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ pb: '20px' }}>
                        <Box sx={{ backgroundColor: 'skyblue', height: '40px' }}>
                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: 'white', p: 1 }}>Reach Us</Typography>
                        </Box>
                        <Box sx={{ border: '1px solid gray', p: { xs: '10px 10px', md: '10px 20px' }, m: '20px 20px' }}>
                            <Typography variant='p'><b>For Job Seeker Queries</b></Typography>
                            <Stack direction={' row'} gap={1} sx={{ mt: '8px' }}>
                                <EmailIcon /> <Typography variant='h6'><Link>timesjobs@timesinternet.in</Link></Typography>
                            </Stack>
                        </Box>

                        <Box sx={{ border: '1px solid gray', p: { xs: '10px 10px', md: '10px 20px' }, m: '20px 20px' }}>
                            <Typography variant='p'><b>For Job Seeker Queries</b></Typography>
                            <Stack direction={' row'} gap={1} sx={{ mt: '8px' }}>
                                <EmailIcon /> <Typography variant='h6'><Link>timesjobs@timesinternet.in</Link></Typography>
                            </Stack>
                        </Box>

                        <Box sx={{ border: '1px solid gray', p: { xs: '10px 10px', md: '10px 20px' }, m: '20px 20px' }}>
                            <Typography variant='p'><b>For Job Seeker Queries</b></Typography>
                            <Stack direction={' row'} gap={1} sx={{ mt: '8px' }}>
                                <EmailIcon /> <Typography variant='h6'><Link>timesjobs@timesinternet.in</Link></Typography>
                            </Stack>
                        </Box>

                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Contact;
