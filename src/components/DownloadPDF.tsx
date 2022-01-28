import React, { FC, useEffect, useState } from 'react'
import { PDFDownloadLink  , PDFViewer} from '@react-pdf/renderer'
import { Invoice } from '../data/types'
import InvoicePage from './InvoicePage'
import CustomButton from './CustomButton'

interface Props {
  data: Invoice
}

const Download: FC<Props> = ({ data }) => {
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    setShow(false)

    const timeout = setTimeout(() => {
      setShow(true)
    }, 500)

    return () => clearTimeout(timeout)
  }, [data])

  return (
    <div className={ (!show ? 'loading' : '')} style={{display:'flex' , justifyContent:'end'}} title="Save PDF">
      {show && (
         <div className='Preview-button'>
 <PDFDownloadLink
          style={{backgroundColor:'aliceblue'}}
          document={<InvoicePage pdfMode={true} data={data} />}
          fileName={`${data.invoiceTitle ? data.invoiceTitle.toLowerCase() : 'invoice'}.pdf`}
          aria-label="Save PDF"
        ></PDFDownloadLink>
         </div>
       
      )}
    </div>
  )
}

export default Download
