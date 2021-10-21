import React from 'react'
import { Form } from 'react-bootstrap';

class BootstrapDate extends React.Component{

    render(){

        return(

            <Form.Control type="date" name="dob" placeholder="Realesed Date" />

        )
    }
    
}

export default BootstrapDate;