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
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
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
