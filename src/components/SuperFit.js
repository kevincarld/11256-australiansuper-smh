import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function SuperFit() {

  return (
    <Box pos='relative' bg='white' mt={{base: '53px', d: '150px'}} mb={{base: '38px', d: '80px'}}>
      <Img pos='relative' zIndex='2' dimension='375x333' display={{base: 'block', d: 'none'}} mock='superfit-1' w='full' src='./images/superfit-1-sm.jpg' />

      <Figure as={motion.figure} display={{base: 'none', d: 'block'}} pos='absolute' inset={{d: '158px auto 0 45%', d: '-70px auto 0 45%'}} zIndex='3'
        initial={{ opacity: 0, x: -50 }}
        whileInView= {{ opacity: 1, x: 0, transition: { duration: 1.3, type: 'tween' } }}
        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      >
        <Img dimension='1071x951' mock='superfit-1' src='./images/superfit-1.png' />
      </Figure>

      <Box pos='relative' maxW='1383px' mx='auto' mt={{base:"-15px"}} p={{base: '38px 29px 53px', d: '78px 0 78px 145px'}} border={{base:"5px solid #260046"}} borderRadius={{base:"15px"}}>

        <Box w={{d: '368px'}} >

          <Text as='h2' textStyle='heading' mb={{base: '20px', d: '27px'}}>Get super fit</Text>
          <PreLine textStyle='body'>
            {`While just the thought of “super” can be daunting, it pays to be proactive and own your financial situation.

            Being aware of fees, investment performance and changes to insurance will allow you to make critical decisions about your account in a timely manner.

            “It could also mean when you have the capacity to, you could start making additional contributions to super, which could have a significant impact on your retirement outcome2,” Davis points out.

            Meanwhile, downloading the `}<NineLink href='https://www.australiansuper.com/campaigns/mobile?utm_medium=web&utm_source=article&utm_campaign=super%20tips%7Cjoin%7Cfy23%7Cq4%7Cmay'>AustralianSuper app</NineLink> {`will give you visibility over your account balance, investment options and insurance.

            “You can also use the app to switch investments, if appropriate, add additional funds through contributions2, or adjust your insurances. This can be done anytime, anywhere, so this really stops the excuse of not having time to take control of your super,” says Davis. `}
          </PreLine>
        </Box>
      </Box>
    </Box>
  )
}