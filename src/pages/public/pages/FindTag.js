import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, OutlinedInput, Stack, Typography, useTheme, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import JobImage from '../../../assets/images/find3.avif'
import LoginImg from '../../../assets/images/recruitergirl-removebg-preview.png'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

const FindTag = () => {
    const { spacing, palette } = useTheme();
    const navigate = useNavigate();
    const [country, setCountry] = useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

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
                mt: spacing(2), mx: { xs: 0 },
                backgroundImage: `url(${JobImage})`,
                height: { lg: '70vh', md: '70vh', xs: '60vh' }, width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // backgroundAttachment: 'fixed'
            }}>
                <Stack direction={'row'} sx={{ px: { lg: spacing(17), md: spacing(1), xs: spacing(1) }, backdropFilter: 'blur(30px)', }}>
                    <Box sx={{ width: '100%', height: '100%', }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ pt: 11, width: { lg: '600px', md: '100%', xs: '100%' } }}>
                                <Typography variant='h3' sx={{ color: '#FDFDFD', py: 2, fontSize: { md: '50px', xs: '30px' }, fontWeight: 'bold' }}>Jobs for the Next Billion
                                    Trusted by 50 Lakh+ Candidates across India
                                </Typography>
                                <Box sx={{ my: 5 }}>
                                    <Stack direction={'row'} >
                                        <OutlinedInput style={{ backgroundColor: '#FDFDFD' }} {...commonInputProps} size='small' type="search" placeholder="Enter Skills, Designation etc" />
                                        <OutlinedInput style={{ backgroundColor: '#FDFDFD' }} {...commonInputProps} size='small' type="search" placeholder="Enter Location" />
                                        {/* <FormControl fullWidth sx={{ width: '120px', backgroundColor: '#fff' }}>
                                            <InputLabel id="country-select-label">Exprerience</InputLabel>
                                            <Select
                                                size='small'
                                                labelId="country-select-label"
                                                id="country-select"
                                                value={country}
                                                onChange={handleChange}
                                                style={{ border: 'none', outline: 'none' }}
                                            >
                                                <MenuItem value="experience">Experience</MenuItem>
                                                <MenuItem value="entry">Enter Level</MenuItem>
                                                <MenuItem value="one">1 years</MenuItem>
                                                <MenuItem value="two">2 years</MenuItem>
                                                <MenuItem value="three">3 years</MenuItem>
                                                <MenuItem value="four">4 years</MenuItem>
                                                <MenuItem value="five">5 years</MenuItem>
                                            </Select>
                                        </FormControl> */}
                                        <Button variant="none" sx={{
                                            width: '150px',
                                            color: '#FFF',
                                            background: palette.secondary.main,
                                            '&:hover': {
                                                backgroundColor: palette.secondary.dark,
                                            }
                                        }} onClick={() => navigate('/joinnetwork')}>
                                            Find Jobs
                                        </Button>
                                    </Stack>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    mt: 10,
                                    backdropFilter: 'blur(20px)',
                                    backgroundImage: `url(${LoginImg})`,
                                    backgroundSize: 'cover',
                                    m: 8, mr: 1, height: '350px', width: '350px',
                                }}>
                                {/* <img src={LoginImg} alt='recruiter' style={{ borderRadius: '50%', height: '100%', width: '100%' }} /> */}
                            </Box>
                        </Box>
                    </Box>
                </Stack >
            </Box >
        </>
    );
};

export default FindTag;
