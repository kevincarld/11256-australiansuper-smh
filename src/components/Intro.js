import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Intro() {

  return (
    <Box pos='relative' pb={{base: '60px', d:'100px'}} mt={{ d: '-150px', wide: '-265px'}}>
      <Box maxW='782px' mx='auto' bg='white' borderTopLeftRadius='15px' borderTopRightRadius='15px' p={{base: '52px 30px 33px', d: '60px 85px 82px'}}>
        <PreLine textStyle='body' textAlign='center'>
          {`The pace of modern living can make even thinking about the future feel overwhelming, let alone doing something constructive and tangible about it. But just a few tweaks now can make a huge difference to your financial wellbeing in the years to come.

          With the super guarantee soon increasing to 11 per cent, now’s a good opportunity to reassess exactly where that money is going to help your hard-earned savings achieve their full potential.

          With the support of AustralianSuper, there are ways to improve financial awareness and confidence, simplify what can be a stressful subject and get on with looking forward to what life’s next chapter brings.

          Here’s how…`}
        </PreLine>
      </Box>

      <Img display={{base: "block", md: 'none'}} dimension='375x562' w='full' mock='intro-1' src='./images/intro-1-sm.jpg' />
      <Img display={{base: "none", md: 'block'}} dimension='1505x879' w='full' maxW='1505px' mx='auto' mock='intro-1' src='./images/intro-1.png' />

      <Box pos='relative' p={{base: '34px 30px 68px', d: '40px 130px 67px 100px'}} maxW='1280px' mx='auto' mt={{md: '-20px', d: '-144px'}} bg='white' borderTopLeftRadius={{md: '15px'}} borderTopRightRadius={{md:'15px'}} borderBottomLeftRadius='15px' borderBottomRightRadius='15px' >
        <Text as='h2' mb={{base: '20px'}} textStyle='heading' color='purple'>Where to start</Text>

        <Grid templateColumns={{d: 'repeat(3, 1fr)'}} gap={{d: '40px'}}>
          <PreLine textStyle='body' >
            {`AustralianSuper’s Lauren Davis suggests taking a simple step first, then building on that.

            “This could be nominating a beneficiary if you haven’t done this yet,” she explains. “It could be logging into your account and seeing what insurances you have, or what you are invested in. It could be attending an education session to better understand how super works and how you can make the most of it.”`}
          </PreLine>

          <PreLine textStyle='body' >
            {`No matter what life stage you’re at, there’s no better time to start thinking about retirement planning than right now. “Engagement and education are the key to feeling empowered to making the most of your super,”Davis adds.

            For easy-to-understand help and advice1, it’s worth checking out the tools and resources available on the AustralianSuper website, with plenty of articles, videos and webinars.`}
          </PreLine>

          <PreLine textStyle='body' >
            {`More of a podcast person? Make the most of your commute or daily walk by listening to AustralianSuper’s podcast, The Moments That Count. With a mix of both educational and anecdotal content, where you can hear from members about how they prepared for retirement, you’ll get plenty of valuable advice.`}
          </PreLine>
        </Grid>
      </Box>
    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

