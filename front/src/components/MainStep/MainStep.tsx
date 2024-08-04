import React, { useEffect, useState } from 'react';
import { Overlay, Container, Title, Text, SimpleGrid } from '@mantine/core';
import classes from './MainStep.module.css';
import { MainButton } from '../UI/MainButton/MainButton.tsx';
import { NavLink } from 'react-router-dom';

export function MainStep() {

  const [ screenSizeW, setScreenSizeW ] = useState(window.innerWidth)

  useEffect(() => {
    if(screenSizeW > 500) window.onresize = () => {setScreenSizeW(window.innerWidth)}
  }, [screenSizeW])

  const resizeWin = (size: number) => {
    if(size > 1440) return {width: '1440px', height: '1779px'}
    return {width: screenSizeW, height: 1779/100*(screenSizeW * 100 / 1440)}
  }

  const contacts = (size: number) => {
    if(size > 500){
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

  const data = (size: number) => {
    if(size > 500){
      return (
        <Text className={classes.description}>
        <b><p>- Ноутбуки</p> <p>- Мобильные телефоны</p> <p>- Планшеты</p> <p>- Мониторы</p> <p>- Телевизоры</p> <p>- Принтеры</p> <p>- Заправка лазерных картриджей</p></b>
        <p>&nbsp;</p>
        <hr></hr>
        {/* <p>&nbsp;</p> */}
        <p><b>Беларусь, Минск, ул. Лобанка, 94, павильон 10, ТЦ "MAXIMUS"</b></p>
        <p>Пн - пт 11:00 - 20:00</p>
        <p>Сб - вскр 11:00 - 18:00</p>
        <b><p>+375 44 7310419 A1</p></b>
        <hr></hr>
      </Text>
      )
    } 
    return (
      <Text className={classes.descriptionMobile}>
        {/* <b>Ноутбуки, Мобильные телефоны, Планшеты, Мониторы, Телевизоры, Принтеры, Заправка лазерных картриджей</b>
        <p>&nbsp;</p>
        <hr></hr>
        <b> */}
        <p>Минск, ул. Лобанка, 94, павильон 10</p>
        {/* <p></p> 
        <p>ТЦ "MAXIMUS"</p>
        <p>Пн - пт 11:00 - 20:00</p>
        <p>Сб - вскр 11:00 - 18:00</p>
        <p>+375 44 7310419 A1</p>
        <hr></hr>
        </b> */}
      </Text>
    )
    // return (
    //   <Text className={classes.descriptionMobile}>
    //     <b>Ноутбуки, Мобильные телефоны, Планшеты, Мониторы, Телевизоры, Принтеры, Заправка лазерных картриджей</b>
    //     <p>&nbsp;</p>
    //     <hr></hr>
    //     <b>
    //     <p>Беларусь, Минск,</p>
    //     <p>ул. Лобанка, 94, павильон 10</p> 
    //     <p>ТЦ "MAXIMUS"</p>
    //     <p>Пн - пт 11:00 - 20:00</p>
    //     <p>Сб - вскр 11:00 - 18:00</p>
    //     <p>+375 44 7310419 A1</p>
    //     <hr></hr>
    //     </b>
    //   </Text>
    // )
  }

    return (
    <div className={classes.hero} style={resizeWin(screenSizeW)}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        {/* <Title className={classes.title1}>Сайт находится на модернизации!</Title> */}
        <Title className={classes.title}><h1>Ремонт ноутбуков и телефонов</h1></Title>
        {data(screenSizeW)}
        {contacts(screenSizeW)}
      </Container>
    </div>
  );
}