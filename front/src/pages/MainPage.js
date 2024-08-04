import React from 'react';
import { MainStep } from '../components/MainStep/MainStep.tsx';
import { MapScreen } from '../components/MapScreen/MapScreen.tsx';
import { Faq } from '../components/Faq/Faq.tsx';
import { Price } from '../components/Price/Price.tsx';
import { Footer } from '../components/Footer/Footer.tsx';

function MainPage() {

  return (
    <div>
      <MainStep/>
      <Faq/>
      <Price/>
      <MapScreen/>
      <Footer/>
    </div>
  )
}


export default  MainPage
