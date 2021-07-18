import { TestimonialProps } from "./TestimonialProps";

export const LgAvatar = ({
  author,
  image,
  text,
  jobTitle,
}: TestimonialProps) => {
  return (
    <section className='bg-purple-800 py-24'>
      <div>
        <div className='relative max-w-4xl  mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-16'>
          <img
            src='/square-purple.svg'
            alt=''
            className='absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2 w-half'
          />

          <img
            src='/half-circle-purple.svg'
            alt=''
            className='absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/4 w-half rotate-180'
          />

          <div className='relative lg:flex lg:items-center'>
            <div className='hidden lg:block lg:flex-shrink-0'>
              <img
                className='h-48 w-48 rounded-full xl:h-64 xl:w-64'
                src={`${image}`}
                alt=''
              />
            </div>

            <div className='relative lg:ml-10'>
              <svg
                className='absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-purple-200 opacity-50'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 144 144'
                aria-hidden='true'>
                <path
                  strokeWidth={2}
                  d='M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z'
                />
              </svg>
              <blockquote className='relative'>
                <div className='text-size-6 font-bold text-white'>
                  <p>{text}</p>
                </div>
                <footer className='mt-8'>
                  <div className='flex'>
                    <div className='flex-shrink-0 lg:hidden'>
                      <img
                        className='h-12 w-12 rounded-full'
                        src='`${image}`'
                        alt=''
                      />
                    </div>
                    <div className='ml-4 lg:ml-0'>
                      <div className='text-size-6 font-bold text-white'>
                        {author}
                      </div>
                      <div className='text-size-6 font-bold text-white'>
                        {jobTitle}
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

LgAvatar.defaultProps = {
  author: "Chris Coyier",
  jobTitle: "Founder of CSS-Tricks, Co-founder of CodePen",
  text: "Shifter hosts the WordPress site for you. You have two options: 1) run it headlessly (so you’re just hitting the API, REST or GraphQL, for data) or 2) run it statically (so when you have everything in WordPress where you want it, you deploy it, which creates a static version of your site, which they also host, or you can push it elsewhere e.g. Netlify).",
  image:
    "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/12/image-300x300.jpeg",
};
