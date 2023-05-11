import React from 'react'
import { Center, Box, Text, Button, IconButton, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import FeatureHeader from './util/FeatureHeader'
import { animation_shaker } from 'utils/motion'

export default function Hero() {
  const handleClickScroll = (e) => {
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
    const element = document.getElementById('intro');
    if (element) {
      window.scrollTo({
        top: findPosition(document.getElementById("intro")),
        behavior: 'smooth'
      } )
    }
  };
  return (
    <Box pos='relative'>
      <FeatureHeader href='https://www.australiansuper.com/smart?utm_medium=web&utm_source=article&utm_campaign=super%20tips%7Cjoin%7Cfy23%7Cq4%7Cmay'/>

      <Img display={{base: 'block', lg: 'none'}} dimension='375x675' mock='hero-sm' src='./images/hero-sm.jpg' w='full' fit='cover' />
      <Img display={{base: 'none', lg: 'block'}} dimension='375x675' mock='hero-sm' src='./images/hero.jpg' w='full' fit='cover' />

      <Box pos='absolute' inset={{base: '0 0 auto 0', }} textAlign='center'>
        <Box as={motion.div} initial={{opacity: 0, y: 50}} animate={{ opacity:1, y:0, transition: {duration: 1.2, type: 'tween'} }} p={{base: '25% 49px 0 44px', sm: '32% 0 0 0', lg: '80px 49px 0 44px', d: '90px 0 0', wide: '110px 0 0', hd: '160px 0 0'}}>
          <PreLine display={{base: 'block', md: 'none'}} {...texts.title}>
            {`Prepare for
            your future,
            today`}
          </PreLine>

          <PreLine display={{base: 'none', md: 'block'}} {...texts.title}>
            {`Prepare for your
            future, today`}
          </PreLine>

          <Text whiteSpace={{base: 'normal', sm: 'pre-line', md: 'normal'}} {...texts.subtitle}>
            {`Taking control of your super is the first step
            to financial freedom in retirement`}
          </Text>
        </Box>
      </Box>

      <Box pos='absolute' inset='auto 0 0 0' pb={{base: '100px', d:'250px', wide: '400px'}}>
        <Center>
          <IconButton as={motion.button} bg={'transparent'} _hover={{ bg: 'transparent' }} onClick={handleClickScroll} variants={animation_shaker} whileInView='shake'>
            <Box as='svg' width={{base: "32px", d: '42px'}} height={{base: '32px', d: "42px"}} viewBox="0 0 42 42">
              <g id="Group_6305" data-name="Group 6305" transform="translate(-939 -784)">
                <circle id="Ellipse_81" data-name="Ellipse 81" cx="21" cy="21" r="21" transform="translate(939 784)" fill="#fff"/>
                <path id="Path_11823" data-name="Path 11823" d="M-19149.98-156.907l8.857,8.858,8.857-8.858" transform="translate(20100.91 959.624)" fill="none" stroke="#ea4403" stroke-linecap="round" stroke-width="3"/>
              </g>
            </Box>
          </IconButton>
        </Center>

      </Box>

    </Box>
  )
}

// font styles
const texts = {
  title: {
    color: 'purple',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '37px', sm: '45px', md: '65px', d: '102px'},
    lineHeight: {base: '41px', sm: '47px', md: '69px', d: '110px'},
  },
  subtitle: {
    fontFamily: 'body',
    fontSize: {base: '13px', sm: '13px', d: '23px'},
    lineHeight: {base: '19px', sm: '19px', d: '33px'},
  }
}

