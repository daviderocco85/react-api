import { useState, useEffect } from 'react';
import { FeatureActressesCard } from './components/FeatureActressesCard.jsx';
import axios from 'axios';
import './App.css';

const API_URL_ACTRESSES = 'https://lanciweb.github.io/demo/api/actresses/';
const API_URL_ACTORS = 'https://lanciweb.github.io/demo/api/actors/';

export const App = () => {
  const [featureActresses, setFeatureActresses] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(API_URL_ACTRESSES, { params: { page } })
      .then(res => {
        console.log("API ACTRESSES :", res.data);
        setFeatureActresses(res.data)
      })
      .catch(err => {
        console.log(err);
      });

  }, [page]);

  useEffect(() => {
    axios.get(API_URL_ACTORS)
      .then(res => {
        console.log("API ACTORS :", res.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  useEffect(() => {
    Promise.all([
      axios.get(API_URL_ACTRESSES),
      axios.get(API_URL_ACTORS)
    ])
      .then(([resActresses, resActors]) => {

        const mergedList = [...resActresses.data, ...resActors.data];

        console.log("API ACTRESSES and API ACTORS :", mergedList);
      })
      .catch(err => console.log(err));
  }, []);




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


