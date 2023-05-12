
import Layout from "components/util/Layout"
// chakra
import { Box, useDisclosure } from "@chakra-ui/react"
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
  const disclosureState = useDisclosure();
  const scrollToDisc = (e) => {
    e.preventDefault()
    function findPosition(obj) {
      var currenttop = 0;
      if (obj.offsetParent) {
        do {
          currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
      }
    }
    const element = document.getElementById('disclosure');
    const accord = document.querySelector('#disclosure button');
    if (element) {
      // disclosureState.onOpen()
      if(!disclosureState.isOpen){
        accord.click()
      }
      setTimeout(
        () => {
          window.scrollTo({
            top: findPosition(document.getElementById("disclosure")),
            behavior: 'smooth'
          } )
        },200
      )
    }
  };
  return (
    <Layout>
      <Box bg='orange' mt='54px'>
        <Hero />
        <Intro scrollToDisc={scrollToDisc}/>
      </Box>

      <SuperFit scrollToDisc={scrollToDisc} />

      <Banner />

      <Box bg='purple'>
        <WhatNext scrollToDisc={scrollToDisc} />
        <Video />
        <Footer disclosureState={disclosureState}/>
      </Box>
    </Layout>
  )
}
