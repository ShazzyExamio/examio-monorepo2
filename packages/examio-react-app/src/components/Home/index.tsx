import React from 'react'
import { useState } from 'react';
import { HomeContent, HomeContainer, FormH1,FormH2,  Form1, Form2, Form3, } from './HomeElements'


const Home: React.FC = () => {

  return (
    <>
        <FormH1>Hi User</FormH1>
        <FormH2>Im Schmerz von gestern liegt die Kraft von heute.</FormH2>

        <HomeContent>
         <HomeContainer>
         <FormH2>Fortschritt</FormH2>
          <Form1>
          </Form1>
          </HomeContainer>
          
          <HomeContainer>
          <FormH2>Dein Kurs</FormH2>
          <Form2>
          
          </Form2>
          </HomeContainer>
          
          <HomeContainer>
          <FormH2>Anstehende Webinare</FormH2>
          <Form3>
          
          </Form3>
          </HomeContainer>
        </HomeContent>
    </>
  )
}

export default Home