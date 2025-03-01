import React from 'react';

function Article({ date, title, image, content }) {
  return (
    <article style={{ marginBottom: '4rem', borderBottom: '1px solid lightgray', paddingBottom: '2rem' }}>
      <time dateTime={date}>{date}</time>
      <h3 style={{ fontSize: 'larger' }}>{title}</h3>
      <img src={image} alt={title} />
      <p style={{ position: 'relative' }}>
        <span style={{ 
          float: 'left', 
          color: 'lightgray', 
          fontSize: '2em', 
          lineHeight: '0.8' 
        }}>{content.charAt(0)}</span>
        {content.slice(1)}
      </p>
      <a href="#" style={{ float: 'right', color: 'tomato', fontWeight: 'bold' }}>Continues ...</a>
    </article>
  );
}

export default Article;