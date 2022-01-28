import React from 'react'
import InvoicePage from './components/InvoicePage'
import InvoicePreview from './components/InvoicePreview'
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="app">
      
      <h1 className="center fs-30">React Invoice Generator</h1>
      <Routes>
        <Route path="/react-invoice-generator" element={ <InvoicePage />}/>
        <Route path="/invoice-preview" element={ <InvoicePreview />}/>
      </Routes>
     
    </div>
  )
}

export default App
