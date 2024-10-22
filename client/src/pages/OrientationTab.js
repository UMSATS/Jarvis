import React from 'react';
import View from '../components/OrientationView.jsx';
import OrientationControls from '../components/OrientationControls.jsx';

export default function OrientationTab() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <OrientationControls view={(controls) => (
        <View {...controls} />
      )} />
    </div>
  );
}
