import { Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import classes from './Footer.module.css';
import React from 'react';

export function Footer() {
  return (
    <div>
      <Group wrap="nowrap">
        <div>
          <Text fz="xs" c="dimmed">
            <p>ЧСУП «Компьютер и Принтер» УНП 191573823</p>    
            <p>ЗАО «БСБбанк» РКЦ №7, код UNBSBY2X р/c BY11UNBS30120102180050007933</p>    
            <p>220019, РБ, г. Минск, ул. Лобанка, д. 94, ТЦ "Максимус", павильон 10</p> 
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
            remontf10@gmail.com
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
            +375447310419
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}