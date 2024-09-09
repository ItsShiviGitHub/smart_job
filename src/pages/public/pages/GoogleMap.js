import React from 'react'

const GoogleMap = () => {
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.948858709611!2d77.32369797549855!3d28.571298375698255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44eaf5bffff%3A0xfab00183af61670!2sSpirale%20Infosoft!5e0!3m2!1sen!2sin!4v1725448021803!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </>
    )
}

export default GoogleMap