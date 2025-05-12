import React from 'react';
import Header from "../components/Header.jsx";
import CategoryCard from '../components/CategoryCard.jsx';
import './Home.css';
import CarruselOfertas from "../components/CarruselOfertas.jsx";
import ProductCard from '../components/ProductCard.jsx';


const Home = () => {
  const categories = [
    { icon: '🧼', name: 'Aseo' },
    { icon: '📚', name: 'Escolares' },
    { icon: '🍔', name: 'Comida' },
    { icon: '🍎', name: 'Frutas' },
    { icon: '🔥', name: 'Promociones' }
  ];

  return (
    <div className="home-container">
      <Header />
      <CarruselOfertas />
      <ProductCard/>

      <section className="categories-grid">
        {categories.map((category, index) => (
          <CategoryCard 
            key={index}
            icon={category.icon}
            name={category.name}
          />
          
        ))}
      </section>
    </div>
  );




  
};

export default Home;