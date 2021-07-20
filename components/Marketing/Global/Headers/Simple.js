import { Button } from "../../../UI";

const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Company", href: "#" },
];

export const Simple = () => {
  return (
    <header className='bg-white'>
      <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='w-full py-6 flex items-center'>
          <div className='flex items-center flex-grow'>
            <a href='#'>
              <span className='sr-only'>Shifter</span>
              <img
                className='h-10 w-auto'
                src='/shifter-mark-primary.svg'
                alt=''
              />
            </a>
            <div className='hidden ml-10 space-x-8 lg:block flex ml-auto'>
              {navigation.map((link) => (
                <Button key={link.name} variant='link' href={link.href} label={link.name} />
              ))}
            </div>
          </div>
          <div className='ml-10 space-x-4 flex'>
            <Button variant='white' href='#' label='Log In' />
            <Button variant='primary' href='#' label='Sign Up' />
          </div>
        </div>
        <div className='py-4 flex flex-wrap justify-center space-x-6 lg:hidden'>
          {navigation.map((link) => (
            <Button key={link.name} variant='link' href={link.href} label={link.name} />
          ))}
        </div>
      </nav>
    </header>
  );
};
