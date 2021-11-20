import React,{useState} from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Title from "../common/Title";
import axios from "axios";
import Select from 'react-select'
import { CompressOutlined } from "@mui/icons-material";

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

    const [ companyName, setValue ] = useState(); 
    const [ comapnyLogo, setValue2 ] = useState(); 
    const [ companyDate, setValue3 ] = useState(); 
    const [ companyCountry, setValue4 ] = useState(); 
    const [ countryName, setValue5 ] = useState(); 

    let company_selected,selected_name,selected_logo,selected_date,selected_country;
    let company_name, company_country, company_date, company_logo; // Company vars
    let username, name, lastName, email, role, uid, token; // SESSION VARS
    let Countries = [];
    let Companies = [];

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
                
                  if(element.uid == companyCountry){
                      window.localStorage.setItem(
                        'country' , element.name
                      )
                      setValue5(element.name)
                  }
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

    const getCompanies = (e) =>{
      axios.get(`https://lossantos-api.herokuapp.com/api/company`)
      .then(res => {
          console.log(res.data)

          res.data.companies.forEach(element => {
              Companies.push({
                value: element.uid,
                label: element.name});

                if(element.uid == company_selected){
                  console.log(element.realiseDate)
                  setValue(element.name)
                  setValue3(element.realiseDate.substring(0, 10))
                  setValue4(element.country)

                  getCountries()
                }
              
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

    getCompanies()

    const NameHandler = (e) =>{ company_name = e.target.value }
    const CountryHandler = (e) =>{company_country = e.value}
    const DateHandler = (e) =>{ company_date = e.target.value}
    const ImageHandler = (e) =>{company_logo = e.target.value}

    const EditNameHandler = (e) =>{ selected_name = e.target.value }
    const EditCountryHandler = (e) =>{selected_country = e.value}
    const EditDateHandler = (e) =>{ selected_date = e.target.value}
    const EditImageHandler = (e) =>{company_logo = e.target.value}

    const CompanyHandler = (e) =>{
      company_selected = e.value
      getCompanies()
    }

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
            "realiseDate" : company_date
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

    const Edit = (e) => {
      axios({
        method: "put",
        url: `https://lossantos-api.herokuapp.com/api/company/`+ company_selected,
        headers: {
          "x-token": token
        },
        data: {
          "name" : selected_name,
          "country" : selected_country,
          "realiseDate" : selected_date
        },
      })
        .then((res) => {
          console.log(res.data);
  
          window.location = "role-form"
  
          alert("The information was successfully updated.");
        })
        .catch((err) => {
          
          const errorMsg = JSON.stringify(err.request.response);
          alert(errorMsg);
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
                    <Button variant="primary" className="button submit margin" onClick={Submit}>ADD</Button>
                </div>
            </Form>
          
        <Row>
            <Title title="Edit Company" class = "title"/> 
            <hr></hr>
        </Row>

            <Form>

                <Row>
                  <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Select Company</Form.Label>
                        <Select options={Companies} styles={styles} placeholder ="Choose Company" onChange={CompanyHandler}/>
                    </Form.Group>
                </Row>         

                <Row className="mb-3 mt-3">
                    
                    <Form.Group as={Col} controlId="formGridSubtitlle">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control placeholder="Enter Company Name" onChange={EditNameHandler} defaultValue={companyName} onChange={EditNameHandler}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formFile" className="mb-3">
                        <Form.Label>Company Logo</Form.Label>
                        <Form.Control type="file" defaultValue={comapnyLogo} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTitle">
                      <Form.Label>Released Date</Form.Label>
                      <Form.Control type="date" name="dob" placeholder="Realesed Date" onChange={EditDateHandler} defaultValue={companyDate} onChange={EditDateHandler}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                         <Form.Label>Country</Form.Label>
                         <Select options={Countries} styles={styles} onChange={EditCountryHandler}  defaultValue={companyCountry} placeholder={countryName}/>
                     </Form.Group>
                </Row>

                <div className="right">
                    <Button variant="primary" className="button submit margin" onClick={Edit}>EDIT</Button>
                    <Button variant="primary" className="button submit delete" >DELETE</Button>
                </div>
            </Form>
        </>
     );
}

export default FormCompany;