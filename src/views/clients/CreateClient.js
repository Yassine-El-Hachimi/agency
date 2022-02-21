import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";

function CreateClient() {
  const [fullName,setFullName] = useState('');
  const [titre,setTitre] = useState('');
  const [telephone,setTelephone] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event)=>{
    setFullName(event.target.value)
  }
  const handleTitreChange = (event)=>{
    setTitre(event.target.value)
  }
  const handleTeleChange = (event)=>{
    setTelephone(event.target.value)
  }
  const handleEmailChange = (event)=>{
    setEmail(event.target.value)
  }
  const handleSubmit = (event) => {
    if(fullName !== '' && titre !== '' && telephone!=='')
        {
          console.log(fullName+' '+titre+' '+telephone);
        const newClient = {
          'fullName' : fullName,
          'gsm' : telephone,
          'titre' : titre,
          'email' : email
        }
        axios.post('https://transfert-national.herokuapp.com/client/',newClient).then((response) => {
          console.log(response.data);
        });
        }
    else
    alert('Remplisser Tout Les Champs Obligatoires');
    event.preventDefault();
  }
  
  return (
    <>
      <CCard>
        <CCardHeader>
          <h5>Nouveau Client</h5>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="name">Nom Complet Du Client</CLabel>
                <CInput id="name" placeholder="Clients Full Name" required onChange={handleNameChange}/>
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="ccnumber">Titre</CLabel>
                <CSelect custom name="ccmonth" id="ccmonth" onChange={handleTitreChange}>
                  <option value="Mme">Mme</option>
                  <option value="Mr">Mr</option>
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="ccmonth">Téléphone</CLabel>
                <CInput
                  type="number"
                  id="name"
                  placeholder="Clients Phone"
                  required
                  onChange={handleTeleChange}
                />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="name">Email</CLabel>
                <CInput id="name" placeholder="Clients Email" required onChange={handleEmailChange}/>
              </CFormGroup>
            </CCol>
          </CRow>

        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="success" onClick={handleSubmit}>
            <CIcon name="cil-scrubber" /> Submit
          </CButton>
     
        </CCardFooter>
      </CCard>
    </>
  );
}

export default CreateClient;
