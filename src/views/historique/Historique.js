import { CBadge, CCard, CCardBody, CCardHeader, CDataTable } from '@coreui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import usersData from '../users/UsersData'
import axios from 'axios'

const Historique = () => {
  const [transferts, updateTransferts] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8080/transfert/").then((response) => {
      updateTransferts(response.data);
    });
  }, []);
      const fields = ['Id Transfert','Id Donneur', 'Id Bénéficiaire','Type', 'Etat']
    return (
        <>
            <CCard>
                <CCardHeader>
                    <h4>Historique</h4>
                </CCardHeader>
                <CCardBody>
                <CDataTable
              items={transferts}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'Id Transfert':
                (item)=>(
                  <td>
                      {item.transfertId}
                  </td>
                ),
              'Id Donneur':
                (item)=>(
                  <td>
                      {item.clientDonneur.Id}
                  </td>
                ),
              'Id Bénéficiaire':
                (item)=>(
                  <td>
                      {item.clientBeneficaire.Id}
                  </td>
                ),
                'Type':
                (item)=>(
                  <td>
                      {item.type}
                  </td>
                ),
                'Etat':
                (item)=>(
                  <td>
                      {item.etat}
                  </td>
                )
              }}
            />
                </CCardBody>
            </CCard>
        </>
    )
}

export default Historique
