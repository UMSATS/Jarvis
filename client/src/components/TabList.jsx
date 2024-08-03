import React from 'react';
import List from '@mui/material/List';
import TabListItem from './TabListItem.jsx';

import { ReactComponent as DashboardIcon} from '../assets/images/icons/grey/dashboard.svg';
import { ReactComponent as ExperimentIcon } from '../assets/images/icons/grey/experiment.svg';
import { ReactComponent as EventLogIcon } from '../assets/images/icons/grey/event_log.svg';
import { ReactComponent as OrientationIcon } from '../assets/images/icons/grey/orientation.svg';
import { ReactComponent as BatteryIcon } from '../assets/images/icons/grey/battery.svg';
import { ReactComponent as TemperaturesIcon } from '../assets/images/icons/grey/temperatures.svg';

import { ReactComponent as DashboardIconGradient} from '../assets/images/icons/gradient/dashboard.svg';
import { ReactComponent as ExperimentIconGradient } from '../assets/images/icons/gradient/experiment.svg';
import { ReactComponent as EventLogIconGradient } from '../assets/images/icons/gradient/event_log.svg';
import { ReactComponent as OrientationIconGradient } from '../assets/images/icons/gradient/orientation.svg';
import { ReactComponent as BatteryIconGradient } from '../assets/images/icons/gradient/battery.svg';
import { ReactComponent as TemperaturesIconGradient } from '../assets/images/icons/gradient/temperatures.svg';

const iconProps = {
    width: '42px',
    height: '42px'
}

export default function TabList() {
    return (
        <List disablePadding>
            <TabListItem name='Dashboard' href='/dashboard'
                         iconUnselected={<DashboardIcon {...iconProps} />} 
                         iconSelected={<DashboardIconGradient {...iconProps} />}
            />
		    <TabListItem name='Event Log' href='/event-log'
                         iconUnselected={<EventLogIcon {...iconProps} />}
                         iconSelected={<EventLogIconGradient {...iconProps} />}
            />
            <TabListItem name='Temperatures' href='/temperatures'
                         iconUnselected={<TemperaturesIcon {...iconProps} />}
                         iconSelected={<TemperaturesIconGradient {...iconProps} />}
            />
            <TabListItem name='Battery' href='/battery'
                         iconUnselected={<BatteryIcon {...iconProps} />}
                         iconSelected={<BatteryIconGradient {...iconProps} />}
            />
            <TabListItem name='Experiment' href='/experiment'
                         iconUnselected={<ExperimentIcon {...iconProps} />}
                         iconSelected={<ExperimentIconGradient {...iconProps} />}
            />
            <TabListItem name='Orientation' href='/orientation'
                         iconUnselected={<OrientationIcon {...iconProps} />}
                         iconSelected={<OrientationIconGradient {...iconProps} />}
            />
        </List>
    );
}