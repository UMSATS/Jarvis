import React from 'react';
import List from '@mui/material/List';
import TabListItem from './TabListItem.jsx';
import { DashboardIcon, ExperimentIcon } from './TabListIcons.jsx';
import './TabListIcons.css';

export default function TabList() {
    return (
        <List disablePadding>
          <TabListItem icon={<DashboardIcon />} name='Dashboard' href='/' />
          <TabListItem icon={<ExperimentIcon />} name='Experiment Tab' href='/experiments'/>
          <TabListItem name='Home Page' href='/home' />
          <TabListItem name='Test Page' href='/test' />
        </List>
    );
}