// import React, { useState, useEffect } from 'react';
// import { FaArrowCircleUp } from 'react-icons/fa';
// import { Button } from 'reactstrap';

// import './Window.css';

// function WindowScroll() {
//   const [visible, setVisible] = useState(false);

//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;

//     if (scrolled > 100) {
//       setVisible(true);
//     } else if (scrolled <= 300) {
//       setVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 100,
//       behavior: 'smooth',
//     });
    
      
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisible);

//     return () => {
//       window.removeEventListener('scroll', toggleVisible);
//     };
//   }, []);

//   return (
//     <div>
//       <Button className="scroll-container" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
//         <FaArrowCircleUp className='favicn' />
        
//       </Button>
//     </div>
//   );
// }

// export default WindowScroll;


import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';
import { Button } from 'reactstrap';

import './Window.css';

function WindowScroll() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <div>
      <Button className="scroll-container" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
        <FaArrowCircleUp className='favicn' />
      </Button>
      <Button className="scroll-container" onClick={scrollToBottom} style={{ display: visible ? 'inline' : 'none' }}>
        <FaArrowCircleDown className='favicn' />
      </Button>
    </div>
  );
}

export default WindowScroll;

