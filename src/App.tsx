import React from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';

function App() {
  return (
    <div style={{ padding: 16 }}>
      <AlertBox
        type="success"
        message="Your Profile has been updated successfully!"
        onClose={() => alert('Alert closed')}
      >
        <p>You can now contiune using the application.</p>
      </AlertBox>
    </div>
  );
}

export default App;