import React ,{useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonGroup from '@mui/material/ButtonGroup';
import InvoicePage from './InvoicePage';
import { PDFDownloadLink  , PDFViewer} from '@react-pdf/renderer'


function CustomButton(props) {
  const {data} = props
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(false)

    const timeout = setTimeout(() => {
      setShow(true)
    }, 500)

    return () => clearTimeout(timeout)
  }, [data])

  
  return (

    <>


    
    <div className={'preview-pdf ' + (!show ? 'loading' : '')} >
    {show&&(
  
        <input className='Preview-button' type="button" value="Preview"
        style={{border:'none' ,
         background:'aliceblue' ,
          padding:'10px' , marginRight:'10px' , cursor:'pointer'}}/>
      
    )

    }
    </div>
    
    </>
  
    
  )
}

export default CustomButton
