import React from 'react';
import Sidebar from './Sidebar';
import Article from './Article';
import Footer from './Footer';
import Contacts from './Contacts';
import { useEffect } from 'react';

function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>

      <Article />
      
    </div>
  );
}

export default Home;
