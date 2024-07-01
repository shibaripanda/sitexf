import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import classes from './Price.module.css';
import React from "react"

const data = [
    {
        name: 'Замена стекла в телефоне',
        cost: 'от 90 руб.',
        var: '60 дней',
    },
    {
        name: 'Замена модуля в телефоне',
        cost: 'от 80 руб.',
        var: '60 дней',
    },
    {
        name: 'Замена разъема в телефоне / планшете',
        cost: 'от 45 руб.',
        var: '60 дней',
    },
    {
        name: 'Установка операционной системы',
        cost: 'от 75 руб.',
        var: '14 дней',
    },
    {
        name: 'Профилактика системы охлаждения замена термопасты',
        cost: 'от 50 руб.',
        var: '14 дней',
    },
    {
        name: 'Профилактика состемы охлаждения',
        cost: 'от 50 руб.',
        var: '14 дней',
    },
    {
        name: 'Первичная дагностика',
        cost: 'бесплатно',
        var: '0 дней',
    },
    {
        name: 'Замена клавиатуры ноутбука',
        cost: 'от 70 руб.',
        var: '120 дней',
    }
];

export function Price() {
  const [scrolled, setScrolled] = useState(false);

  const resizeWin = () => {
    if(window.innerWidth > 1440) return '1440px'
    return window.innerWidth
  }

  const rows = data.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.cost}</Table.Td>
      <Table.Td>{row.var}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea h={400} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={resizeWin()}>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>
            <Table.Th>Услуга</Table.Th>
            <Table.Th>Стоимость</Table.Th>
            <Table.Th>Гарантия</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}