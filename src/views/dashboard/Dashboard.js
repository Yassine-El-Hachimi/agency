import React, { lazy, useEffect, useState } from "react";
import {

  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";


import { CChartBar } from "@coreui/react-chartjs";
import axios from "axios";

const Dashboard = () => {
  const [transferts, updateTransferts] = useState([]);
  const [clients, updateClients] = useState([]);
  const [comptes, updateComptes] = useState([]);
  let nombreTransServis = 0;
  useEffect(() => {
    axios.get("https://transfert-national.herokuapp.com/transfert/").then((response) => {
      updateTransferts(response.data);
    });
    axios.get("https://transfert-national.herokuapp.com/client/").then((response) => {
      updateClients(response.data);
    });
    transferts.forEach(element => {
      if(element.etat == 'Servie'){
        nombreTransServis++;
      }
    });

  }, []);

  let january = 0;
  let february = 0;
  let march = 0;
  let april = 0;
  let june = 0;
  let jully = 0;
  let august = 0;
  let september = 0;
  let october = 0;
  let november = 0;
  let december = 0;

  clients.forEach(element => {
    //if(element.)
  });
  return (
    <>
      <CRow>
        <CCol sm="3">
          <CCallout color="info">
            <small className="text-muted">Nombre des Clients</small>
            <br />
            <strong className="h4">{clients.length}</strong>
          </CCallout>
        </CCol>
        <CCol sm="3">
          <CCallout color="danger">
            <small className="text-muted">Nombre De Clients Possédant Des Comptes</small>
            <br />
            <strong className="h4">{comptes.length}</strong>
          </CCallout>
        </CCol>
        <CCol sm="3">
          <CCallout color="danger">
            <small className="text-muted">Nombre De Transferts</small>
            <br />
            <strong className="h4">{transferts.length}</strong>
          </CCallout>
        </CCol>
        <CCol sm="3">
          <CCallout color="danger">
            <small className="text-muted">Nombre De Transferts Servis</small>
            <br />
            <strong className="h4">{nombreTransServis}</strong>
          </CCallout>
        </CCol>
      </CRow>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-muted">November 2017</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">

            </CCol>
          </CRow>
          <CChartBar
            datasets={[
              {
                label: 'Nouvelles Wallets',
                backgroundColor: '#f87979',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
              }
            ]}
            labels="months"
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
        <CCardFooter>
          
        </CCardFooter>
      </CCard>


      
    </>
  );
};

export default Dashboard;
