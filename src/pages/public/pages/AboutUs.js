import React from 'react';
import { Box, Stack, Typography, useTheme, CssBaseline, Link, Grid } from '@mui/material';
import JobImage from '../../../assets/images/banner4.jpg'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import JobImage1 from '../../../assets/images/banner5.jpg'
import JobImage2 from '../../../assets/images/banner1.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { jobData, iconData } from '../../../apiData/sliderData';

const AboutUs = () => {
    const { spacing, palette } = useTheme();
    // const navigate = useNavigate();


    const commonInputProps = {
        size: 'small',
        fullWidth: true,
        sx: { width: { lg: '240px', md: '80%', xs: '200px' }, FocusEvent: 'none', background: 'rgba(250,250,250,1)', p: .3, color: palette.primary.main },
    };

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
                                <Typography variant='h3' sx={{ color: '#FDFDFD', py: 1, fontSize: { md: '36px', xs: '30px' }, fontWeight: 'bold' }}>About Us</Typography>
                                <Typography sx={{ color: '#b1b2b0', fontSize: { md: '18px', xs: '20px' } }}>The Unique Solutions for Your Bussiness</Typography>
                            </Box>
                            <Stack direction={'row'} spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Link sx={{ fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }} href="/"><span style={{ color: '#b71c1c' }}>Home</span></Link>
                                <KeyboardDoubleArrowRightIcon sx={{ color: '#FDFDFD' }} />
                                <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: '#FDFDFD' }} > About Page </Typography>
                                {/* <img src={LoginImg} alt='recruiter' style={{ borderRadius: '50%', height: '100%', width: '100%' }} /> */}
                            </Stack>
                        </Box>
                    </Box>
                </Stack >
            </Box >

            <Box sx={{ px: { lg: spacing(17), md: spacing(1), xs: spacing(3) } }}>
                <Grid container sx={{ alignItems: 'center', justifyContent: 'space-around', py: spacing(8) }}>
                    <Grid item md={6} xs={12}>
                        <Typography variant='h5' sx={{ mb: '10px' }}>
                            <span style={{ color: '#b71c1c' }}><b>OUR INFO</b></span>
                        </Typography>
                        <Typography variant='h3'>
                            The best solutions for your business
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography variant='h5'>
                            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit ipsum dolor.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ py: 5 }}>
                    <Grid item md={6} xs={12} >
                        <Box
                            component="img"
                            src={JobImage1}
                            sx={{
                                width: '100%',
                                height: 'auto'
                            }}
                            alt="Job Image 1"
                        />
                        <Typography variant='h3' sx={{ mb: '10px' }}>
                            <b>Our Approach</b>
                        </Typography>
                        <Typography variant='h5'>
                            <span style={{ color: '#b1b2b0' }}>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit ipsum dolor.</span>
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box
                            component="img"
                            src={JobImage2}
                            sx={{
                                width: '100%',
                                height: 'auto'
                            }}
                            alt="Job Image 2"
                        />
                        <Typography variant='h3' sx={{ mb: '10px' }}>
                            <b>Our Approach</b>
                        </Typography>
                        <Typography variant='h5'>
                            <span style={{ color: '#b1b2b0' }}>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit ipsum dolor.</span>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} position="relative" sx={{ py: 5 }}>
                    {iconData.map((item, index) => (
                        <Grid item md={3} xs={12} sx={{ position: 'relative', mb: { xs: 5 } }} key={index}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    fontSize: '30px',
                                    textAlign: 'center',
                                    backgroundColor: 'green',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '22%',
                                    padding: '5px',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {item.icon}
                            </Box>
                            <Box
                                sx={{
                                    border: '1px solid gray',
                                    padding: '24px',
                                    textAlign: 'center',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                <Typography variant="h3">{item.value}</Typography>
                                <Typography variant="h6">{item.label}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ py: 5, mb: 5 }}>
                    <Stack sx={{ alignItems: 'center' }}>
                        <Typography variant='h6' sx={{ mb: '5px' }}>
                            <span style={{ color: '#b71c1c' }}><b>OUR TEAM</b></span>
                        </Typography>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: '40px' }}>Our Creative Team</Typography>
                    </Stack>
                    <Grid container spacing={2} position={'relative'}>
                        {jobData.map((job, index) => (
                            <Grid item md={4} xs={12} position={'relative'} key={index} sx={{
                                my: { xs: 3 }
                            }}>
                                <Box
                                    component="img"
                                    src={job.image}
                                    sx={{
                                        width: '100%',
                                        height: '300px'
                                    }}
                                    alt={`${job.name} Image`}
                                />
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: '-15px',
                                    left: '13%',
                                    transform: 'translateY(10%)',
                                    fontSize: '70px',
                                    backgroundColor: '#FDFDFD',
                                    width: '80%',
                                    color: 'black',
                                    padding: '15px',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)'
                                }}>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{job.name}</Typography>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'baseline'}>
                                        <Typography sx={{ fontSize: '12px' }}>{job.position}</Typography>
                                        <Stack direction={'row'} spacing={1}>
                                            <FacebookIcon sx={{ color: 'green' }} />
                                            <TwitterIcon sx={{ color: 'green' }} />
                                            <LinkedInIcon sx={{ color: 'green' }} />
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box >
        </>
    )
}

export default AboutUs







