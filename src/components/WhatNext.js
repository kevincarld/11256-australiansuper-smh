import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, List,  ListIcon, ListItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
const Check = () => (
  <Box flexBasis={{base: '20px'}}>
    <Box as='svg' width={{base: '20px', d:"24px"}} height={{base: '20px', d:"24px"}} viewBox="0 0 24 24" pos='relative' top={{base: '5px'}}>
      <g id="Group_6271" data-name="Group 6271" transform="translate(-795 -4680)">
        <circle id="Ellipse_80" data-name="Ellipse 80" cx="12" cy="12" r="12" transform="translate(795 4680)" fill="#260046"/>
        <path id="Path_11822" data-name="Path 11822" d="M-19075.508,4690l3.832,4.021,7.105-7.105" transform="translate(19877.008 1.584)" fill="none" stroke="#fff" stroke-width="2"/>
      </g>
    </Box>
  </Box>

)
export default function WhatNext() {

  return (
    <Box>
      <Box bg='white' borderBottomLeftRadius='15px' borderBottomRightRadius='15px' p={{base: '23px 30px 26px'}}>
        <Text as='h2' textStyle='heading' mb={{base: '20px'}}>What next?</Text>
        <Text textStyle={'body'} fontWeight='bold' mr='-15px'>Feeling financially fired up? Think about the 4Cs when deciding next steps: </Text>

        <List spacing={4} mb={{base: '30px'}}>
          <ListItem>
            <Flex gap={{base: '15px'}}>
              <ListIcon as={Check} />
              <span><strong>Conduct</strong> a review to ensure you have the best account for your situation</span>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex gap={{base: '15px'}}>
              <ListIcon as={Check} />
              <span><strong>Consider</strong> consolidating if you have more than one account</span>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex gap={{base: '15px'}}>
              <ListIcon as={Check} />
              <span><strong>Contribute</strong> extra if you have the capacity</span>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex gap={{base: '15px'}}>
              <ListIcon as={Check} />
              <span><strong>Compare</strong> funds with a long-term mindset</span>
            </Flex>
          </ListItem>
        </List>

        <PreLine textStyle='body'>
          {`Everyone has their own ideas about how they want their later years to play out. For some, travel is a priority, while others may be looking forward to spending more time on hobbies. Davis recommends compiling a budget to compare spending habits now and how that might look in retirement, then working backwards from there.

          Moneysmart’s budget planner is a good place to start.

          The long-term mindset is crucial, Davis emphasises, as super is a long-term asset. “Your super may need to last you 20-plus years in retirement. So, no matter what stage you are at… you need to make decisions accordingly.”

          When choosing the right fund, it’s important to look for competitive fees, strong long-term performance and factor in the right insurance for your individual needs. Useful comparison tools can be found on the ATO website, or at australiansuper.com/compare.

          “There is an abundance of help and guidance available to you through your super fund/AustralianSuper,” adds Davis. “So, make the most of this to ensure what is important to you is factored into the decisions you make.”`}
        </PreLine>
      </Box>
    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

