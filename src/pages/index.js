
import Layout from "components/util/Layout"
// chakra
import { Box } from "@chakra-ui/react"
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
      <Box bg='orange'>
        <Hero />
        <Intro />
      </Box>

      <SuperFit />

      <Banner />

      <Box bg='purple'>
        <WhatNext />
        <Video />
        <Footer />
      </Box>
    </Layout>
  )
}
