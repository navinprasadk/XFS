import React from 'react';
import jobDetails from '../../Config/jobDetails';
import './JobHeader.css';

function jobHeader() {
    return (
        // <center>
            <span className='JobHeader_wrapper'>
                <span className='JobHeader_key_value'><p className='JobHeader_key'>Job Name </p>{jobDetails.displayName}</span>
                <span className='JobHeader_key_value'><p className='JobHeader_key'>Job URL</p><a style={{color:'#000'}}>{jobDetails.url}</a></span>
            </span>
        // </center>
        );
    }
export default jobHeader