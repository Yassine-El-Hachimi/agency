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
  CSwitch,
  CTabContent,
  CTabPane,
  CTabs,
} from "@coreui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";


const Transfert = () => {
  const [clients, updateClients] = useState([]);
  const [IdClientBen, setIdClientBen] = useState(null);
  const [IdClientDon, setIdClientDon] = useState(null);
  const [montant, setMontant] = useState(0);
  const [motif, setMotif] = useState("");
  const [type, setType] = useState("");
  const [notification,setNotification] = useState('off');

  const handleClientBenChange = (event) => {
    setIdClientBen(event.target.value);
  };
  const handleClientDonChange = (event) => {
    setIdClientDon(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleMontantChange = (event) => {
    setMontant(event.target.value);
  };
  const handleMotifChange = (event) => {
    setMotif(event.target.value);
  };
  const handleNotificationChange = (event) => {
    setNotification(event.target.value);
  }

  const handleSubmit = (event) => {
    if (IdClientBen != null && IdClientDon != null && type !== "") {
      console.log(IdClientBen + " " + IdClientDon + " " + notification + " " + montant);
      const transfert = {
        'clientBeneficaireId': IdClientBen,
        'clientDonneurId': IdClientDon,
        'typeTransfert': type,
        'montant': montant,
        'motif': motif,
        'notification': notification === 'on'?true:false
      };

      axios
        .post("https://transfert-national.herokuapp.com/transfert/", transfert)
        .then((response) => {
          console.log(response.data);
        });
    } else alert("Remplissez tout les champs");
    event.preventDefault();
  };

  useEffect(() => {
    axios
      .get("https://transfert-national.herokuapp.com/client/")
      .then((response) => {
        updateClients(response.data);
      });
  }, []);

  return (
    <>
      <CCard>
        <CCardHeader>
          <h4>Effectuer Un Transfert D'Argent</h4>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="name">Client Donneur</CLabel>
                <CSelect
                  custom
                  name="ccmonth"
                  id="ccmonth"
                  onChange={handleClientDonChange}
                >
                  {clients.map((client, index) => (
                    <option value={client.clientId}>{client.fullName}</option>
                  ))}
                </CSelect>
              </CFormGroup>
            </CCol>

            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="ccnumber">Client Bénéficiaire</CLabel>
                <CSelect
                  custom
                  name="ccmonth"
                  id="ccmonth"
                  onChange={handleClientBenChange}
                >
                  {clients.map((client, index) => (
                    <option value={client.clientId}>{client.fullName}</option>
                  ))}
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="ccnumber">Montant</CLabel>
                <CInput type="number" onChange={handleMontantChange} />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol md="12">
              <CLabel required htmlFor="" >Motif</CLabel>
              <CInput type="text" onChange={handleMotifChange} />
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
                  value="Espece"
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
                  value="Wallet"
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
                  value="GAB-BOA"
                />
                <CLabel variant="custom-checkbox" htmlFor="inline-radio3">
                  Espèce vers Gab
                </CLabel>
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol md="12">
              <CLabel >
              Notification
              </CLabel>
              
            </CCol>
          </CRow>
          <CRow>
            <CCol>
          <CSwitch onChange={handleNotificationChange} className="mr-1" color="primary" defaultUncheked />
          </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CButton
            type="submit"
            size="sm"
            color="success"
            onClick={handleSubmit}
          >
            <CIcon name="cil-scrubber" /> Submit
          </CButton>
          
        </CCardFooter>
      </CCard>
    </>
  );
};

export default Transfert;
