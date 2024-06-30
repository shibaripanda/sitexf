import { Text, Paper } from '@mantine/core';
import React from 'react';
import {
  IconDeviceLaptop,
} from '@tabler/icons-react'

export function DeviceItem() {
  return (
    <div>
      <Paper 
        shadow="xs" 
        radius="md" 
        p="sm" 
        opacity={0.4}
        style={{ width: '5vmax', height: '3.5vmax', textAlign : 'center' }}
      >
        <IconDeviceLaptop  style={{ width: '2.5vmax', height: '2.5vmax', color: 'grey' }} stroke={2}/>
      </Paper>
    </div>
  )
}