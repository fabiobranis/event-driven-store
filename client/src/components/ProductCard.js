import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({
  id,
  name,
  price,
  photo,
}) => (
  <div key={id} className="group relative">
    <div
      className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden
      rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
    >
      <img
        src={photo}
        alt={name}
        className="h-full w-full object-cover
          object-center lg:h-full lg:w-full"
      />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          {name}
        </h3>
      </div>
      <p className="text-sm font-medium text-gray-900">{price}</p>
    </div>
  </div>
);

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  photo: PropTypes.string,
};

export default ProductCard;
