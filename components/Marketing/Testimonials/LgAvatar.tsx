import { TestimonialProps } from "./TestimonialProps";

export const LgAvatar = ({
  author,
  image,
  text,
  jobTitle,
}: TestimonialProps) => {
  return (
    <section className='bg-gradient-to-b from-purple-100 to-transparent overflow-hidden relative'>
      <img
        src='/geo-background.svg'
        alt=''
        className='absolute left-0 right-0 top-0 opacity-50'
      />
      <div className='relative max-w-4xl  mx-auto py-28 px-4 sm:px-6 lg:px-8'>
        <div className='relative lg:flex lg:items-center'>
          <div className='hidden lg:block lg:flex-shrink-0'>
            <img
              className='h-48 w-48 rounded-full xl:h-60 xl:w-60'
              src={`${image}`}
              alt=''
            />
          </div>
          <div className='relative lg:ml-10'>
            <blockquote className='relative'>
              <div className='text-size-6 font-bold text-gray-600'>
                <p>{text}</p>
              </div>
              <footer className='mt-8'>
                <div className='flex'>
                  <div className='flex-shrink-0 lg:hidden'>
                    <img
                      className='h-12 w-12 rounded-full'
                      src={`${image}`}
                      alt=''
                    />
                  </div>
                  <div className='ml-4 lg:ml-0'>
                    <div className='text-size-6'>
                      <span className='font-bold text-purple-700'>
                        {author}
                        {`, `}
                      </span>
                      <span className='text-gray-600'>{jobTitle}</span>
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
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
