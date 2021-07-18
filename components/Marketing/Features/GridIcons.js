import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

const features = [
  { name: "Shifter API", icon: "/shifter-api.png" },
  { name: "Build in CDN", icon: "/build-in-cdn.png" },
  { name: "Built for WordPress", icon: "/built-for-wordpress.png" },
  { name: "Search", icon: "/search.png" },
  { name: "Media CDN", icon: "/media-cdn.png" },
  { name: "Safe Mode", icon: "/safe-mode.png" },
  { name: "Safe Mode", icon: "/safe-mode.png" },
  { name: "Outgoing Webhooks", icon: "/outgoing-webhooks.png" },
];

export const GridIcons = () => {
  return (
    <div className='relative bg-purple-800 py-4 sm:py-6 lg:py-24'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='mt-2 font-bold text-white text-size-9 sm:text-5xl'>
            First core benefit is Maintenance Free WordPress
          </h2>
          <p className='mt-5 max-w-prose mx-auto text-size-6 text-white'>
            Deploy secure sites that scale and end downtime with Shifter, the
            serverless hosting solution and static site generator for WordPress.
          </p>
        </div>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {features.map((feature) => (
              <div key={feature.name} className='pt-6'>
                <div className='flow-root bg-white rounded-lg px-6 pb-8'>
                  <img
                    src={`${feature.icon}`}
                    alt=''
                    className='w-full mt-6'
                    aria-hidden='true'
                  />
                  <h3 className='mt-8 text-size-6 font-bold text-purple-800'>
                    {feature.name}
                  </h3>
                  <p className='mt-5 text-size-5 text-purple-800'>
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
