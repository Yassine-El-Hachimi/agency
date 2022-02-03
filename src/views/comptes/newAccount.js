import CIcon from '@coreui/icons-react';
import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CFormGroup, CInput, CLabel, CRow, CSelect } from '@coreui/react';
import React from 'react';

function NewAccount() {
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
            <CSelect custom name="ccmonth" id="ccmonth">
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
            <CLabel htmlFor="ccnumber">Solde Initial</CLabel>
           <CInput type="number" />
          </CFormGroup>
        </CCol>
      </CRow>
    </CCardBody>
    <CCardFooter>
      <CButton type="submit" size="sm" color="success">
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
