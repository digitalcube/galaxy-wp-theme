import Head from "next/head";
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

        {/* CTA */}
        <CTASimpleCentered />

        {/* Core Benefit 1 */}
        <BenefitsSplitIllustration
          image='/benefit-start-wordpress.png'
          headline='WordPress - Blazing Fast'
          alternativeHeadline='WordPress at the speed of static'
          description='Shifter automatically handles your WordPress install and creates scalable sites with no downtime.'
        />

        {/* Praise Quote */}
        <LgAvatar
          image='https://github.com/theburningmonk.png'
          author='Yan Cui'
          jobTitle='Independent Consultant, AWS Serverless Hero, Dev Advocate'
          text='As an engineer, I also think it’s a fantastic use of technology. As a blogger, it gives me the performance and scalability I’m after, at a price point that is much cheaper compared to other hosting options.'
        />

        {/* Core Benefit 2 */}
        <BenefitsSplitIllustration
          align='right'
          alternativeHeadline='Security Built In'
          image='/benefit-security-built-in.png'
          headline='Virtually unhackable WordPress sites'
          description='Shifter automatically handles your WordPress install and creates scalable sites with no downtime.'
        />

         {/* Praise Quote */}
         <LgAvatar
          author='Matt Biilmann'
          image='https://github.com/biilmann.png'
          jobTitle='CEO and Co-Founder of Netlify'
          text='Shifter built a docker based system, deploying WordPress to Netlify – awesome!'
        />


        {/* Core Benefit 3 */}
        <BenefitsSplitIllustration
          align='left'
          image='/benefit-start-wordpress.png'
          alternativeHeadline='Maintenance Free'
          headline='Never worry about updates again'
          description='Shifter automatically handles your WordPress install and creates sites that are scalable with no downtime.'
        />

        {/* Praise Quote */}
        <LgAvatar
          author='John Maeda'
          image='https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/12/image-3-300x300.jpeg'
          jobTitle='Executive, Designer, Technologist'
          text='Thank you for introducing me to the #WordPress-centric
          static website universe of @GetShifter — this is a v
          cool system.'
        />

        {/* CTA */}
        <CTASimpleCentered />

        {/* Latest Articles */}
        <BlogLatest />

        {/* Footer */}
        <ColumnsNewsletter />
      </main>
    </Fragment>
  );
}
