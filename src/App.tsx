import React from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';

function App() {
  return (
    <div className="p-4">
      <AlertBox
        type="success"
        message="Your Profile has been updated successfully!"
        onClose={() => alert('Alert closed')}
      >
        <p className="text-sm">You can now contiune using the application.</p>
      </AlertBox>
    </div>
  );
}

export default App;