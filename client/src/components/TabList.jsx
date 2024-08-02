import React from 'react';
import List from '@mui/material/List';
import TabListItem from './TabListItem.jsx';
import { ReactComponent as DashboardIcon} from '../assets/images/icons/grey/dashboard.svg';
import { ReactComponent as ExperimentIcon } from '../assets/images/icons/grey/experiment.svg';

export default function TabList() {
    return (
        <List disablePadding>
          <TabListItem icon={<DashboardIcon style={{ width: '42px', height: '42px'}} />} name='Dashboard' href='/dashboard'/>
		  <TabListItem icon={<ExperimentIcon style={{ width: '42px', height: '42px'}} />} name='Experiment' href='/experiment'/>
        </List>
    );
}