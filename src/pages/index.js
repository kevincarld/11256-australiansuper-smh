
import Layout from "components/util/Layout"
// chakra
import { Heading, Button } from "@chakra-ui/react"
//
import Container from "components/util/Container"
import Hero from "components/Hero"
import Intro from "components/Intro"
import SuperFit from "components/SuperFit"
import Banner from "components/Banner"
import WhatNext from "components/WhatNext"
import Video from "components/Video"
import Footer from "components/Footer"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Intro />
      <SuperFit />
      <Banner />
      <WhatNext />
      <Video />
      <Footer />
    </Layout>
  )
}
