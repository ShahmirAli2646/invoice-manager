import React ,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


export const BackButton = () => {
    let navigate = useNavigate();
    return (
        <>
        
          <button className='Preview-button' style={{border:'none' ,
         background:'none' ,
          padding:'10px' , marginRight:'10px' , cursor:'pointer' , fontSize:'30px'}} onClick={() => navigate('/react-invoice-generator')}><FontAwesomeIcon icon={faArrowLeft} /></button>
        </>
    );
};