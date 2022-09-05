import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function AddMovie({add}) {
    
    const [value, setValue] = useState("");
    

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    add(value);
    setValue("");
  };

  
  return (
    <div>
   <Button variant="primary"onClick={handleSubmit}>AddMovie</Button>
   
  

      
    <Form.Control as="textarea"  
          value={value}
           onChange={e => setValue(e.target.value)}
    
    />
    </div>
  )
}

export default AddMovie
