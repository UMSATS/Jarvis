import React from 'react';
import List from '@mui/material/List';
import TabListItem from './TabListItem.jsx';
import { ReactComponent as DashboardIcon} from '../assets/images/icons/grey/dashboard.svg';
import { ReactComponent as ExperimentIcon } from '../assets/images/icons/grey/experiment.svg';
import { ReactComponent as EventLogIcon } from '../assets/images/icons/grey/event_log.svg';
import { ReactComponent as OrientationIcon } from '../assets/images/icons/grey/orientation.svg';
import { ReactComponent as BatteryIcon } from '../assets/images/icons/grey/battery.svg';
import { ReactComponent as TemperaturesIcon } from '../assets/images/icons/grey/temperatures.svg';

const iconProps = {
    width: '42px',
    height: '42px'
}

export default function TabList() {
    return (
        <List disablePadding>
          <TabListItem icon={<DashboardIcon {...iconProps} />} name='Dashboard' href='/dashboard'/>
		  <TabListItem icon={<EventLogIcon {...iconProps} />} name='Event Log' href='/event-log'/>
		  <TabListItem icon={<TemperaturesIcon {...iconProps} />} name='Temperatures' href='/temperatures'/>
		  <TabListItem icon={<BatteryIcon {...iconProps} />} name='Battery' href='/battery'/>
		  <TabListItem icon={<ExperimentIcon {...iconProps} />} name='Experiment' href='/experiment'/>
		  <TabListItem icon={<OrientationIcon {...iconProps} />} name='Orientation' href='/orientation'/>
        </List>
    );
}