import { CCol, CFormGroup, CInput, CLabel, CRow, CSelect } from "@coreui/react";
import React from "react";

function TransfertEspeceEspece() {
  return (
    <>
      
      <CRow>
        <CCol xs="6">
          <CFormGroup>
            <CLabel htmlFor="name">Client Donneur</CLabel>
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
            <CLabel htmlFor="ccnumber">Client Bénéficiaire</CLabel>
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
      </CRow>
      <CRow>
        <CCol xs="6">
          <CFormGroup>
            <CLabel htmlFor="ccmonth">Telephone</CLabel>
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
            <CLabel htmlFor="ccyear">Telephone</CLabel>
            <CSelect custom name="ccyear" id="ccyear">
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </CSelect>
          </CFormGroup>
        </CCol>
      </CRow>
    </>
  );
}

export default TransfertEspeceEspece;
