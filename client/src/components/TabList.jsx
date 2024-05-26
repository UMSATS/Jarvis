import React from 'react';
import List from '@mui/material/List';
import TabListItem from './TabListItem';

export default function TabList() {
    return (
        <List>
          {/* Specify img path by importing icon from '../assets/img and passing path={icon} */}
          <TabListItem name='Home Page' href='/'/>
          <TabListItem name='Test Page' href='/test'/>
        </List>
    );
}