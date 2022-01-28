import React ,{useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonGroup from '@mui/material/ButtonGroup';
import InvoicePage from './InvoicePage';
import { PDFDownloadLink  , PDFViewer} from '@react-pdf/renderer'
import { Routes, Route, Link } from "react-router-dom";


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


    
    <div className={'download-pdf ' + (!show ? 'loading' : '')} >

    {show&&(
      <div className='action-buttons'>

      
<PDFDownloadLink
          document={<InvoicePage pdfMode={true} data={data} />}
          fileName={`${data.invoiceTitle ? data.invoiceTitle.toLowerCase() : 'invoice'}.pdf`}
          aria-label="Save PDF"
        ><input className='Preview-button' type="button" value="Save"
        style={{border:'none' ,
         background:'aliceblue' ,
          padding:'10px' , marginRight:'10px' , cursor:'pointer'}}/></PDFDownloadLink>  
           <Link to="/invoice-preview"  state={{ data: data }}>
           <input className='Preview-button' type="button" value="Preview"
        style={{border:'none' ,
         background:'aliceblue' ,
          padding:'10px' , marginRight:'10px' , cursor:'pointer'}}/>
          </Link>
             </div>
    )
    }
    
    </div>
    
    </>
  
    
  )
}

export default CustomButton
