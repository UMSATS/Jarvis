import React from 'react';
import List from '@mui/material/List';
import TabListItem from './TabListItem.jsx';
import { ReactComponent as DashboardIcon} from '../assets/images/icons/grey/dashboard.svg';
import { ReactComponent as ExperimentIcon } from '../assets/images/icons/grey/experiment.svg';
import { ReactComponent as EventLogIcon } from '../assets/images/icons/grey/event_log.svg';
import { ReactComponent as OrientationIcon } from '../assets/images/icons/grey/orientation.svg';
import { ReactComponent as BatteryIcon } from '../assets/images/icons/grey/battery.svg';
import { ReactComponent as TemperaturesIcon } from '../assets/images/icons/grey/temperatures.svg';

export default function TabList() {
    return (
        <List disablePadding>
          <TabListItem icon={<DashboardIcon style={{ width: '42px', height: '42px'}} />} name='Dashboard' href='/dashboard'/>
		  <TabListItem icon={<EventLogIcon style={{ width: '42px', height: '42px'}} />} name='Event Log' href='/event-log'/>
		  <TabListItem icon={<TemperaturesIcon style={{ width: '42px', height: '42px'}} />} name='Temperatures' href='/temperatures'/>
		  <TabListItem icon={<BatteryIcon style={{ width: '42px', height: '42px'}} />} name='Battery' href='/battery'/>
		  <TabListItem icon={<ExperimentIcon style={{ width: '42px', height: '42px'}} />} name='Experiment' href='/experiment'/>
		  <TabListItem icon={<OrientationIcon style={{ width: '42px', height: '42px'}} />} name='Orientation' href='/orientation'/>
        </List>
    );
}