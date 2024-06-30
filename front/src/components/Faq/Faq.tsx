import { Title, Container, Accordion, ThemeIcon, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import classes from './Faq.module.css';
import React from 'react';
import { textVopros } from '../../modules/textVopros';

export function Faq() {
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title ta="center" className={classes.title}>
          Ответы на частые вопросы
        </Title>

        <Accordion
          chevronPosition="right"
        //   defaultValue="reset-password"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{ label: { color: 'var(--mantine-color-black)' }, item: { border: 0 } }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus style={{ width: '1vmax', height: '1vmax' }} stroke={1.5} />
            </ThemeIcon>
          }
        >
            {textVopros.map((item, index) => 
                <Accordion.Item className={classes.item} key={index} value={item.value}>
                <Accordion.Control>{item.vopros}</Accordion.Control>
                <Accordion.Panel>{item.otvet}</Accordion.Panel>
                </Accordion.Item>
            )}
        </Accordion>
      </Container>
    </div>
  );
}