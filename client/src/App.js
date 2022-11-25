/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  Link, Outlet, useNavigate, useOutletContext,
} from 'react-router-dom';
import { get } from '../utils/client';
import './app.css';
import AppNavBar from './components/AppNavBar';
import ProductCard from './components/ProductCard';
import ShoppingContainer from './components/ShoppingContainer';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState({
    id: null, name: null, description: null, photo: null, price: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await get({ endpoint: 'product' });
      const json = await data.json();
      setProducts(json);
    };
    // eslint-disable-next-line no-console
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    if (selected.id) navigate(`/${selected.id}`);
  }, [selected]);

  const redirect = (product) => {
    setSelected(product);
  };

  const loadProducts = () => products.map((product) => (
    <Link onClick={() => redirect(product)} key={product.id}>
      <ProductCard
        key={product.id}
        id={product.id}
        name={product.name}
        photo={product.photo}
        price={product.price}
      />
    </Link>
  ));

  return (
    <div>
      <AppNavBar />
      <ShoppingContainer>
        {loadProducts()}
      </ShoppingContainer>
      <Outlet context={selected} />
    </div>
  );
};

export function useProduct() {
  return useOutletContext();
}

export default App;
