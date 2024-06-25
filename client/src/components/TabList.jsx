import React from 'react';
import List from '@mui/material/List';
import TabListItem from './TabListItem.jsx';
import { DashboardIcon, ExperimentIcon } from './TabListIcons.jsx';
import './TabListIcons.css';

export default function TabList({ setSelectedTabName, setSidebarOpen }) {
    return (
        <List disablePadding>
          <TabListItem icon={<DashboardIcon />} name='Dashboard' href='/dashboard' setSelectedTabName={setSelectedTabName} setSidebarOpen={setSidebarOpen}/>
          <TabListItem icon={<ExperimentIcon />} name='Experiment' href='/experiments' setSelectedTabName={setSelectedTabName} setSidebarOpen={setSidebarOpen}/>
          <TabListItem name='Home Page' href='/' setSelectedTabName={setSelectedTabName} setSidebarOpen={setSidebarOpen}/>
          <TabListItem name='Test Page' href='/test' setSelectedTabName={setSelectedTabName} setSidebarOpen={setSidebarOpen}/>
        </List>
    );
}