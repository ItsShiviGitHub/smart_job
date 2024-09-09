import { Box, Divider, Grid, List, ListItem, Paper, Typography, Checkbox, Stack, Button, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { companies, industry, jobList, location, specl } from '../../../apiData/sliderData'
import LIC from '../../../assets/images/lic.jpg';
import Img from '../../../assets/images/rajasthangas_hpbnr.jpg'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TuneIcon from '@mui/icons-material/Tune';




const JobFound = () => {
    return (
        <>
            <Box sx={{ p: { md: "0px 100px", xs: '0px 20px' }, backgroundColor: 'rgba(212, 206, 205,0.5)' }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={2} >
                        <Paper sx={{ my: 2, p: 1 }}>
                            <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                                <TuneIcon sx={{ fontSize: 15, color: 'red' }} />
                                <Typography sx={{ fontWeight: 'bold', p: '4px', fontSize: '12px', color: 'black' }}>ALL FILTERS</Typography>
                            </Stack>
                            <Divider />
                            <Typography sx={{ fontWeight: 'bold', p: '4px', fontSize: '12px', color: 'black' }}>Companies</Typography>
                            <List size="small">
                                {companies.map((camp, index) => (
                                    <ListItem key={index} sx={{ p: '0px 0px', alignItems: 'center' }}>
                                        <Checkbox size='small' />
                                        <Typography variant='body2'>{camp.companyName}</Typography>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <Typography sx={{ fontWeight: 'bold', p: '10px 10px', fontSize: '12px', color: 'black' }}>Job Function</Typography>
                            <Radio size='small' />IT Software
                            <Divider />
                            <Typography sx={{ fontWeight: 'bold', p: '10px 10px', fontSize: '12px', color: 'black' }}>Specilization</Typography>
                            <RadioGroup>
                                <List size="small">
                                    {specl.map((area, index) => (
                                        <ListItem key={index} sx={{ p: '0px 0px', alignItems: 'center' }}>
                                            <Radio size="small" value={area.spcl} />
                                            <Typography variant="body2">{area.spcl}</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </RadioGroup>
                            <Divider />
                            <Typography sx={{ fontWeight: 'bold', p: '10px 10px', fontSize: '12px', color: 'black' }}>Location</Typography>
                            <RadioGroup>
                                <List size="small">
                                    {location.map((area, index) => (
                                        <ListItem key={index} sx={{ p: '0px 0px', alignItems: 'center' }}>
                                            <Radio size="small" value={area.spcl} />
                                            <Typography variant="body2">{area.loc}</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </RadioGroup>
                            <Divider />
                            <Typography sx={{ fontWeight: 'bold', p: '10px 10px', fontSize: '12px', color: 'black' }}>Location</Typography>
                            <RadioGroup>
                                <List size="small">
                                    {industry.map((area, index) => (
                                        <ListItem key={index} sx={{ p: '0px 0px', alignItems: 'center' }}>
                                            <Radio size="small" value={area.indus} />
                                            <Typography variant="body2">{area.indus}</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </RadioGroup>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', p: 2 }}>5 Job Found</Typography>
                        <Paper sx={{ p: 2 }}>
                            {jobList.map((jobs) => (
                                <Stack gap={1} >
                                    <Typography variant='h6' sx={{ color: 'rgb(29, 68, 161)' }}>{jobs.jobName}</Typography>
                                    <Typography sx={{ fontSize: '15px', }}>{jobs.compName}</Typography>
                                    <Stack direction={'row'} columnGap={1} sx={{ alignItems: 'center' }}>
                                        <WorkOutlineIcon sx={{ color: 'grey' }} />
                                        <Typography>{jobs.experience}</Typography>
                                        <LocationOnIcon sx={{ color: 'grey' }} />
                                        <Typography>{jobs.location}</Typography>
                                    </Stack>
                                    <Typography>JobDescription: {jobs.jd}</Typography>
                                    <Typography>Key Skills: {jobs.keySkills}</Typography>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Button variant='contained' color='error'>Apply</Button>
                                        <Typography>Posted few days ago</Typography>
                                    </Stack>
                                </Stack>

                            ))}

                        </Paper>
                        <Paper sx={{ p: 2, my: 3 }}>


                            {jobList.map((jobs) => (
                                <Stack gap={1} >
                                    <Typography variant='h6' sx={{ color: 'rgb(29, 68, 161)' }}>{jobs.jobName}</Typography>
                                    <Typography sx={{ fontSize: '15px', }}>{jobs.compName}</Typography>
                                    <Stack direction={'row'} columnGap={1} sx={{ alignItems: 'center' }}>
                                        <WorkOutlineIcon sx={{ color: 'grey' }} />
                                        <Typography>{jobs.experience}</Typography>
                                        <LocationOnIcon sx={{ color: 'grey' }} />
                                        <Typography>{jobs.location}</Typography>
                                    </Stack>
                                    <Typography>JobDescription: {jobs.jd}</Typography>
                                    <Typography>Key Skills: {jobs.keySkills}</Typography>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Button variant='contained' color='error'>Apply</Button>
                                        <Typography>Posted few days ago</Typography>
                                    </Stack>
                                </Stack>

                            ))}

                        </Paper>
                        <Paper sx={{ p: 2, my: 3 }}>


                            {jobList.map((jobs) => (
                                <Stack gap={1} >
                                    <Typography variant='h6' sx={{ color: 'rgb(29, 68, 161)' }}>{jobs.jobName}</Typography>
                                    <Typography sx={{ fontSize: '15px', }}>{jobs.compName}</Typography>
                                    <Stack direction={'row'} columnGap={1} sx={{ alignItems: 'center' }}>
                                        <WorkOutlineIcon sx={{ color: 'grey' }} />
                                        <Typography>{jobs.experience}</Typography>
                                        <LocationOnIcon sx={{ color: 'grey' }} />
                                        <Typography>{jobs.location}</Typography>
                                    </Stack>
                                    <Typography>JobDescription: {jobs.jd}</Typography>
                                    <Typography>Key Skills: {jobs.keySkills}</Typography>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Button variant='contained' color='error'>Apply</Button>
                                        <Typography>Posted few days ago</Typography>
                                    </Stack>
                                </Stack>

                            ))}

                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ m: { xs: '20px 20px', md: '0px 0px' } }}>

                        <img src={LIC} />
                        <img src={Img} />
                        <img src={LIC} />
                        <img src={Img} />

                    </Grid>
                </Grid>
            </Box >
        </>
    )
}

export default JobFound