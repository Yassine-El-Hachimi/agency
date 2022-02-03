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

  const handleNameChange = (event)=>{
    setFullName(event.target.value)
  }
  const handleTitreChange = (event)=>{
    setTitre(event.target.value)
  }
  const handleTeleChange = (event)=>{
    setTelephone(event.target.value)
  }
  
  const handleSubmit = (event) => {
    if(fullName !== '' && titre !== '' && telephone!=='')
        {
          console.log(fullName+' '+titre+' '+telephone);
        const newClient = {
          'fullName' : fullName,
          'gsm' : telephone,
          'titre' : titre
        }
        axios.post('http://127.0.0.1:8080/client/',newClient).then((response) => {
          console.log(response.data);
        });;
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
                <CInput id="name" placeholder="Enter your name" required onChange={handleNameChange}/>
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
                  placeholder="Enter your name"
                  required
                  onChange={handleTeleChange}
                />
              </CFormGroup>
            </CCol>
          </CRow>

        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="success" onClick={handleSubmit}>
            <CIcon name="cil-scrubber" /> Submit
          </CButton>
          <CButton type="reset" size="sm" color="danger">
            <CIcon name="cil-ban" /> Reset
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  );
}

export default CreateClient;
