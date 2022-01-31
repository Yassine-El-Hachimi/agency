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
import React from "react";

function CreateClient() {
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
                <CInput id="name" placeholder="Enter your name" required />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="ccnumber">Titre</CLabel>
                <CSelect custom name="ccmonth" id="ccmonth">
                  <option value="madame">Madame</option>
                  <option value="monsieur">Monsieur</option>
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
                />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow></CRow>
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

export default CreateClient;
