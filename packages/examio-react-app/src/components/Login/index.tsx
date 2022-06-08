import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FormButton, FormContent, FormH1, FormInput,  Form, FormLabel, Text, TextY, FormBreak, TextL} from './LoginElements'
import { loginFunction } from '../../services/user.service';


const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    let result = loginFunction(email,password)

    if(result['success'])
    {
      navigate('/')
    }
    else
    {
      console.log(result['msg'])
    }
  } 


  return (
    <>
        <FormContent>
        <FormH1>Anmelden</FormH1>
          <Form onSubmit={e => {e.preventDefault(); handleSubmit()}}>
            <FormLabel>Willkommen</FormLabel>
            <Text>Zum Betreten des Lernsystems <br/> geben Sie bitte Ihre Login-Daten ein</Text>
            <FormInput type='email' id='email' placeholder='Benutzername / E-Mail Adresse' required onChange={e => setEmail(e.target.value)}/>
            <FormInput type='password' id='password' placeholder='Passwort' required onChange={e => setPassword(e.target.value)}/>
            <TextY>Passwort vergessen?</TextY>
            <FormButton type='submit' >Anmelden</FormButton>
            <FormBreak/>
            <TextL href="/">
            <span >Zurück zur Startseite</span>
            </TextL>
          </Form>
        </FormContent>
    </>
  )
}

export default Login