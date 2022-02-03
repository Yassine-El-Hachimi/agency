import { CCard, CCardBody, CCardHeader, CDataTable } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AllClients() {
  const [clients, updateClients] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8080/client/").then((response) => {
      updateClients(response.data);
      console.log(response.data);
    });
    
    }, []);
      const fields = ['id','Full Name', 'GSM', 'Has Account']
    return (
        <>
            <CCard>
                <CCardHeader>
                    <h5>Clients</h5>
                </CCardHeader>
                <CCardBody>
                <CDataTable
              items={clients}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'Full Name':
                  (item)=>(
                    <td>
                        {item.fullName}
                    </td>
                  ),
                'GSM':
                  (item)=>(
                    <td>
                        {item.gsm}
                    </td>
                  ),
                'Has Account':
                  (item)=>(
                    <td>
                        {item.hasAccount? 'True':'False'}
                    </td>
                  )
              }}
            />
                </CCardBody>
            </CCard>
        </>
    )
}

export default AllClients
