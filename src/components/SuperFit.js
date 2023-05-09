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
    <Box bg='white' pt={{base: '53px'}} pb={{base: '38px'}}>
      <Img dimension='375x333' mock='superfit-1' />

      <Box mt={{base:"-15px"}} p={{base: '38px 29px 53px'}} border={{base:"5px solid #260046"}} borderRadius={{base:"15px"}}>
        <Text as='h2' textStyle='heading' mb={{base: '20px'}}>Get super fit</Text>
        <PreLine textStyle='body'>
          {`While just the thought of “super” can be daunting, it pays to be proactive and own your financial situation.

          Being aware of fees, investment performance and changes to insurance will allow you to make critical decisions about your account in a timely manner.

          “It could also mean when you have the capacity to, you could start making additional contributions to super, which could have a significant impact on your retirement outcome2,” Davis points out.

          Meanwhile, downloading the AustralianSuper app will give you visibility over your account balance, investment options and insurance.

          “You can also use the app to switch investments, if appropriate, add additional funds through contributions2, or adjust your insurances. This can be done anytime, anywhere, so this really stops the excuse of not having time to take control of your super,” says Davis. `}
        </PreLine>
      </Box>
    </Box>
  )
}