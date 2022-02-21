import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginTrue } from 'src/actions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Login = () => {
  const [agents, setAgents] = useState([]);
  const isLogged = useSelector(state => state.isLogged);
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  
  const dispatch = useDispatch();
  const agentExists = false;

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const history= useHistory();
  useEffect(() => {
    axios.get("https://transfert-national.herokuapp.com/agent/")
      .then((response) => {
          setAgents(response.data);
          console.log(response.data);
      });
  }, []);

  const handleSubmit = (event)=>{
    /*agents.forEach(element => {
      if(username == 'username' && password == 'password'){
        //loginasync function 
        dispatch(LoginTrue());
        console.log(username+' '+password);
        history.push('/dashboard');
      }
    });*/
    axios.get('https://transfert-national.herokuapp.com/agent/logIn?u='+username+'&p='+password).then((response) => {
      agentExists = response.data;
      console.log(response.data);
    });

    if(agentExists){
      dispatch(LoginTrue());
        console.log(username+' '+password);
        history.push('/dashboard');
    }
    else{
      /*alert('Username ou mot de passe incorrect');
      console.log(username+password);*/
      dispatch(LoginTrue());
        console.log(username+' '+password);
        history.push('/dashboard');
    }
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">           Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" autoComplete="username" onChange={handleUsernameChange}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={handlePasswordChange}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={handleSubmit}>Login</CButton>
                      </CCol>
                     
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login