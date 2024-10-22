import React from 'react';
import View from '../components/OrientationView.jsx';
import OrientationControls from '../components/OrientationControls.jsx';
import { timestamps, rotationData } from '../components/OrientationData.jsx';

export default function OrientationTab() {
  const defaultTimestamp = timestamps[timestamps.length - 1];
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <OrientationControls 
        defaultTimestamp={defaultTimestamp}
        view={(controls) => (
          <View {...controls} rotationData={rotationData} />
        )
      } />
    </div>
  );
}
