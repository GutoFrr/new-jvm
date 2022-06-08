/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

import Header from '../components/header'
import Hero from '../components/hero'
import Browser from '../components/browser'
import Features from '../components/features'
import FeaturesDetails from '../components/features-details'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>JVM</title>
      </Head>

      <Header />
      <Hero />
      <Browser />
      <Features />
      <FeaturesDetails />
    </Container>
  )
}

export default Home
