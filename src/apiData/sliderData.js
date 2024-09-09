// icons
import EngineeringIcon from '@mui/icons-material/Engineering';
// // slider
import Magic_Bricks from '../assets/images/Magic_Bricks.png';
import Paytm from '../assets/images/Paytm.png';
import TlKan from '../assets/images/TL+KAN+Biosys.png';
import ToneTag from '../assets/images/ToneTag.png';
import Goodyear from '../assets/images/goodyear.png';
import Loanadda from '../assets/images/loanadda.png';
import Scania from '../assets/images/scania.png';
import Swiggy from '../assets/images/swiggy.png';
import JobImage1 from '../assets/images/banner5.jpg';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import { Card, Icon, Typography } from '@mui/material';


export const jobSlides = [
    { title: 'Information Technology', activeJobs: 234, icon: <EngineeringIcon sx={{ fontSize: 40 }} /> },
    { title: 'Information Technology', activeJobs: 234, icon: <EngineeringIcon sx={{ fontSize: 40 }} /> },
    { title: 'Information Technology', activeJobs: 234, icon: <EngineeringIcon sx={{ fontSize: 40 }} /> },
    { title: 'Information Technology', activeJobs: 234, icon: <EngineeringIcon sx={{ fontSize: 40 }} /> },
    { title: 'Information Technology', activeJobs: 234, icon: <EngineeringIcon sx={{ fontSize: 40 }} /> },
    { title: 'Information Technology', activeJobs: 234, icon: <EngineeringIcon sx={{ fontSize: 40 }} /> },
    { title: 'Information Technology', activeJobs: 234, icon: <EngineeringIcon sx={{ fontSize: 40 }} /> },
    { title: 'Information Technology', activeJobs: 234, icon: <EngineeringIcon sx={{ fontSize: 40 }} /> },
    { title: 'Information Technology', activeJobs: 234, icon: <EngineeringIcon sx={{ fontSize: 40 }} /> },
];


export const companySlides = [
    {
        image: Magic_Bricks,
    },
    {
        image: Paytm,
    },
    {
        image: TlKan,
    },
    {
        image: ToneTag,
    },
    {
        image: Goodyear,
    },
    {
        image: Loanadda,
    },
    {
        image: Scania,
    },
    {
        image: Swiggy,
    }
];


export const companies = [
    {
        companyName: "Spirale HR Solutions"
    },
    {
        companyName: "Iconic HR Solutions"
    },
    {
        companyName: "Mehra HR Solutions"
    },
    {
        companyName: "NICS HR Solutions"
    },
    {
        companyName: "Spirale HR Solutions"
    }
]
export const specl = [
    {
        spcl: 'Software engineer'
    },
    {
        spcl: 'Database Administrater'
    },
    {
        spcl: 'Graphic Designer'
    },
    {
        spcl: 'Client Server'
    }
]
export const location = [
    {
        loc: 'Delhi/NCR'
    },
    {
        loc: 'Noida'
    },
    {
        loc: 'Gurgaon'
    },
    {
        loc: 'Rohtak'
    }
]
export const industry = [
    {
        indus: 'IT Hardware'
    },
    {
        indus: '.Net'
    },
    {
        indus: 'IT-Software'
    }
]
export const jobList = [
    {
        jobName: 'Web Developer',
        compName: 'Perfect Stayz Pvt Ltd',
        experience: '0-3 years',
        location: 'Noida/Greater Noida',
        jd: '### Web DeveloperThe role involves coding , designing , and modifying websites',
        keySkills: 'rest , html5 , jquery , javascript , web programming , security , multimedia , web develope'

    }
]
// export const jobData = [
//     {
//         icon: EngineeringIcon,
//         title: 'Information Technology',
//         totalJob: 123,
//     },
//     {
//         icon: EngineeringIcon,
//         title: 'BPO',
//         totalJob: 234,
//     },
//     {
//         icon: EngineeringIcon,
//         title: 'BPO',
//         totalJob: 234,
//     },
//     {
//         icon: EngineeringIcon,
//         title: 'BPO',
//         totalJob: 234,
//     },
// ];

// // import { Box, Card, CardContent, Grid, Paper, Typography, useTheme } from '@mui/material'
// // import React from 'react'
// // import { jobData } from '../../../apiData/sliderData';

// // const JobRole = () => {
// //     const { palette } = useTheme();
// //     return (
// //         <>
// //             <Box sx={{ px: 17 }}>
// //                 <Paper elevation={1} sx={{ p: 1 }}>
// //                     <Typography variant='h4' sx={{ textTransform: 'uppercase', fontWeight: 'bold', color: palette.primary.main }}>Browse Jobs</Typography>
// //                     {jobData && jobData.map((job, index) => (
// //                         <Grid container spacing={3} key={index}>
// //                             <Grid item xs={3} md={2.4} >
// //                                 <Card sx={{ background: 'linear-gradient(pink -20%,white 60%)', p: 1, backdropFilter: 'blur(5px)' }}>
// //                                     <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
// //                                         {job.icon}
// //                                         <Typography variant='body2'>{job.title}</Typography>
// //                                         <Typography>{job.totalJob} Active Jobs</Typography>
// //                                     </CardContent>
// //                                 </Card>
// //                             </Grid>
// //                         </Grid>
// //                     ))}

// //                 </Paper>
// //             </Box >
// //         </>
// //     )
// // }

// // export default JobRole
export const jobData = [
    {
        name: 'Amit Kumar',
        position: 'Chief Executive Officer',
        image: JobImage1
    },
    {
        name: 'John Doe',
        position: 'Chief Technology Officer',
        image: JobImage1
    },
    {
        name: 'Jane Smith',
        position: 'Chief Operating Officer',
        image: JobImage1
    }
];


export const iconData = [
    { icon: <SupportAgentIcon />, value: 960, label: 'Support Agent' },
    { icon: <InsertPhotoIcon />, value: 960, label: 'Insert Photo' },
    { icon: <PeopleAltIcon />, value: 960, label: 'People Alt' },
    { icon: <SupervisorAccountIcon />, value: 960, label: 'Supervisor Account' },
];

export const CardComponent = ({ icon, title, description }) => (
    <Card
        sx={{
            height: '300px',
            width: '350px',
            display: 'flex',
            flexDirection: 'column',
            p: 10,
            transition: '0.3s', // For smooth transition on hover
            '&:hover': {
                backgroundColor: '#004e98', // Change background color on hover
                '& .icon': {
                    color: '#fff', // Change icon color on hover
                },
                '& .title': {
                    color: '#fff', // Change title color on hover
                },
                '& .description': {
                    color: '#fff', // Change description color on hover
                },
            },
        }}
    >
        <Icon className="icon" sx={{
            fontSize: '40px',
            textAlign: 'center',
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '50%',
            width: '25%',


        }} >
            {icon}
        </Icon>

        <Typography className="title" variant="h4" sx={{ mt: 1, transition: '0.3s' }}>
            {title}
        </Typography>
        <Typography className="description" variant="body2" sx={{ mt: 1, transition: '0.3s' }}>
            {description}
        </Typography>
    </Card>
);
