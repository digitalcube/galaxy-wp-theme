import { ChevronRightIcon } from "@heroicons/react/solid";

export const Illustration = () => {
  return (
    <div className='pt-10 bg-purple-800 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
            <div className='lg:py-24'>
              <h1 className='mt-4 text-size-9 font-bold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                The Jamstack WordPress Hosting Platform.
              </h1>
              <p className='mt-3 text-size-6 text-white sm:mt-5'>
                Using Shifter, create or migrate WordPress sites in minutes that
                are scalable, secure from attacks, and 100% static with no
                security or caching plugins required.
              </p>
              <div className='mt-10 sm:mt-12'>
                <form action='#' className='sm:max-w-xl sm:mx-auto lg:mx-0'>
                  <div className='sm:flex'>
                    <div className='min-w-0 flex-1'>
                      <label htmlFor='email' className='sr-only'>
                        Email address
                      </label>
                      <input
                        id='email'
                        type='email'
                        placeholder='Enter your email'
                        className='block w-full px-4 py-3 rounded-md border-0 text-size-6 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-focus focus:ring-offset-purple-800'
                      />
                    </div>
                    <div className='mt-3 sm:mt-0 sm:ml-3'>
                      <button
                        type='submit'
                        className='block w-full py-3 px-4 rounded-md shadow bg-purple-500 text-white font-bold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-focus focus:ring-offset-purple-800'>
                        Start free trial
                      </button>
                    </div>
                  </div>
                  <p className='mt-3 text-sm text-gray-300 sm:mt-4'>
                    Start your free 7-day trial, no credit card necessary. By
                    providing your email, you agree to our{" "}
                    <a href='#' className='font-bold text-white'>
                      terms or service
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <img
                className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                src='https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
