import { useState, useEffect } from 'react';
import { FeatureActressesCard } from './components/FeatureActressesCard.jsx';
import axios from 'axios';
import './App.css';

const API_URL_ACTRESSES = 'https://lanciweb.github.io/demo/api/actresses/';

export const App = () => {
  const [featureActresses, setFeatureActresses] = useState([]);

  useEffect(() => {
    axios.get(API_URL_ACTRESSES)
      .then(res => {
        console.log(res.data);
        setFeatureActresses(res.data)
      });

  }, []);


  return (
    <>
      <h1>Attrici Famose</h1>
      <div className="feature-actresses">
        {featureActresses.map(feature => (
          <FeatureActressesCard
            key={feature.id}
            featureActresses={feature}
          />
        ))}
      </div>
    </>
  );
};


