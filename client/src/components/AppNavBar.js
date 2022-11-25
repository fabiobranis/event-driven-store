import React from 'react';
import { Disclosure } from '@headlessui/react';

const AppNavBar = () => (
  <Disclosure as="nav" className="bg-blue-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex items-center basis:1/3">
          <h2 className="text-white font-bold text-lg">The Store</h2>
        </div>
      </div>
    </div>
  </Disclosure>
);

export default AppNavBar;
