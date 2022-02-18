import { CCard, CCardBody, CCardHeader, CDataTable } from "@coreui/react";
import React, { useEffect, useState } from "react";
import axios from 'axios'

function AllAccounts() {
    const [comptes, updateComptes] = useState([]);
    useEffect(() => {
      axios.get("https://transfert-national.herokuapp.com/comptes/").then((response) => {
        updateComptes(response.data);
      });
      
    }, []);
        const fields = ['id Client','Nom Complet', 'Solde', 'Date De Création']
  return (
    <>
      <CCard>
        <CCardHeader>
          <h5>Clients</h5>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={comptes}
            fields={fields}
            hover
            striped
            bordered
            size="sm"
            itemsPerPage={5}
            pagination
            scopedSlots={{
              "Full Name": (item) => <td>{item.fullName}</td>,
              GSM: (item) => <td>{item.telephone}</td>,
              "Has Account": (item) => (
                <td>{item.hasAccount ? "True" : "False"}</td>
              ),
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
}

export default AllAccounts;
