import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Title from "../common/Title";
import axios from "axios";
import Select from 'react-select'

function FormCompany() {

    const styles = {
        option: (provided, state) => ({
          ...provided,
          fontWeight: state.isSelected ? "bold" : "normal",
          color: "black",
          backgroundColor: "white",
          fontSize: state.selectProps.myFontSize
        }),
        placeholder: (provided, state) => ({
          ...provided,
          fontWeight: state.isSelected ? "bold" : "normal",
          color: "black",
        }),
        singleValue: (provided, state) => ({
          ...provided,
          fontWeight: state.isSelected ? "bold" : "bold",
          color: "black",
        }),
        control: (provided, state) => ({
          ...provided,
          backgroundColor: "white",
        //   borderRadius: "12px",
        //   borderColor: "#ff66c4",
        //   borderWidth: "3px"
    
        }),
       
    };

    let company_name, company_country, company_date, company_logo; // Company vars
    let username, name, lastName, email, role, uid, token; // SESSION VARS
    let Countries = [];

    const GetSession = (e) => {
        window.localStorage.getItem("user");
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        username = user.data.newUser.username;
        name = user.data.newUser.name;
        lastName = user.data.newUser.lastName;
        email = user.data.newUser.email;
        role = user.data.newUser.role;
        uid = user.data.newUser.uid;
        token = user.data.token;

        console.log(token);

    };

    GetSession();

    const getCountries = (e) =>{
        axios.get(`https://lossantos-api.herokuapp.com/api/country`)
        .then(res => {
            console.log(res.data)

            res.data.countries.forEach(element => {
                Countries.push({
                  value: element.uid,
                  label: element.name});
                
            }) 


        })
        .catch(err => {
          const errorMsg =JSON.parse(err.request.response) ;
    
          if(errorMsg.errors != null){
            errorMsg.errors.forEach(e => {
          
              alert(e.msg);
      
            });
          }
          else{
            alert("Something went wrong, please try again.")
          }
    
    
        })
    }

    getCountries()


    const NameHandler = (e) =>{ company_name = e.target.value }
    const CountryHandler = (e) =>{company_country = e.value}
    const DateHandler = (e) =>{ company_date = e.target.value}
    const ImageHandler = (e) =>{company_logo = e.target.value}

    const Submit = (e) => {
        axios({
          method: "post",
          url: `https://lossantos-api.herokuapp.com/api/company/`,
          headers: {
            "x-token": token
          },
          data: {
            "name" : company_name,
            "country" : company_country,
            "realiseDat" : company_date
          },
        })
          .then((res) => {
            console.log(res.data);
            alert("The information was successfully updated.");
          })
          .catch((err) => {
            const errorMsg = JSON.parse(err.request.response);
    
            if (errorMsg.errors != null) {
              errorMsg.errors.forEach((e) => {
                alert(e.msg);
              });
            } else {
              alert("Something went wrong, please try again.");
            }
          });
    };



    return (
        <>

        <Row>
            <Title title="Company" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>
                
                <Row className="mb-3 mt-3">
                    
                    <Form.Group as={Col} controlId="formGridSubtitlle">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control placeholder="Enter Company Name" onChange={NameHandler}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formFile" className="mb-3">
                        <Form.Label>Company Logo</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTitle">
                      <Form.Label>Released Date</Form.Label>
                      <Form.Control type="date" name="dob" placeholder="Realesed Date" onChange={DateHandler} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                         <Form.Label>Country</Form.Label>
                         <Select options={Countries} styles={styles} placeholder ="Choose a country" onChange={CountryHandler} />
                     </Form.Group>
                </Row>

                <div className="right">
                    <Button variant="primary" className="button submit margin" onClick={Submit}>SUBMIT</Button>
                    <Button variant="primary" className="button submit delete" >DELETE</Button>
                </div>
            </Form>
        </>
     );
}

export default FormCompany;