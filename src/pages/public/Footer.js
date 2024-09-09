import React from 'react'
import { Grid, Stack, Box, Typography, OutlinedInput, Divider, Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOutlinedOnIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Img1 from '../../assets/images/background1.jpg';
const Footer = () => {
    const { spacing, palette } = useTheme();
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${Img1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // backgroundAttachment: 'fixed',
                position: 'relative',
            }}>
                <Box sx={{ px: { md: spacing(10), xs: 2 }, backdropFilter: 'blur(5px)', backgroundColor: 'rgb(13, 16, 28) ' }}>
                    <Grid container direction="row" sx={{ pt: 2, display: { xs: 'block', md: 'flex', sm: 'block', lg: 'flex' }, justifyContent: 'space-between', alignItems: "center" }}>
                        <Grid item xs={12} md={3}>
                            <Stack sx={{ my: 1, height: { md: '300px', lg: '300px', xs: '100%' }, width: '250px', }}>
                                <Typography variant='h4' sx={{ color: '#fff', fontWeight: 'bold' }}>
                                    Smart<Typography component={'span'} sx={{ color: palette.secondary.dark, fontSize: '20px' }}>Job</Typography>
                                </Typography>
                                <Divider sx={{ backgroundColor: '#fff', my: 1, width: { xs: '135%', md: '100%' } }} />
                                <Typography variant={'p'} sx={{ textAlign: 'left', color: '#bdbdbd', my: 1, pr: 5 }} color="initial">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sit eaque maxime nesciunt quasi consectetur facere eveniet molestiae voluptatem ex.</Typography>
                                <Stack direction="row" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FacebookIcon to="https://www.facebook.com/profile.php?id=100017834436266" sx={{ '&:hover': { transform: 'scale(1.1)' }, tranaition: 'all linear 0.5s ease', cursor: 'pointer', fontSize: '30px', color: '#fdfdfd', my: 2, mx: 1 }} />
                                    <YouTubeIcon to="https://www.youtube.com/@amit_web_dev" sx={{ '&:hover': { transform: 'scale(1.1)' }, tranaition: 'all linear 0.5s ease', cursor: 'pointer', fontSize: '35px', color: '#fdfdfd', my: 2, mx: 1 }} />
                                    <TwitterIcon sx={{ '&:hover': { transform: 'scale(1.1)' }, tranaition: 'all linear 0.5s ease', cursor: 'pointer', fontSize: '30px', color: '#fdfdfd', my: 2, mx: 1 }} />
                                    <InstagramIcon to="https://www.linkedin.com/in/amit-kumar-492795290" sx={{ '&:hover': { transform: 'scale(1.1)' }, tranaition: 'all linear 0.5s ease', cursor: 'pointer', fontSize: '30px', color: '#fdfdfd', my: 2, mx: 1 }} />
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ pt: '10px' }}>
                            <Stack sx={{ my: 1, height: { md: '300px', lg: '300px', xs: '100%' }, width: { md: '200px', xs: '100%' } }}>
                                <Typography sx={{ color: '#fdfdfd', fontWeight: 'bold', }} variant={'h6'}>Explore</Typography>
                                <Divider sx={{ backgroundColor: '#fff', my: 1 }} />
                                <Box sx={{ listStyle: 'none', gap: '10px', my: 1 }}>
                                    <Link to={'/'} style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }}><ChevronRightIcon sx={{ pr: 1, }} />About  </Link>
                                    <Link to={'/about'} style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }}><ChevronRightIcon sx={{ pr: 1, }} />My Account </Link>
                                    <Link to={'services/'} style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }}><ChevronRightIcon sx={{ pr: 1, }} />Upload Resume </Link>
                                    <Link to={'/contact'} style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }}><ChevronRightIcon sx={{ pr: 1, }} />Pricing Package</Link>
                                    <Link to={'services/'} style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }}><ChevronRightIcon sx={{ pr: 1, }} />User Dashboard</Link>
                                    <Link to={'/contact'} style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }}><ChevronRightIcon sx={{ pr: 1, }} />FAQs  </Link>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ pt: '10px' }}>
                            <Stack sx={{ my: 1, height: { md: '300px', lg: '300px', xs: '100%' }, width: { md: '250px', xs: '100%' } }}>
                                <Typography sx={{ color: '#fdfdfd', fontWeight: 'bold', }} variant={'h6'}>Information</Typography>
                                <Divider sx={{ backgroundColor: '#fff', my: 1 }} />
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '0px', md: '10px' }, pb: '15px', mt: { xs: '10px' } }}>
                                    <Box sx={{ p: "0px 15px" }}> <CallOutlinedIcon style={{ color: '#FDFDFD' }} sx={{ fontSize: '30px' }} /></Box>
                                    <Stack>
                                        <Typography variant='h5' style={{ color: palette.secondary.main }}>Phone Number</Typography>
                                        <Link style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }} to="tel:6393351817">+91 (1234) 567890</Link>
                                    </Stack>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '0px', md: '10px' }, pb: '15px' }}>
                                    <Box sx={{ p: "0px 15px" }}> <EmailOutlinedIcon style={{ color: '#FDFDFD' }} sx={{ fontSize: '30px' }} /></Box>
                                    <Stack>
                                        <Typography variant='h5' style={{ color: palette.secondary.main }}>Email</Typography>
                                        <Link style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }} to="tel:6393351817">abcsd@gmail.com</Link>
                                    </Stack>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '0px', md: '10px' }, pb: '15px' }}>
                                    <Box sx={{ p: "0px 15px" }}> <LocationOutlinedOnIcon style={{ color: '#FDFDFD' }} sx={{ fontSize: '30px' }} /></Box>
                                    <Stack>
                                        <Typography variant='h5' style={{ color: palette.secondary.main }}>Office Address</Typography>
                                        <Link style={{ color: '#fdfdfd', textDecoration: 'none', display: 'flex', my: 1, alignItems: 'center' }} to="tel:6393351817">Bhavani Market Noida Sector 18</Link>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid xs={12} md={3} sx={{ pt: '10px' }}>
                            <Box sx={{ my: 1, height: { md: '300px', lg: '300px', xs: '100%' }, }}>
                                <Typography sx={{ color: '#fdfdfd', fontWeight: 'bold', }} variant={'h6'}>NEWSLETTERS</Typography>
                                <Divider sx={{ backgroundColor: '#fff', my: 1 }} />
                                <Typography variant={'p'} sx={{ width: '310px', textAlign: 'left', color: '#bdbdbd', my: 1, py: 1 }}>Sign up for free weekly newsletter. Don't miss a thing.</Typography>
                                <Stack direction="row" sx={{ my: 4 }}>
                                    <OutlinedInput sx={{ borderRadius: '1px 0 0 1px ', color: '#fdfdfd', outLine: 'none', height: '40px', width: { xs: '60%' } }}
                                        type="email"
                                        size="small"
                                        placeholder="Enter your email "

                                    />
                                    <Button size="small" variant="contained" sx={{ py: 1, border: '1px solid #eee', color: '#ffffff', backgroundColor: '#222C40' }}>Subscribe</Button>

                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider sx={{ backgroundColor: '#fff' }} />
                    <Stack sx={{ py: 1 }}>
                        <Typography variant="body2" textAlign='center' style={{ color: '#FDFDFD' }}>© 2024 SmartJob. All rights reserved | Designed by Shivangigupta</Typography>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Footer;