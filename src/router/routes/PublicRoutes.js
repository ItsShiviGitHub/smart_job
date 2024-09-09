import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from '../../pages/publicLayout'
import Home from '../../pages/public/pages/Home'
import ErrorPage from '../../pages/public/pages/ErrorPage'
import FindTag from '../../pages/public/pages/FindTag'
import EmployeeLogin from '../../pages/public/pages/EmployeeLogin'
import EmployeeRegister from '../../pages/public/pages/EmployeeRegister'
import CondidateRegister from '../../pages/public/pages/CondidateRegister'
import CondidateLogin from '../../pages/public/pages/CondidateLogin'
import JobFound from '../../pages/public/pages/JobFound'
import Contact from '../../pages/public/pages/Contact'
import AboutUs from '../../pages/public/pages/AboutUs'
import ContactUs from '../../pages/public/pages/ContactUs'
import Services from '../../pages/public/pages/Services'

function PublicRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="condidatelogin" element={<CondidateLogin />} />
                <Route path="condidateregister" element={<CondidateRegister />} />
                <Route path="employeelogin" element={<EmployeeLogin />} />
                <Route path="employeeregister" element={<EmployeeRegister />} />
                <Route path="findpage" element={<FindTag />} />
                <Route path="jobs" element={<JobFound />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="services" element={<Services />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    )
}

export default PublicRoutes
