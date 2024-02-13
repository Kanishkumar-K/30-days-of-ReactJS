// Article.jsx

import React from 'react';
import './Article.css';

function Article() {
  return (
    <article className='s2'>
      <header>
        <h1 className="c1">Title</h1>
        <h2 className="c1">Subtitle</h2>
        <br />
        <br />
        <br />
      </header>
   
      <div className="content">
        <h1>Article Title</h1><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam efficitur dolor et dui aliquet, non sollicitudin tortor faucibus.</p>
        <p>Curabitur sed purus eget leo faucibus consectetur.</p>
      </div>
    </article>
  );
}

export default Article;
