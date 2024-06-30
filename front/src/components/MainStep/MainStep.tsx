import React, { useEffect, useState } from 'react';
import { Overlay, Container, Title, Text, SimpleGrid } from '@mantine/core';
import classes from './MainStep.module.css';
import { MainButton } from '../UI/MainButton/MainButton.tsx';

export function MainStep() {

  const [ screenSizeW, setScreenSizeW ] = useState(window.innerWidth)

  useEffect(() => {
    window.onresize = () => {setScreenSizeW(window.innerWidth)}
  }, [screenSizeW])

  const resizeWin = (size) => {
    if(size > 1440) return {width: '1440px', height: '1779px'}
    return {width: screenSizeW, height: 1779/100*(screenSizeW * 100 / 1440)}
  }
  console.log(resizeWin(screenSizeW))

    return (
    <div className={classes.hero} style={resizeWin(screenSizeW)}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={0.9}
        zIndex={0}
      />
      {/* <Container className={classes.container} style={{width: screenSizeW, height: window.innerHeight}}> */}
      <Container className={classes.container}>
        <Title className={classes.title}>Ремонт цифровой техники</Title>
        <Text className={classes.description}>
          Ноутбуки, мобильные телефоны, планшеты, мониторы, телевизоры, принтеры, заправка картриджей
        </Text>
        <Container className={classes.control}>
          <SimpleGrid
                  mt={5}
                  cols={{ base: 1, sm: 2, md: 4 }}
                  spacing={{ base: 'xs', md: 50 }}
                  verticalSpacing={{ base: 'md', md: 20 }}
              >
                <MainButton label='Диагностика'/>
                <MainButton label='Ремонт'/>
                <MainButton label='Гарантия'/>
                <MainButton label='Hellod sd'/>
                <MainButton label='Hellodsdsds'/>
          </SimpleGrid>
        </Container>
      </Container>
    </div>
  );
}