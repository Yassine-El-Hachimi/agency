import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import usersData from "../users/UsersData";
import axios from "axios";
import { Button } from "@coreui/coreui";

const Historique = () => {
  const [transferts, updateTransferts] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    axios.get("https://transfert-national.herokuapp.com/transfert/").then((response) => {
      updateTransferts(response.data);
      console.log(response.data);
    });
  }, []);
  const fields = [
    "Id Transfert",
    "Id Donneur",
    "Id Bénéficiaire",
    "Type",
    "Etat",
    "Date Transfert",
    "Date Reception",
    "Actions",
    
  ];
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
            scopedSlots={{
              "Id Transfert": (item) => <td>{item.transfertId}</td>,
              "Id Donneur": (item) => <td>{item.clientDonneur.id}</td>,
              "Id Bénéficiaire": (item) => <td>{item.clientBeneficaire.id}</td>,
              "Type": (item) => <td>{item.typeTransfert}</td>,
              "Etat": (item) => <td>{item.etat}</td>,
              "Date Transfert": (item) => <td>{item.dateTransfert}</td>,
              "Date Reception": (item) => <td>{item.dateReception == null? 'Pas encore servi':item.dateReception}</td>,
              "Actions": (item) => (
                <td>

                    <CButton color="primary">Servis</CButton>

                </td>
              ),
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Historique;
