import { CCard, CCardBody, CCardHeader, CDataTable } from "@coreui/react";
import React, { useEffect, useState } from "react";
import axios from 'axios'

function AllAccounts() {
    const [comptes, updateComptes] = useState([]);
    useEffect(() => {
      axios.get("https://transfert-national.herokuapp.com/compte/").then((response) => {
        updateComptes(response.data);
        console.log(response.data);
      });
      
    }, []);
        const fields = ['Id Client','Nom Complet', 'Solde', 'Date De Création']
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
              "Nom Complet": (item) => <td>{item.client.fullName}</td>,
              "Id Client": (item) => (
                <td>{item.client.clientId}</td>
              ),
              'Solde':(item)=> <td>{item.solde}</td>,


            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
}

export default AllAccounts;
