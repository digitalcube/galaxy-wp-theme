import { Button } from "../../UI";

export const CTASimpleCentered = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50'>
      <div className='max-w-5xl mx-auto text-center py-4 px-4 sm:py-16 sm:px-6 lg:px-8'>
        <h2 className='text-size-7 font-bold text-purple-primary'>
          Ready to take your site to the next level?
        </h2>
        <p className='mt-4 mb-6 text-size-5 text-purple-800'>
          Shifter is the solution for fast, maintenance-free WordPress websites.
        </p>
        <Button label='Sign up for free' />
      </div>
    </div>
  );
};
