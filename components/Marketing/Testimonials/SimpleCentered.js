export const SimpleCentered = () => {
  return (
    <section className='py-12 bg-purple-50 overflow-hidden md:py-20 lg:py-24 bg-purple-800'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <svg
          className='absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2'
          width={404}
          height={404}
          fill='none'
          viewBox='0 0 404 404'
          role='img'
          aria-labelledby='svg-workcation'>
          <title id='svg-workcation'>Workcation</title>
          <defs>
            <pattern
              id='ad119f34-7694-4c31-947f-5c9d249b21f3'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'>
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-gray-200'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill='url(#ad119f34-7694-4c31-947f-5c9d249b21f3)'
          />
        </svg>

        <div className='relative'>
          <img
            className='mx-auto h-8'
            src='https://tailwindui.com/img/logos/workcation-logo-white.svg'
            alt='Workcation'
          />
          <blockquote className='mt-10'>
            <div className='max-w-3xl mx-auto text-center text-size-6 font-bold text-white'>
              <p>
                &ldquo;That’s where more user-friendly hosting platforms like
                Shifter are making inroads on marketing JAMstack technology to a
                less-technical crowd. They provide all-in-one “serverless”
                architecture solutions that generate static files from WordPress
                sites and serve them via CDN.&rdquo;
              </p>
            </div>
            <footer className='mt-8'>
              <div className='md:flex md:items-center md:justify-center'>
                <div className='md:flex-shrink-0'>
                  <img
                    className='mx-auto h-10 w-10 rounded-full'
                    src='https://avatars.githubusercontent.com/u/343280?v=4'
                    alt=''
                  />
                </div>
                <div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
                  <div className='text-size-6 font-bold text-white'>
                    Sarah Gooding, WP Tavern
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
