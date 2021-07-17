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
    icon: InboxIcon,
  },
  {
    name: "Collaborate",
    description:
      "Work with others and share access to your Shifter account using our team features.​",
    icon: UsersIcon,
  },
  {
    name: "Maintenance-free",
    description:
      "Never worry about security vulnerabilities from WordPress Core or your hosting environment, our team of engineers manages that for you.",
    icon: TrashIcon,
  },
  {
    name: "No Coding Required",
    description:
      "Easy for non-developers to get started using WordPress themes or page builders.",
    icon: PencilAltIcon,
  },
];

export const CenteredGrid = () => {
  return (
    <div className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='mt-2 text-3xl leading-8 font-bold tracking-tight text-purple-primary sm:text-4xl'>
            Core Benefit of static WordPress 2 (Security built in)
          </h2>
          <p className='mt-4 max-w-2xl text-xl text-purple-800 lg:mx-auto'>
            Create a new site or migrate an existing WordPress site in minutes.​
          </p>
        </div>

        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {features.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-bold text-whitemary'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-purple-800'>
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
