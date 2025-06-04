import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log('Component rendered');
  });

  function handleClick(refToFocus, others) {
    refToFocus.current.focus();
    refToFocus.current.style.backgroundColor = 'yellow';
    others.forEach(ref => {
      if (ref.current) {
        ref.current.style.backgroundColor = '';
      }
    });
  }

  return (
    <div className="input-container">
      <div className="input-group">
        <button onClick={() => handleClick(inputRef1, [inputRef2, inputRef3])}>Focus Input 1</button>
        <input ref={inputRef1} type="text" placeholder="Input 1" />
      </div>
      <div className="input-group">
        <button onClick={() => handleClick(inputRef2, [inputRef1, inputRef3])}>Focus Input 2</button>
        <input ref={inputRef2} type="text" placeholder="Input 2" />
      </div>
      <div className="input-group">
        <button onClick={() => handleClick(inputRef3, [inputRef1, inputRef2])}>Focus Input 3</button>
        <input ref={inputRef3} type="text" placeholder="Input 3" />
      </div>
    </div>
  );
}

export default MyComponent;
