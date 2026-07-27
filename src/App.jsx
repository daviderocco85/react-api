import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL_ACTRESSES = 'https://lanciweb.github.io/demo/api/actresses/';

export const App = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    axios.get(API_URL_ACTRESSES)
      .then(res => console.log(res.data));
  }, []);


  return (
    <>
      Work in progress
    </>
  );
};


