import Head from "next/head";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  InboxIcon,
  UserIcon,
  UsersIcon,
  TrashIcon,
  PencilAltIcon,
  DocumentReportIcon,
  ReplyIcon,
  ChatAltIcon,
  HeartIcon,
  SparklesIcon,
  GlobeAltIcon,
  ScaleIcon,
  LightningBoltIcon,
  MailIcon,
} from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Features", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Showcase", href: "#" },
  { name: "Support", href: "#" },
];

const features_1 = [
  { name: "Push to Deploy", icon: CloudUploadIcon },
  { name: "SSL Certificates", icon: LockClosedIcon },
  { name: "Simple Queues", icon: RefreshIcon },
  { name: "Advanced Security", icon: ShieldCheckIcon },
  { name: "Powerful API", icon: CogIcon },
  { name: "Database Backups", icon: ServerIcon },
];

const features_2 = [
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

const features_3 = [
  {
    name: "Competitive rates",
    description:
      "Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Instant transfers",
    description:
      "Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.",
    icon: LightningBoltIcon,
  },
  {
    name: "Reminder emails",
    description:
      "Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.",
    icon: MailIcon,
  },
];

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const footer_navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ],
};

export default function Example() {
  return (
    <Fragment>
      <Head>
        <title>Shifter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <div className='relative overflow-hidden'>
          <Popover as='header' className='relative'>
            {({ open }) => (
              <>
                <div className='bg-purple-800 pt-6'>
                  <nav
                    className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
                    aria-label='Global'>
                    <div className='flex items-center flex-1'>
                      <div className='flex items-center justify-between w-full md:w-auto'>
                        <a href='#'>
                          <span className='sr-only'>Shifter</span>
                          <img
                            className='h-8 w-auto sm:h-10'
                            src='/shifter-mark-white.svg'
                            alt=''
                          />
                        </a>
                        <div className='-mr-2 flex items-center md:hidden'>
                          <Popover.Button className='bg-purple-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-purple-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
                            <span className='sr-only'>Open main menu</span>
                            <MenuIcon className='h-6 w-6' aria-hidden='true' />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className='hidden space-x-8 md:flex md:ml-10'>
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className='text-base font-bold text-white hover:text-gray-300'>
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className='hidden md:flex md:items-center md:space-x-6'>
                      <a
                        href='#'
                        className='text-base font-bold text-white hover:text-gray-300'>
                        Log In
                      </a>
                      <a
                        href='#'
                        className='inline-flex items-center px-4 py-2 border border-transparent text-base font-bold rounded-md text-purple-primary bg-white hover:bg-purple-50'>
                        Sign Up
                      </a>
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter='duration-150 ease-out'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='duration-100 ease-in'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'>
                  <Popover.Panel
                    focus
                    static
                    className='absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden'>
                    <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                      <div className='px-5 pt-4 flex items-center justify-between'>
                        <div>
                          <img
                            className='h-8 w-auto'
                            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                            alt=''
                          />
                        </div>
                        <div className='-mr-2'>
                          <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'>
                            <span className='sr-only'>Close menu</span>
                            <XIcon className='h-6 w-6' aria-hidden='true' />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className='pt-5 pb-6'>
                        <div className='px-2 space-y-1'>
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='block px-3 py-2 rounded-md text-base font-bold text-gray-900 hover:bg-purple-50'>
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className='mt-6 px-5'>
                          <a
                            href='#'
                            className='block text-center w-full py-3 px-4 rounded-md shadow bg-purple-600 text-white font-bold hover:bg-purple-700'>
                            Start free trial
                          </a>
                        </div>
                        <div className='mt-6 px-5'>
                          <p className='text-center text-base font-bold text-gray-500'>
                            Existing customer?{" "}
                            <a
                              href='#'
                              className='text-gray-900 hover:underline'>
                              Login
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main>
            {/* Hero */}
            <div className='pt-10 bg-purple-800 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
              <div className='mx-auto max-w-7xl lg:px-8'>
                <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
                  <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                    <div className='lg:py-24'>
                      <h1 className='mt-4 text-4xl font-bold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                        The Jamstack WordPress Hosting Platform.
                      </h1>
                      <p className='mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                        Using Shifter, create or migrate WordPress sites in
                        minutes that are scalable, secure from attacks, and 100%
                        static with no security or caching plugins required.
                      </p>
                      <div className='mt-10 sm:mt-12'>
                        <form
                          action='#'
                          className='sm:max-w-xl sm:mx-auto lg:mx-0'>
                          <div className='sm:flex'>
                            <div className='min-w-0 flex-1'>
                              <label htmlFor='email' className='sr-only'>
                                Email address
                              </label>
                              <input
                                id='email'
                                type='email'
                                placeholder='Enter your email'
                                className='block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-focus focus:ring-offset-purple-800'
                              />
                            </div>
                            <div className='mt-3 sm:mt-0 sm:ml-3'>
                              <button
                                type='submit'
                                className='block w-full py-3 px-4 rounded-md shadow bg-purple-500 text-white font-bold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-focus focus:ring-offset-purple-800'>
                                Start free trial
                              </button>
                            </div>
                          </div>
                          <p className='mt-3 text-sm text-gray-300 sm:mt-4'>
                            Start your free 7-day trial, no credit card
                            necessary. By providing your email, you agree to our{" "}
                            <a href='#' className='font-bold text-white'>
                              terms or service
                            </a>
                            .
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
                    <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                      {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                      <img
                        className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                        src='https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className='bg-white'>
              <div className='max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
                <h2 className='text-2xl font-bold text-gray-600 text-center'>
                  Some of the world&apos;s leading businesses, thinkers, and
                  creatives call Shifter home.
                </h2>
                <div className='flow-root mt-8 lg:mt-10'>
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
              </div>
            </div>

            {/* Product Walkthrough */}
            <div className='relative container mx-auto'>
              <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
                <div>
                  <h2 className='text-base font-semibold tracking-wider text-purple-600 uppercase'>
                    Shifter
                  </h2>
                  <p className='mt-2 text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl'>
                    Product Walkthrough
                  </p>
                  <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
                    Phasellus lorem quam molestie id quisque diam aenean nulla
                    in. Accumsan in quis quis nunc, ullamcorper malesuada.
                    Eleifend condimentum id viverra nulla.
                  </p>
                </div>
                <div className='py-12'>
                  <img
                    className='rounded-lg shadow ring-1 ring-black ring-opacity-5'
                    src='https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>

            {/* Features 1 */}
            <div className='relative bg-purple-800 py-4 sm:py-6 lg:py-16'>
              <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
                <h2 className='mt-2 text-3xl font-bold text-white sm:text-4xl'>
                  Core Benefit of static WordPress 1 (Maintenance Free)
                </h2>
                <p className='mt-5 max-w-prose mx-auto text-xl text-white'>
                  Deploy secure sites that scale and end downtime with Shifter,
                  the serverless hosting solution and static site generator for
                  WordPress.
                </p>
                <div className='mt-12'>
                  <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    {features_1.map((feature) => (
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
                              Ac tincidunt sapien vehicula erat auctor
                              pellentesque rhoncus. Et magna sit morbi lobortis.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Praise Quote */}
            <section className='bg-purple-800 py-24'>
              <div className='overflow-hidden'>
                <div className='relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-16'>
                  <svg
                    className='absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden'
                    width={784}
                    height={404}
                    fill='none'
                    viewBox='0 0 784 404'
                    aria-hidden='true'>
                    <defs>
                      <pattern
                        id='e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32'
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits='userSpaceOnUse'>
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className='text-gray-200'
                          fill='currentColor'
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={784}
                      height={404}
                      fill='url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)'
                    />
                  </svg>

                  <svg
                    className='hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2'
                    width={404}
                    height={784}
                    fill='none'
                    viewBox='0 0 404 784'
                    aria-hidden='true'>
                    <defs>
                      <pattern
                        id='56409614-3d62-4985-9a10-7ca758a8f4f0'
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits='userSpaceOnUse'>
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className='text-gray-200'
                          fill='currentColor'
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={784}
                      fill='url(#56409614-3d62-4985-9a10-7ca758a8f4f0)'
                    />
                  </svg>

                  <div className='relative lg:flex lg:items-center'>
                    <div className='hidden lg:block lg:flex-shrink-0'>
                      <img
                        className='h-64 w-64 rounded-full xl:h-80 xl:w-80'
                        src='https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/12/image-300x300.jpeg'
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
                        <div className='text-2xl leading-9 font-bold text-white'>
                          <p>
                            Shifter hosts the WordPress site for you. You have
                            two options: 1) run it headlessly (so you’re just
                            hitting the API, REST or GraphQL, for data) or 2)
                            run it statically (so when you have everything in
                            WordPress where you want it, you deploy it, which
                            creates a static version of your site, which they
                            also host, or you can push it elsewhere e.g.
                            Netlify).
                          </p>
                        </div>
                        <footer className='mt-8'>
                          <div className='flex'>
                            <div className='flex-shrink-0 lg:hidden'>
                              <img
                                className='h-12 w-12 rounded-full'
                                src='https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/12/image-300x300.jpeg'
                                alt=''
                              />
                            </div>
                            <div className='ml-4 lg:ml-0'>
                              <div className='text-base font-bold text-white'>
                                Chris Coyier
                              </div>
                              <div className='text-base font-bold text-white'>
                                Founder of CSS-Tricks, Co-founder of CodePen
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

            {/* Features 2 */}
            <div className='py-24 bg-white'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='lg:text-center'>
                  <h2 className='mt-2 text-3xl leading-8 font-bold tracking-tight text-purple-primary sm:text-4xl'>
                    Core Benefit of static WordPress 2 (Security built in)
                  </h2>
                  <p className='mt-4 max-w-2xl text-xl text-purple-800 lg:mx-auto'>
                    Create a new site or migrate an existing WordPress site in
                    minutes.​
                  </p>
                </div>

                <div className='mt-10'>
                  <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
                    {features_2.map((feature) => (
                      <div key={feature.name} className='relative'>
                        <dt>
                          <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white'>
                            <feature.icon
                              className='h-6 w-6'
                              aria-hidden='true'
                            />
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

            {/* Praise Quote */}
            <section className='py-12 bg-purple-50 overflow-hidden md:py-20 lg:py-24 bg-purple-800'>
              <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <svg
                  className='absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2'
                  width={404}
                  height={404}
                  fill='none'
                  viewBox='0 0 404 404'
                  role='img'
                  aria-labelledby='svg-workcation'>
                  <title id='svg-workcation'>Workcation</title>
                  <defs>
                    <pattern
                      id='ad119f34-7694-4c31-947f-5c9d249b21f3'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'>
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={404}
                    fill='url(#ad119f34-7694-4c31-947f-5c9d249b21f3)'
                  />
                </svg>

                <div className='relative'>
                  <img
                    className='mx-auto h-8'
                    src='https://tailwindui.com/img/logos/workcation-logo-white.svg'
                    alt='Workcation'
                  />
                  <blockquote className='mt-10'>
                    <div className='max-w-3xl mx-auto text-center text-2xl leading-9 font-bold text-white'>
                      <p>
                        &ldquo;That’s where more user-friendly hosting platforms
                        like Shifter are making inroads on marketing JAMstack
                        technology to a less-technical crowd. They provide
                        all-in-one “serverless” architecture solutions that
                        generate static files from WordPress sites and serve
                        them via CDN.&rdquo;
                      </p>
                    </div>
                    <footer className='mt-8'>
                      <div className='md:flex md:items-center md:justify-center'>
                        <div className='md:flex-shrink-0'>
                          <img
                            className='mx-auto h-10 w-10 rounded-full'
                            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt=''
                          />
                        </div>
                        <div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
                          <div className='text-base font-bold text-white'>
                            WP Tavern
                          </div>

                          <svg
                            className='hidden md:block mx-1 h-5 w-5 text-magenta-dark'
                            fill='currentColor'
                            viewBox='0 0 20 20'>
                            <path d='M11 0h3L9 20H6l5-20z' />
                          </svg>

                          <div className='text-base font-bold text-white'>
                            CEO, Workcation
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </section>

            {/* Features 3 */}
            <div className='bg-white'>
              <div className='max-w-7xl mx-auto pt-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
                <div className='text-center'>
                  <h2 className='mt-1 text-3xl leading-8 font-bold tracking-tight text-purple-primary sm:text-4xl'>
                    Core Benefit of static WordPress 3 (Easy installation)
                  </h2>
                  <p className='mt-4 max-w-2xl text-xl text-purple-800 lg:mx-auto'>
                    Start building for free, then add a site plan to go live.
                    Account plans unlock additional features.
                  </p>
                </div>
              </div>
            </div>
            <div className='relative bg-white pb-32 overflow-hidden'>
              <div className='relative'>
                <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
                  <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
                    <div>
                      <div>
                        <span className='h-12 w-12 rounded-md flex items-center justify-center bg-purple-600'>
                          <InboxIcon
                            className='h-6 w-6 text-white'
                            aria-hidden='true'
                          />
                        </span>
                      </div>
                      <div className='mt-6'>
                        <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                          Stay on top of customer support
                        </h2>
                        <p className='mt-4 text-lg text-gray-500'>
                          Semper curabitur ullamcorper posuere nunc sed. Ornare
                          iaculis bibendum malesuada faucibus lacinia porttitor.
                          Pulvinar laoreet sagittis viverra duis. In venenatis
                          sem arcu pretium pharetra at. Lectus viverra dui
                          tellus ornare pharetra.
                        </p>
                        <div className='mt-6'>
                          <a
                            href='#'
                            className='inline-flex px-4 py-2 border border-transparent text-base font-bold rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700'>
                            Get started
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='mt-8 border-t border-gray-200 pt-6'>
                      <blockquote>
                        <div>
                          <p className='text-base text-gray-500'>
                            &ldquo;Cras velit quis eros eget rhoncus lacus
                            ultrices sed diam. Sit orci risus aenean curabitur
                            donec aliquet. Mi venenatis in euismod ut.&rdquo;
                          </p>
                        </div>
                        <footer className='mt-3'>
                          <div className='flex items-center space-x-3'>
                            <div className='flex-shrink-0'>
                              <img
                                className='h-6 w-6 rounded-full'
                                src='https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                                alt=''
                              />
                            </div>
                            <div className='text-base font-bold text-gray-700'>
                              Marcia Hill, Digital Marketing Manager
                            </div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className='mt-12 sm:mt-16 lg:mt-0'>
                    <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                      <img
                        className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                        src='https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg'
                        alt='Inbox user interface'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-24'>
                <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
                  <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
                    <div>
                      <div>
                        <span className='h-12 w-12 rounded-md flex items-center justify-center bg-purple-600'>
                          <SparklesIcon
                            className='h-6 w-6 text-white'
                            aria-hidden='true'
                          />
                        </span>
                      </div>
                      <div className='mt-6'>
                        <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                          Better understand your customers
                        </h2>
                        <p className='mt-4 text-lg text-gray-500'>
                          Semper curabitur ullamcorper posuere nunc sed. Ornare
                          iaculis bibendum malesuada faucibus lacinia porttitor.
                          Pulvinar laoreet sagittis viverra duis. In venenatis
                          sem arcu pretium pharetra at. Lectus viverra dui
                          tellus ornare pharetra.
                        </p>
                        <div className='mt-6'>
                          <a
                            href='#'
                            className='inline-flex px-4 py-2 border border-transparent text-base font-bold rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700'>
                            Get started
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
                    <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                      <img
                        className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                        src='https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg'
                        alt='Customer profile user interface'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Praise Quote */}
            <section className='bg-purple-800 py-24'>
              <div className='overflow-hidden'>
                <div className='relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-16'>
                  <svg
                    className='absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden'
                    width={784}
                    height={404}
                    fill='none'
                    viewBox='0 0 784 404'
                    aria-hidden='true'>
                    <defs>
                      <pattern
                        id='e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32'
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits='userSpaceOnUse'>
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className='text-gray-200'
                          fill='currentColor'
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={784}
                      height={404}
                      fill='url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)'
                    />
                  </svg>

                  <svg
                    className='hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2'
                    width={404}
                    height={784}
                    fill='none'
                    viewBox='0 0 404 784'
                    aria-hidden='true'>
                    <defs>
                      <pattern
                        id='56409614-3d62-4985-9a10-7ca758a8f4f0'
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits='userSpaceOnUse'>
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className='text-gray-200'
                          fill='currentColor'
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={784}
                      fill='url(#56409614-3d62-4985-9a10-7ca758a8f4f0)'
                    />
                  </svg>

                  <div className='relative lg:flex lg:items-center'>
                    <div className='hidden lg:block lg:flex-shrink-0'>
                      <img
                        className='h-64 w-64 rounded-full xl:h-80 xl:w-80'
                        src='https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/12/image-3-300x300.jpeg'
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
                        <div className='text-2xl leading-9 font-bold text-white'>
                          <p>
                            Thank you for introducing me to the
                            #WordPress-centric static website universe of
                            @GetShifter — this is a v cool system.
                          </p>
                        </div>
                        <footer className='mt-8'>
                          <div className='flex'>
                            <div className='flex-shrink-0 lg:hidden'>
                              <img
                                className='h-12 w-12 rounded-full'
                                src='https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/12/image-3-300x300.jpeg'
                                alt=''
                              />
                            </div>
                            <div className='ml-4 lg:ml-0'>
                              <div className='text-base font-bold text-white'>
                                John Maeda
                              </div>
                              <div className='text-base font-bold text-white'>
                                Executive, Designer, Technologist
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

            {/* Features 3 */}
            <div className='bg-purple-50 overflow-hidden'>
              <div className='relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
                <svg
                  className='absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4'
                  width={404}
                  height={784}
                  fill='none'
                  viewBox='0 0 404 784'
                  aria-hidden='true'>
                  <defs>
                    <pattern
                      id='8b1b5f72-e944-4457-af67-0c6d15a99f38'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'>
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={784}
                    fill='url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)'
                  />
                </svg>

                <div className='relative lg:grid lg:grid-cols-3 lg:gap-x-8'>
                  <div className='lg:col-span-1'>
                    <h2 className='text-3xl font-bold tracking-tight text-purple-primary sm:text-4xl'>
                      Feature Cards
                    </h2>
                  </div>
                  <dl className='mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2'>
                    {features_3.map((feature) => (
                      <div key={feature.name}>
                        <dt>
                          <div className='flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white'>
                            <feature.icon
                              className='h-6 w-6'
                              aria-hidden='true'
                            />
                          </div>
                          <p className='mt-5 text-lg leading-6 font-bold text-purple-primary'>
                            {feature.name}
                          </p>
                        </dt>
                        <dd className='mt-2 text-base text-purple-800'>
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            {/* Blog */}
            <div className='relative bg-purple-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
              <div className='absolute inset-0'>
                <div className='bg-white h-1/3 sm:h-2/3' />
              </div>
              <div className='relative max-w-7xl mx-auto'>
                <div className='text-center'>
                  <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
                    From the blog
                  </h2>
                  <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsa libero labore natus atque, ducimus sed.
                  </p>
                </div>
                <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
                  {posts.map((post) => (
                    <div
                      key={post.title}
                      className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                      <div className='flex-shrink-0'>
                        <img
                          className='h-48 w-full object-cover'
                          src={post.imageUrl}
                          alt=''
                        />
                      </div>
                      <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                        <div className='flex-1'>
                          <p className='text-sm font-bold text-purple-600'>
                            <a
                              href={post.category.href}
                              className='hover:underline'>
                              {post.category.name}
                            </a>
                          </p>
                          <a href={post.href} className='block mt-2'>
                            <p className='text-xl font-semibold text-gray-900'>
                              {post.title}
                            </p>
                            <p className='mt-3 text-base text-gray-500'>
                              {post.description}
                            </p>
                          </a>
                        </div>
                        <div className='mt-6 flex items-center'>
                          <div className='flex-shrink-0'>
                            <a href={post.author.href}>
                              <span className='sr-only'>
                                {post.author.name}
                              </span>
                              <img
                                className='h-10 w-10 rounded-full'
                                src={post.author.imageUrl}
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='ml-3'>
                            <p className='text-sm font-bold text-gray-900'>
                              <a
                                href={post.author.href}
                                className='hover:underline'>
                                {post.author.name}
                              </a>
                            </p>
                            <div className='flex space-x-1 text-sm text-gray-500'>
                              <time dateTime={post.datetime}>{post.date}</time>
                              <span aria-hidden='true'>&middot;</span>
                              <span>{post.readingTime} read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className='bg-purple-800'>
              <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
                <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
                  <span className='block'>CTA</span>
                  <span className='block'>
                    Shifter is the solution for fast, maintenance-free WordPress
                    websites.
                  </span>
                </h2>
                <p className='mt-4 text-lg leading-6 text-purple-200'>
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla nec.
                </p>
                <a
                  href='#'
                  className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-purple-600 bg-white hover:bg-purple-50 sm:w-auto'>
                  Sign up for free
                </a>
              </div>
            </div>

            {/* Footer */}
            <footer className='bg-purple-800' aria-labelledby='footer-heading'>
              <h2 id='footer-heading' className='sr-only'>
                Footer
              </h2>
              <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 border-purple-700 border-t'>
                <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
                  <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
                    <div className='md:grid md:grid-cols-2 md:gap-8'>
                      <div>
                        <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                          Solutions
                        </h3>
                        <ul className='mt-4 space-y-4'>
                          {footer_navigation.solutions.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className='text-base text-gray-300 hover:text-white'>
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className='mt-12 md:mt-0'>
                        <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                          Support
                        </h3>
                        <ul className='mt-4 space-y-4'>
                          {footer_navigation.support.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className='text-base text-gray-300 hover:text-white'>
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className='md:grid md:grid-cols-2 md:gap-8'>
                      <div>
                        <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                          Company
                        </h3>
                        <ul className='mt-4 space-y-4'>
                          {footer_navigation.company.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className='text-base text-gray-300 hover:text-white'>
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className='mt-12 md:mt-0'>
                        <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                          Legal
                        </h3>
                        <ul className='mt-4 space-y-4'>
                          {footer_navigation.legal.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className='text-base text-gray-300 hover:text-white'>
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='mt-8 xl:mt-0'>
                    <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                      Subscribe to our newsletter
                    </h3>
                    <p className='mt-4 text-base text-gray-300'>
                      The latest news, articles, and resources, sent to your
                      inbox weekly.
                    </p>
                    <form className='mt-4 sm:flex sm:max-w-md'>
                      <label htmlFor='email-address' className='sr-only'>
                        Email address
                      </label>
                      <input
                        type='email'
                        name='email-address'
                        id='email-address'
                        autoComplete='email'
                        required
                        className='appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400'
                        placeholder='Enter your email'
                      />
                      <div className='mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
                        <button
                          type='submit'
                          className='w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'>
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between'>
                  <div className='flex space-x-6 md:order-2'>
                    {footer_navigation.social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='text-gray-400 hover:text-gray-300'>
                        <span className='sr-only'>{item.name}</span>
                        <item.icon className='h-6 w-6' aria-hidden='true' />
                      </a>
                    ))}
                  </div>
                  <p className='mt-8 text-base text-gray-400 md:mt-0 md:order-1'>
                    &copy; 2021 DigitalCube, Inc. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </Fragment>
  );
}
