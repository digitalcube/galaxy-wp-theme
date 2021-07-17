export const LgScreenshot = () => {
  return (
    <div className='relative container mx-auto'>
      <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
        <div>
          <h2 className='text-base font-bold tracking-wider text-purple-600 uppercase'>
            Shifter
          </h2>
          <p className='mt-2 text-3xl font-bold text-gray-900 sm:text-4xl'>
            Product Walkthrough
          </p>
          <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
        </div>
        <div className='py-12'>
          <div className='aspect-w-16 aspect-h-9'>
            <iframe
              src='https://player.vimeo.com/video/365886635?title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
