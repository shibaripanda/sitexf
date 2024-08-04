import './styles/App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import MainPage from './pages/MainPage';


export const App = () => {

  return (
      <MantineProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="*" element={<MainPage/>} />
            </Routes>
          </BrowserRouter>
      </MantineProvider>
  )
}
