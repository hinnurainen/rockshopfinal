import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

import { initializeState, initializeShop } from './store/actions/actions';
import { useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeState());
    dispatch(initializeShop());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
