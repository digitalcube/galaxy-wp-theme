import { Button } from "../../UI";

export const LogosSimple = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-6xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-center'>
        <div className='flow-root my-8 lg:my-10'>
          <div className='-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4'>
            <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
              <img
                className='h-12'
                src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
                alt='Tuple'
              />
            </div>
            <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
              <img
                className='h-12'
                src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
                alt='Mirage'
              />
            </div>
            <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
              <img
                className='h-12'
                src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
                alt='StaticKit'
              />
            </div>
            <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
              <img
                className='h-12'
                src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
                alt='Transistor'
              />
            </div>
            <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
              <img
                className='h-12'
                src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
                alt='Workcation'
              />
            </div>
          </div>
        </div>
        <Button label='View the showcase' variant='outlinePrimary' />
      </div>
    </div>
  );
};
