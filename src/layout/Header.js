import { useRouter } from 'next/router';
import React from 'react';

import { Button, Pager } from '../lib';

const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 bg-white shadow-sm z-30">
      <Pager>
        <div className="block sm:hidden md:hidden lg:hidden xl:hidden">
          <div className="flex justify-center">
            <div className="flex-none py-4 flex lg:w-60 xl:w-72">
              <h1 className="text-4xl text-pink-600">Cattle Care</h1>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:block lg:block xl:block">
          <div className="flex justify-between">
            <div className="flex-none py-4 flex lg:w-60 xl:w-72">
              <h1 className="text-4xl text-pink-600">Cattle Care</h1>
            </div>
            <div className="flex-auto h-18 flex items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8">
              <div>
                <div className="flex-auto flex justify-between">
                  <div className="pr-3">
                    <Button name="Login" onClick={() => router.push('/login')} />
                  </div>
                  <div className="pl-3 hidden sm:block md:block lg:block xl:block">
                    <Button secondary name="Signup" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Pager>
    </header>
  );
};

export default Header;
