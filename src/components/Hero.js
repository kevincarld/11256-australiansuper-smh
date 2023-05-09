import React from 'react'
import { Center, Box, Text, Button, IconButton, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Hero() {

  return (
    <Box pos='relative'>
      <Img dimension='375x675' mock='hero-sm' w='full' fit='cover' />

      <Box pos='absolute' inset={{base: '0 0 auto 0', }} textAlign='center'>
        <Box p={{base: '32% 49px 0 44px'}}>
          <PreLine {...texts.title}>
            {`Prepare for
            your future,
            today`}
          </PreLine>

          <Text {...texts.subtitle}>Taking control of your super is the first step to financial freedom in retirement</Text>
        </Box>
      </Box>

      <Box pos='absolute' inset='auto 0 0 0' pb='100px'>
        <Center>
          <IconButton bg={'transparent'} _hover={{ bg: 'transparent' }}>
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
    fontSize: {base: '37px', sm: '45px'},
    lineHeight: {base: '41px', sm: '47px'},
  },
  subtitle: {
    fontFamily: 'body',
    fontSize: {base: '13px', sm: '13px'},
    lineHeight: {base: '19px', sm: '19px'},
  }
}

