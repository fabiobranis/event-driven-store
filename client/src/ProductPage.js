import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useProduct } from './App';
import ProductDialog from './components/ProductDialog';
import Product from './Product';

const ProductPage = () => {
  const {
    id, name, description, photo, price,
  } = useProduct();
  const navigate = useNavigate();

  const redirectBack = () => navigate('/');

  useEffect(() => {
    if (!id) redirectBack();
  }, []);

  return (
    <ProductDialog
      onClose={redirectBack}
      open={true}
    >
      <Product
        id={id}
        name={name}
        description={description}
        photo={photo}
        price={price}
        onClose={redirectBack}
      />
    </ProductDialog>);
};
export default ProductPage;
