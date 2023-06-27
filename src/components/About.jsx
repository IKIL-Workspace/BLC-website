import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../page-components/hero/TwoColumnWithVideo.js";
import Features from "../page-components/features/ThreeColWithSideImage.js";
import MainFeature from "../page-components/features/TwoColWithoutButton.js";
import MainFeature2 from "../page-components/features/TwoColWithTwoHorizontalFeatures.js";
import FeatureWithSteps from "../page-components/features/TwoColWithSteps.js";
import GetStarted from "../page-components/cta/GetStarted";
import Stats from "../page-components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Footer from "../page-components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "../images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "../images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "../images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import banner2x from "../assets/BLC-banner.png";


const About = () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <MainFeature
        subheading={<Subheading>Our Vision</Subheading>}
        heading="BLC Coin is a new cryptocurrency project, that aims to provide stability and long-term growth for potiential holders."
        description="The main focus of the project is to develop a credible solution that avoids the displacement of families from there homes. "
        imageSrc="https://blc-website.vercel.app/static/media/logo.41fcda1aa2934ac2efa8.png"
      />
      <MainFeature
        subheading={<Subheading>Our Mission</Subheading>}
        heading="Placeholder Text for Our Mission"
        // description=""
        imageSrc={banner2x}
        textOnLeft={false}
      />
      <Stats
        heading="A global vision requires a global team, that comprises persons of High Integrity, Real Conviction and Ultimate Dedication"
        description="Making the vision a reality requires the decisive positive action of all those that read it"
        stats={[{
            key: "Community Members",
            value: "1M+"
          },{
            key: "Countries", 
            value: "195"
          },{
            key: "Global Community", 
            value: "1"
        }]}
      />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            The Values that the <HighlightedText>BLC Community Members Stand By.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[{
            Icon: BriefcaseIcon,
            title: "Inclusive Thinking",
            description: "The variety of viewpoints among our coworkers is something we highly cherished. We want to spread a positive message globally, and this is only possible if our team members are enthusiastic and open minded.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },{
            Icon: BriefcaseIcon,
            title: "Being Decisive and Resourceful",
            description: "As members of the BLC team we are responsible for providing top notch service. Our corporate values encourage workers to take the initiative, and make choices that are consistent with our long term objectives.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          },{
            Icon: BriefcaseIcon,
            title: "Don't Be Afraid",
            description: "The element of fear and being afraid is the more common practice seen in everyday life. We place a high importance on decisiveness in our workplace, because mostly bold individuals are capable of changing the world.",
            iconContainerCss: tw`bg-blue-300 text-blue-800`
        },{
          Icon: BriefcaseIcon,
          title: "Keep It Humble",
          description: "Among the BLC community team membership, we don't feed egos instead, we function as a team not as individuals. We use our creative energy on things that truly count like our goals and aspirations.",
          iconContainerCss: tw`bg-orange-300 text-orange-800`
      }]}
      />
      <GetStarted/>
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
}

export default About;