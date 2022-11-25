import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@headlessui/react';
import { post } from '../utils/client';

const Product = ({
  onClose, id, name, description, photo, price,
}) => {
  const [email, setEmail] = useState();

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const onSubmit = async () => {
    await post({
      endpoint: `product/${id}/associate-user`,
      body: { email },
    });
  };
  return (
    <Fragment>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div
            className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900">
              {name}
            </Dialog.Title>
            <div
              className="min-h-fit aspect-w-1 aspect-h-1 w-full
            rounded-md bg-gray-200 group-hover:opacity-75
            lg:aspect-none mt-4"
            >
              <img
                src={photo}
                alt={name}
                className="h-full w-full object-cover
                object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  {name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{price}</p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300
                shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex
                  sm:flex-row-reverse sm:px-6">
        <button
          onClick={onSubmit}
          type="button"
          className="inline-flex w-full justify-center rounded-md
                      border border-transparent bg-green-600 px-4 py-2 text-base
                      font-medium text-white shadow-sm hover:bg-green-700
                      focus:outline-none focus:ring-2 focus:ring-green-500
                      focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Subscribe
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md
                    border border-gray-300 bg-white px-4 py-2 text-base
                    font-medium text-gray-700 shadow-sm hover:bg-gray-50
                    focus:outline-none focus:ring-2 focus:ring-indigo-500
                    focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </Fragment>
  );
};

Product.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  photo: PropTypes.string,
};

export default Product;
