import React, { useEffect, useState } from 'react';
import { Overlay, Container, Title, Text, SimpleGrid } from '@mantine/core';
import classes from './MainStep.module.css';
import { MainButton } from '../UI/MainButton/MainButton.tsx';
import { NavLink, useNavigate } from 'react-router-dom';

export function MainStep() {

  const [ screenSizeW, setScreenSizeW ] = useState(window.innerWidth)
  const navigate = useNavigate()

  useEffect(() => {
    window.onresize = () => {setScreenSizeW(window.innerWidth)}
  }, [screenSizeW])

  const resizeWin = (size) => {
    if(size > 1440) return {width: '1440px', height: '1779px'}
    return {width: screenSizeW, height: 1779/100*(screenSizeW * 100 / 1440)}
  }

  const telOrComp = (size) => {
    if(size > 1440){
      return (
      <Container className={classes.control}>
        <SimpleGrid
                  mt={5}
                  cols={{ base: 1, sm: 2, md: 4 }}
                  spacing={{ base: 'xs', md: 50 }}
                  verticalSpacing={{ base: 'md', md: 20 }}
              >
        <NavLink to='https://t.me/XF10_Bot' target='_blank' className='nav-link d-inline'><MainButton label='Telegram'/></NavLink>
        </SimpleGrid>
      </Container>
      )
    }
    return (
      <Container className={classes.control}>
        <SimpleGrid
                  mt={5}
                  cols={{ base: 1, sm: 2, md: 4 }}
                  spacing={{ base: 'xs', md: 50 }}
                  verticalSpacing={{ base: 'md', md: 20 }}
              >
        <NavLink to='https://t.me/XF10_Bot' target='_blank' className='nav-link d-inline'><MainButton label='Telegram'/></NavLink>
        <a href="tel:+375447310419"><MainButton label='Позвонить'/></a>
        </SimpleGrid>
      </Container>
      )
  }

    return (
    <div className={classes.hero} style={resizeWin(screenSizeW)}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Ремонт цифровой техники</Title>
        <Text className={classes.description}>
          Ноутбуки, мобильные телефоны, планшеты, мониторы, телевизоры, принтеры, заправка лазерных картриджей
          <hr></hr>
          <b>
            <p>Беларусь, Минск, ул. Лобанка, 94, павильон 10, ТЦ "MAXIMUS"</p>
            <p>пн - пт 11:00 - 20:00</p>
            <p>сб - вскр 11:00 - 18:00</p>
            <hr></hr>
            <p>+375 44 7310419 A1</p>
            {/* <p>+375 29 1344448 A1 (мастер по телефонам)</p> */}
          </b>
        </Text>
        {telOrComp(screenSizeW)}
      </Container>
    </div>
  );
}