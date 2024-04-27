import React, { useState } from 'react';
import MyModal from '../components/MyModal/MyModal';

function Task1Page() {
  const [open, setOpen] = useState(false);

  const handleToggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleToggleModal}>Toggle Modal</button>
      <MyModal open={open} disableGlobalScroll={true}>
        <div>
          <h1>Some content</h1>
          <button onClick={handleToggleModal}>Close</button>
        </div>
      </MyModal>
    </div>
  );
}

export default Task1Page;