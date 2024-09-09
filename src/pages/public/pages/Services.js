import { Box, Button, CardContent, CssBaseline, Grid, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import JobImage from '../../../assets/images/banner4.jpg';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useTheme } from '@emotion/react';
import DescriptionIcon from '@mui/icons-material/Description';
import { CardComponent } from '../../../apiData/sliderData';

const Services = () => {
    const { spacing, palette } = useTheme();

    const cardData = [
        { icon: <DescriptionIcon sx={{ fontSize: '35px' }} />, title: "Concept", description: "Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla." },
        { icon: <DescriptionIcon sx={{ fontSize: '35px' }} />, title: "Prepare", description: "Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla." },
        { icon: <DescriptionIcon sx={{ fontSize: '35px' }} />, title: "Retouch", description: "Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla." },
        { icon: <DescriptionIcon sx={{ fontSize: '35px' }} />, title: "Finalize", description: "Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla." },
        { icon: <DescriptionIcon sx={{ fontSize: '35px' }} />, title: "Daily Updates", description: "Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla." },
        { icon: <DescriptionIcon sx={{ fontSize: '35px' }} />, title: "24/7 Supports", description: "Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla." },

    ];

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
                        <Stack direction={'row'} spacing={1} sx={{
                            display: 'flex', alignItems: 'center',
                            py: { md: spacing(17), xs: spacing(17) }, px: { md: spacing(50), xs: spacing(4) }
                        }}>
                            <Link sx={{ fontWeight: 'bold', fontSize: '20px', textDecoration: 'none' }} href="/"><span style={{ color: '#b71c1c' }}>Home</span></Link>
                            <KeyboardDoubleArrowRightIcon sx={{ color: '#FDFDFD' }} />
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: '#FDFDFD' }} > Service Page </Typography>
                        </Stack>
                    </Box>
                </Stack >
            </Box>
            <Box sx={{ px: { lg: spacing(17), md: spacing(1), xs: spacing(3) } }}>

                <Grid container sx={{ alignItems: 'center', justifyContent: 'space-around', py: spacing(12) }}>
                    <Grid item md={6} xs={12}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            <span style={{ color: '#b71c1c' }}>
                                <b>What we do?</b>
                            </span>
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: '35px' }}>
                            The service we offer is specifically designed to meet
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '35px' }}>
                            Your Needs.
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 2 }}>
                            Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla tincidunt
                            laoreet Morbi ac metus vitae diam scelerisque malesuada eget eu mauris. Cras
                            varius lorem ac velit pharetra.
                        </Typography>
                        <Button variant="contained"
                            type="submit"
                            color="primary"
                            sx={{
                                textTransform: 'none', width: { md: '150px', xs: '100%' },
                                py: 1.5, my: 10, fontSize: '15px', fontWeight: 'bold', borderRadius: '5px'
                            }}>
                            Read More</Button>
                    </Grid>

                    {/* Right section: Images grid */}
                    <Grid item container md={6} xs={12} >
                        <Grid item md={6} xs={12}>
                            <Box sx={{ width: '250px', height: '200px' }}>
                                <img
                                    src={JobImage}
                                    alt="Job"
                                    style={{
                                        height: '100%',
                                        borderRadius: '15px',
                                        width: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                            <Box sx={{ mt: 2, width: '250px', height: '200px' }}>
                                <img
                                    src={JobImage}
                                    alt="Job"
                                    style={{
                                        height: '100%',
                                        borderRadius: '15px',
                                        width: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box sx={{ width: '250px', height: '200px' }}>
                                <img
                                    src={JobImage}
                                    alt="Job"
                                    style={{
                                        height: '100%',
                                        borderRadius: '15px',
                                        width: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                            <Box sx={{ mt: 2, width: '250px', height: '200px' }}>
                                <img
                                    src={JobImage}
                                    alt="Job"
                                    style={{
                                        height: '100%',
                                        borderRadius: '15px',
                                        width: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
            <Box sx={{ px: { lg: spacing(17), md: spacing(1), xs: spacing(3) }, backgroundColor: '#faf7f7', py: spacing(10) }}>
                <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                    <span style={{ color: '#b71c1c' }}>
                        <b>How We Do it?</b>
                    </span>
                </Typography>
                <Typography variant='body2' sx={{ fontSize: '35px', px: 15, textAlign: 'center' }}>We Are A Young And Creative Company & We
                    Offer You<span style={{ fontWeight: 'bold', fontSize: '35px' }}>Fresh Ideas.</span></Typography>

                <Grid container spacing={4} sx={{ mt: '40px' }}>
                    {cardData.map((card, index) => (
                        <Grid item md={4} xs={12} key={index}>
                            <CardComponent
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{
                position: 'relative',
                px: { lg: spacing(17), md: spacing(1), xs: spacing(3) },
                py: spacing(10),
                mx: { xs: 0 },
                my: spacing(7),
                backgroundImage: `url(${JobImage})`,
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
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Black overlay
                    zIndex: 1,
                },
                zIndex: 0, // Content above overlay
            }}>
                <Typography variant='h5' sx={{ color: '#ff6700' }}>Why Choose Us</Typography>
                <Typography variant='h3' sx={{ color: '#ffffff', py: spacing(2) }}>
                    <b>Get in touch with us and we’ll help<br /> your business.</b>
                </Typography>
                <Typography variant='h6' sx={{ color: '#ffffff', py: spacing(2) }}>
                    <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non ipsum soluta<br />
                        perferendis veniam qui esse magnam commodi quisquam vitae labore nemo at<br />
                        voluptatem, totam, minima recusandae assumenda.</b>
                </Typography>
                <Stack direction={'row'} spacing={2}>
                    <Button variant='contained' sx={{ backgroundColor: '#FFFFFF', color: '#004e98' }}>
                        <b>Read More</b> <KeyboardDoubleArrowRightIcon sx={{ color: '#004e98' }} />
                    </Button>
                    <Button variant='contained' sx={{ backgroundColor: '#ff6700', color: '#FFFFFF' }}>
                        Read More<KeyboardDoubleArrowRightIcon sx={{ color: '#FFFFFF' }} />
                    </Button>
                </Stack>
            </Box>

        </>
    )
}

export default Services