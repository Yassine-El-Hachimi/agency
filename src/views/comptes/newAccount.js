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
import { useEffect } from "react";

function NewAccount() {
  const [clientId, setClientId] = useState('');
  const [solde, setSolde] = useState(0);

  const [clients, updateClients] = useState([]);
  useEffect(() => {
    axios.get("https://transfert-national.herokuapp.com/client/").then((response) => {
      updateClients(response.data);
    });
    console.log(clients);
  }, []);

  const handleIdChange = (event)=>{
    setClientId(event.target.value);
  }
  const handleSoldeChange = (event) =>{
    setSolde(event.target.value);
  }

  const handleSubmit = (event) => {
    const compte = {
      'clientId': clientId,
      'solde': solde
    }
    axios.post('https://transfert-national.herokuapp.com/compte/',compte).then((response) => {
      console.log(response.data);
    });

  }
  return (
    <>
      <CCard>
        <CCardHeader>
          <h5>Nouveau Client</h5>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="name">Client</CLabel>
                <CSelect custom name="ccmonth" id="ccmonth" onChange={handleIdChange}>
                  {clients.map((client, index) => (
                    <option value={client.id}>{client.fullName}</option>
                  ))}
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="ccnumber">Solde Initial</CLabel>
                <CInput type="number" onChange={handleSoldeChange}/>
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

export default NewAccount;
