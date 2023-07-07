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
import Footer from "./Footer.jsx";
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
        heading="The BLC is a new cryptocurrency project that has the backings of verified Gold and Bauxite in ground assets (gold and bauxite that has not yet been taken out of the ground)."
        description="The value of the assets goes well into the twelve to fifteen digit numbers. Our aim is to provide stability and long-term growth for potential holders. This coin is registered as a securities product and is usable for the purposes of trade."
        imageSrc="https://blc-website.vercel.app/static/media/logo.41fcda1aa2934ac2efa8.png"
      />
      <MainFeature
        subheading={<Subheading>Our Mission</Subheading>}
        heading="We will strive to make BLC as one of the prominent ways that the cryptocurrencies and blockchain system will be used in different areas of business and economy as well as social welfare and other major areas of technology."
        description=""
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
        description=""
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[{
            Icon: BriefcaseIcon,
            title: "Innovation",
            description: "We are dedicated to continually pushing the boundaries of technological innovation in the cryptocurrency industry.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },{
            Icon: BriefcaseIcon,
            title: "Client Focus",
            description: "Our clients are at the center of everything we do, and we are committed to providing them with investment opportunities and exceptional service.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          },{
            Icon: BriefcaseIcon,
            title: "Integrity",
            description: "We uphold the highest standards of ethics, transparency, and honesty in our interactions with our clients, partners, and stakeholders.",
            iconContainerCss: tw`bg-blue-300 text-blue-800`
        },{
          Icon: BriefcaseIcon,
          title: "Security",
          description: "We prioritize the security of our client's investments and ensure the highest levels of protection for their assets.",
          iconContainerCss: tw`bg-orange-300 text-orange-800`
      },{
          Icon: BriefcaseIcon,
          title: "Social Responsibility",
          description: "We are committed to making a positive impact on society and promoting sustainability and diversity through our organization for the cryptocurrency industry.",
          iconContainerCss: tw`bg-purple-300 text-purple-800`
      }]}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}

export default About;