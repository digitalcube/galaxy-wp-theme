import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

const features = [
  { name: "Push to Deploy", icon: CloudUploadIcon },
  { name: "SSL Certificates", icon: LockClosedIcon },
  { name: "Simple Queues", icon: RefreshIcon },
  { name: "Advanced Security", icon: ShieldCheckIcon },
  { name: "Powerful API", icon: CogIcon },
  { name: "Database Backups", icon: ServerIcon },
];

export const GridIcons = () => {
  return (
    <div className='relative bg-purple-800 py-4 sm:py-6 lg:py-16'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <h2 className='mt-2 text-3xl font-bold text-white sm:text-4xl'>
          Core Benefit of static WordPress 1 (Maintenance Free)
        </h2>
        <p className='mt-5 max-w-prose mx-auto text-xl text-white'>
          Deploy secure sites that scale and end downtime with Shifter, the
          serverless hosting solution and static site generator for WordPress.
        </p>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature) => (
              <div key={feature.name} className='pt-6'>
                <div className='flow-root bg-white rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-purple-500 rounded-md shadow-lg'>
                        <feature.icon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-bold text-gray-900 tracking-tight'>
                      {feature.name}
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
