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
import { Cards } from "../components/Marketing/Blog";
import { BenefitsSplitTestimonial } from "../components/Marketing/Benefits";
import { CTASimpleCentered } from "../components/Marketing/CTA";
import { Simple } from "../components/Marketing/Global/Headers";
import { SimpleCentered as HerosSimpleCentered } from "../components/Marketing/Heros";
import { LogosSimple } from "../components/Marketing/Logos";
import { ColumnsNewsletter } from "../components/Marketing/Global/Footers";

export default function Index() {
  return (
    <Fragment>
      <Head>
        <title>Shifter</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://use.typekit.net/rrt0shs.css' />
      </Head>

      <main>
        {/* Header */}
        <Simple />

        {/* Hero */}
        <HerosSimpleCentered />

        {/* Logos */}
        <LogosSimple />

        {/* Product Walkthrough */}
        <LgScreenshot />

        {/* Core Benefit 1 */}
        <BenefitsSplitTestimonial />

        {/* Features 1 */}
        <GridIcons />

        {/* Praise Quote */}
        <LgAvatar />

        {/* Features 2 */}
        <CenteredGrid />

        {/* Praise Quote */}
        <TestimonialsSimpleCentered />

        {/* Features */}
        <Alternating />

        {/* Praise Quote */}
        <LgAvatar
          author='John Maeda'
          image='https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/12/image-3-300x300.jpeg'
          jobTitle='Executive, Designer, Technologist'
          text='Thank you for introducing me to the #WordPress-centric
          static website universe of @GetShifter — this is a v
          cool system.'
        />

        {/* Features 3 */}
        <GridList />

        {/* Blog */}
        <Cards />

        {/* CTA */}
        <CTASimpleCentered />

        {/* Footer */}
        <ColumnsNewsletter />
      </main>
    </Fragment>
  );
}
