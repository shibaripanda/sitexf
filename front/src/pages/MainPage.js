import React from 'react';
import { MainStep } from '../components/MainStep/MainStep.tsx';
import { MapScreen } from '../components/MapScreen/MapScreen.tsx';
import { Faq } from '../components/Faq/Faq.tsx';

function MainPage() {

  return (
    <div>
      <MainStep/>
      <Faq/>
      <MapScreen/>
    </div>
  )
}


export default  MainPage
