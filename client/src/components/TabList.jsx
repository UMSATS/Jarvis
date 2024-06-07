import React from 'react';
import List from '@mui/material/List';
import TabListItem from './TabListItem.jsx';
import { DashboardIcon, ExperimentIcon } from './TabListIcons.jsx';
import './TabListIcons.css';

export default function TabList({ setSelectedTabName }) {
    return (
        <List disablePadding>
          <TabListItem icon={<DashboardIcon />} name='Dashboard' href='/dashboard' setSelectedTabName={setSelectedTabName}/>
          <TabListItem icon={<ExperimentIcon />} name='Experiment' href='/experiments' setSelectedTabName={setSelectedTabName}/>
          <TabListItem name='Home Page' href='/home' setSelectedTabName={setSelectedTabName}/>
          <TabListItem name='Test Page' href='/test' setSelectedTabName={setSelectedTabName}/>
        </List>
    );
}