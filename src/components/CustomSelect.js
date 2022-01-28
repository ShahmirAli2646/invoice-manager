import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { Text } from '@react-pdf/renderer'
function CustomSelect(props) {
    const {pdfMode } = props
    const [selectedOption, setSelectedOption] = useState(null);
    const [isEditing, setIsEditing] = useState(false)

  const options = [
    { value: 'Cash', label: 'Cash' },
    { value: 'Credit', label: 'Credit' },
  ];
  
  return (
    <>
    {console.log('what is the selected option' , selectedOption?.value , pdfMode)}
    {pdfMode? (
      <Text >{selectedOption?.label}</Text>
    ) : (
      <>
        {isEditing ? (
            <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            autoFocus={true}
            onBlur={() => setIsEditing(false)}
          />
        ) : (
          <input
            style={{border:'none' , background:'#fdf4db'}}
            readOnly={true}
            type="text"
            value={selectedOption?.value || ''}
            placeholder={'Select' || ''}
            onFocus={() => setIsEditing(true)}
          />
        )}
      </>
    )}
  </>
)
  
}

export default CustomSelect