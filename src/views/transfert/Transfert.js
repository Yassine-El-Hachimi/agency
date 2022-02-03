import CIcon from "@coreui/icons-react";
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CInputRadio,
  CLabel,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CSelect,
  CTabContent,
  CTabPane,
  CTabs,
} from "@coreui/react";
import React, { useState } from "react";
import { DocsLink } from "src/reusable";
import TransfertEspeceEspece from "./TransfertEspeceEspece";
import TransfertEspeceGAB from "./TransfertEspeceGAB";
import TransfertEspeceSolde from "./TransfertEspeceSolde";

const Transfert = () => {
  const [IdClientBen,setIdClientBen] = useState(null);
  const [IdClientDon,setIdClientDon] = useState(null);
  const [type,setType] = useState('');

  const handleClientBenChange = (event)=>{
    setIdClientBen(event.target.value);
  }
  const handleClientDonChange = (event)=>{
    setIdClientDon(event.target.value);
  }
  const handleTypeChange = (event)=>{
    setType(event.target.value);
  }

  const handleSubmit = (event) => {
    if(IdClientBen != null && IdClientDon != null && type !== '')
    console.log(IdClientBen+' '+IdClientDon+' '+type);
    else
    alert('Remplissez tout les champs');
    event.preventDefault();
  }

  return (
    <>
      <CCard>
        <CCardHeader>
          <h4>Effectuer Un Transfert D'Argent</h4>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="name" >Client Donneur</CLabel>
                <CSelect custom name="ccmonth" id="ccmonth" onChange={handleClientDonChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </CSelect>
              </CFormGroup>
            </CCol>

            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="ccnumber" >Client Bénéficiaire</CLabel>
                <CSelect custom name="ccmonth" id="ccmonth" onChange={handleClientBenChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </CSelect>
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol md="12" class="text-center">
              <CLabel>Type de transfert</CLabel>
            </CCol>
            <CCol md="12" onChange={handleTypeChange}>
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="inline-radio1"
                  name="inline-radios"
                  value="option1"
                />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
                  Espèce vers espèce
                </CLabel>
              </CFormGroup>
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="inline-radio2"
                  name="inline-radios"
                  value="option2"
                />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
                  Espèce vers wallet
                </CLabel>
              </CFormGroup>
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="inline-radio3"
                  name="inline-radios"
                  value="option3"
                />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio3">
                  Espèce vers Gab
                </CLabel>
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
};

export default Transfert;
