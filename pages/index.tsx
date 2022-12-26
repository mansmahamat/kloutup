import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import FeatureSectionAnalytics from "../components/featureSectionAnalytics/FeatureSectionAnalytics"
import FeatureSection from "../components/featuresSection/FeatureSection"
import FooterLandingPage from "../components/footerLandingPage/FooterLandingPage"
import { Header } from "../components/header/Header"
import { Hero } from "../components/hero/Hero"
import Newsletter from "../components/newsletter/Newsletter"
import Pricing from "../components/pricing/Pricing"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KloutUp - Your online presence in one link</title>
        <meta
          name="description"
          content="Your online presence in one link Share your link with the world."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <FeatureSection />
        <FeatureSectionAnalytics />
        <Pricing />
        <Newsletter />
        <FooterLandingPage />
        {/* <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Home
