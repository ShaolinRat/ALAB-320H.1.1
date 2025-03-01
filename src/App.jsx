import React from 'react';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Article 
          date="11/12/20" 
          title="On the Street in Brooklyn" 
          image="/blog-image-1.jpg" 
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliqui..." 
        />
        <Article 
          date="11/12/20" 
          title="Vintage in Vogue" 
          image="blog-image-2.jpg" 
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliqui..." 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;