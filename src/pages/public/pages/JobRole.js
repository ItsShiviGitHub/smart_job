import React from 'react';
import { Box, Card, CardContent, CssBaseline, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Hadrabad from '../../../assets/images/job_loc.jpg';
import Bangeluru from '../../../assets/images/job_loc1.jpg';
import CompanySlider from './CompanySlider';
import { jobSlides } from '../../../apiData/sliderData';
import JobsImg from '../../../assets/images/background1.jpg';

const JobRole = () => {
    const { palette, spacing } = useTheme();
    return (
        <>
            <CssBaseline />
            <Box sx={{ backgroundImage: `url(${JobsImg})`, position: 'relative', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', }}>
                <Box sx={{ width: '100%', height: '100%', background: 'rgba(255,255,250,.5)', backdropFilter: 'blur(5px)', px: { lg: spacing(17), md: spacing(1), sm: spacing(1), xs: spacing(1) } }}>
                    <Typography variant='h4' sx={{ textTransform: 'uppercase', fontWeight: 'bold', py: spacing(3), color: palette.primary.main }}>Browse Jobs</Typography>
                    <Stack sx={{ flexDirection: { md: 'row', xs: 'column' }, gap: spacing(1) }}>
                        <Box>
                            <Paper elevation={1} sx={{ p: spacing(2) }}>
                                <Grid container spacing={2} >
                                    {jobSlides.map((role, index) => (
                                        <Grid item xs={6} sm={3} md={4} lg={2.4} key={index}>
                                            <Card
                                                sx={{
                                                    borderRadius: '10px',
                                                    boxShadow: 'inset-1px -5px 25px 1px #fce4ec',
                                                    background: 'linear-gradient(pink -20%,white 60%)',
                                                    backdropFilter: 'blur(5px)',
                                                    transition: 'all 0.5s ease-in-out',
                                                    '&:hover': {
                                                        cursor: 'pointer',
                                                        backdropFilter: 'blur(8px)',
                                                        background: 'linear-gradient(white, pink)',
                                                    }
                                                }}
                                            >
                                                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                                                    {role.icon}
                                                    <Typography variant='body2' textAlign={'center'}>{role.title}</Typography>
                                                    <Typography>{role.activeJobs} Active Jobs</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                    <Grid item xs={6} md={4} lg={2.4}>
                                        <Card
                                            sx={{
                                                borderRadius: '10px',
                                                boxShadow: 'inset-1px -5px 25px 1px #fce4ec',
                                                background: 'linear-gradient(pink -20%,white 60%)',
                                                backdropFilter: 'blur(5px)',
                                                transition: 'all 0.5s ease-in-out',
                                                '&:hover': {
                                                    cursor: 'pointer',
                                                    backdropFilter: 'blur(8px)',
                                                    background: 'linear-gradient(white, pink)',
                                                }
                                            }}
                                        >
                                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'auto', m: 2, gap: 2 }}>
                                                <DashboardIcon sx={{ fontSize: 40 }} />
                                                <Typography sx={{ color: palette.secondary.main, fontSize: '15px' }}>View All</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <CompanySlider />
                        </Box>
                        <Stack direction={'column'} spacing={1} sx={{ display: { md: 'block', xs: 'none' } }}>
                            <Box sx={{ height: '290px', width: '250px' }}>
                                <img src={Hadrabad} alt='Hadrabad' style={{ height: '100%', width: '100%' }} />
                            </Box>
                            <Box sx={{ height: '290px', width: '250px' }}>
                                <img src={Bangeluru} alt='Bangeluru' style={{ height: '100%', width: '100%' }} />
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default JobRole;
