export const CTASimpleCentered = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto text-center py-4 px-4 sm:py-12 sm:px-6 lg:px-8'>
        <h2 className='text-size-9 font-bold text-purple-primary sm:text-size-9'>
          <span className='block text-size-6 uppercase'>CTA</span>
          <span className='block'>
            Ready to take your site to the next level?
          </span>
        </h2>
        <p className='mt-4 text-size-6 text-purple-800'>
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <a
          href='#'
          className='mt-8 inline-block py-3 px-4 rounded-md shadow bg-purple-500 text-white font-bold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-focus focus:ring-offset-purple-800'
          >
            
          Sign up for free
        </a>
      </div>
    </div>
  );
};
