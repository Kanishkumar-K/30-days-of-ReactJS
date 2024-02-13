import React from 'react';
import Sidebar from './Sidebar';
import Article from './Article';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Article />

      <Sidebar />
      
      <Footer />
    </div>
  );
}

export default Home;
