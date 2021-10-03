import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
export default function Header() {
    return (
        <>
             <div className="contact" style={{ float: 'right' }}> <PhoneIcon fontSize='small' sx={{ mr: 1 }} /> +91 1234567890      <EmailIcon fontSize='small' sx={{ ml: 1, mr: 1 }} /> <a href="mailto: example@gmail.com"> example@gmail.com</a> </div>
               
            <div className="topSection">
            
                <div className="topheading">
                    <img src='../im9.jpg' className="App-logo" alt="logo" style={{ width: '9rem' }} />
                    <h1 >Journal name here</h1>
                    <h4>Department Name</h4>
                    <h4>Govt. Degree College For Women Pulwama</h4>
                    <h4>Print ISSN:000000 Online ISSN:1111111</h4>
                </div>
            </div>
        </>
    )
}