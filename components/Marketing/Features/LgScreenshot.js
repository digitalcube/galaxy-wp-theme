export const LgScreenshot = () => {
  return (
    <div className='relative container mx-auto'>
      <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
        <div>
          <h2 className='text-base font-semibold tracking-wider text-purple-600 uppercase'>
            Shifter
          </h2>
          <p className='mt-2 text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl'>
            Product Walkthrough
          </p>
          <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
        </div>
        <div className='py-12'>
          <img
            className='rounded-lg shadow ring-1 ring-black ring-opacity-5'
            src='https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
