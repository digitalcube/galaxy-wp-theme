export const LgScreenshot = () => {
  return (
    <div className='mx-auto max-w-md text-center lg:max-w-5xl shadow-3 mb-20'>
      <div className='aspect-w-16 aspect-h-9 overflow-hidden'>
        <iframe
          src='https://player.vimeo.com/video/365886635?title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    </div>
  );
};
