import Head from "next/head";
import { CheckIcon } from "@heroicons/react/outline";
import { Button } from "../components/UI";
import { Fragment } from "react";
import {
  Alternating,
  LgScreenshot,
  GridIcons,
  CenteredGrid,
  GridList,
} from "../components/Marketing/Features";
import {
  LgAvatar,
  SimpleCentered as TestimonialsSimpleCentered,
} from "../components/Marketing/Testimonials";
import { BlogLatest } from "../components/Marketing/Blog";
import { BenefitsSplitIllustration } from "../components/Marketing/Benefits";
import { CTASimpleCentered } from "../components/Marketing/CTA";
import { Simple as HeadersSimple } from "../components/Marketing/Global/Headers";
import { SimpleCentered as HerosSimpleCentered } from "../components/Marketing/Heros";
import { LogosSimple } from "../components/Marketing/Logos";
import { ColumnsNewsletter } from "../components/Marketing/Global/Footers";

const features = [
  {
    name: "1 Site",
  },
  {
    name: "500 MB Storage",
  },
  {
    name: "1GB Bandwidth",
  },
  {
    name: "HTTPS Included",
  },
  {
    name: "Shifter Domain",
  },
];

export default function Pricing() {
  return (
    <Fragment>
      <Head>
        <title>Shifter</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://use.typekit.net/rrt0shs.css' />
      </Head>
      <main>
        <HeadersSimple />
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between'>
          <div className='max-w-xl'>
            <h2 className='text-size-7 text-purple-800 font-bold sm:text-size-7 lg:text-size-8'>
              Get started for free. Choose a plan later.
            </h2>
            <p className='mt-5 text-size-5 text-gray-800'>
              Try Shifter for free for 7 days - or forever - when you enter
              payment information. You can always change your plan.
            </p>
          </div>
          <div className='mt-10 w-full lg:ml-16'>
            <dl className='space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 mb-10'>
              {features.map((feature) => (
                <div key={feature.name} className='relative'>
                  <dt>
                    <CheckIcon
                      className='absolute h-6 w-6 text-magenta-dark'
                      aria-hidden='true'
                    />
                    <p className='ml-8 text-size-5 font-medium text-gray-900'>
                      {feature.name}
                    </p>
                  </dt>
                  <dd className='mt-2 ml-9 text-base text-gray-500'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
            <Button label='Get started for free' />
          </div>
        </div>
      </main>
    </Fragment>
  );
}
