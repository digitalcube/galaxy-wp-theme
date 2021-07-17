import {
  InboxIcon,
  UsersIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Easy Installation",
    description:
      "Create a new WordPress site right from the Shifter Dashboard, no uploading required.",
    icon: "/easy-install.svg",
  },
  {
    name: "Collaborate",
    description:
      "Work with others and share access to your Shifter account using our team features.​",
    icon: "/collabrate.svg",
  },
  {
    name: "Maintenance-free",
    description:
      "Never worry about security vulnerabilities from WordPress Core or your hosting environment, our team of engineers manages that for you.",
    icon: "/maintenance-free.svg",
  },
  {
    name: "No Coding Required",
    description:
      "Easy for non-developers to get started using WordPress themes or page builders.",
    icon: "/no-coding.svg",
  },
];

export const CenteredGrid = () => {
  return (
    <div className='py-24 bg-white'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-3xl leading-8 font-bold text-purple-primary sm:text-4xl'>
            Core Benefit of static WordPress 2 (Security built in)
          </h2>
          <p className='mt-4 max-w-2xl text-xl text-purple-800 lg:mx-auto'>
            Create a new site or migrate an existing WordPress site in minutes.​
          </p>
        </div>

        <div className='mt-24 max-w-4xl mx-auto'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {features.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <div className='flex'>
                    <img
                      src={`${feature.icon}`}
                      alt=''
                      className='h-24 w-24'
                      aria-hidden='true'
                    />
                  </div>
                  <p className='text-2xl mt-4 font-bold text-purple-primary'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-4 text-base text-purple-800'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
