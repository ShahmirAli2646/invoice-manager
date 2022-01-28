import React, { FC, useEffect, useState } from 'react'
import { PDFDownloadLink  , PDFViewer} from '@react-pdf/renderer'
import { Invoice } from '../data/types'
import InvoicePage from './InvoicePage'
import CustomButton from './CustomButton'
import { useLocation } from 'react-router-dom'
import { BackButton } from './BackButton'


const InvoicePreview = () => {
  const location = useLocation()
  const { data } = location.state
  return (
    
    <div className='Preview-frame'>
      <BackButton/>
        <PDFViewer style={{width: '100%',
    height: '100vh'}} width={100} height={80}>   
          <InvoicePage pdfMode={true} data={data} />
        </PDFViewer> 
        </div>
  )
}

export default InvoicePreview