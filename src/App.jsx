import { useState, useEffect } from 'react';
import { FeatureActressesCard } from './components/FeatureActressesCard.jsx';
import axios from 'axios';
import './App.css';

const API_URL_ACTRESSES = 'https://lanciweb.github.io/demo/api/actresses/';

export const App = () => {
  const [featureActresses, setFeatureActresses] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(API_URL_ACTRESSES, { params: { page } })
      .then(res => {
        console.log(res.data);
        setFeatureActresses(res.data)
      })
      .catch(err => {
        console.log(err);
      });

  }, [page]);


  return (
    <>
      <h1>Famous Actresses</h1>
      <div className='navigation'>
        <button
          onClick={() => setPage
            (p => Math.max(1, p - 1)
            )}>
          Prev
        </button>
        <span className="page-number">{page}</span>
        <button
          onClick={() => setPage
            (p => Math.min(featureActresses.length, p + 1)
            )}>
          Next
        </button>
      </div>
      <div className="feature-actresses">
        {featureActresses.length > 0 && (
          <FeatureActressesCard featureActresses={featureActresses[page - 1]} />
        )}
      </div>
    </>
  );
};


