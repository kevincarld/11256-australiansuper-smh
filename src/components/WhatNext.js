import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, List,  ListIcon, ListItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import Mover from './util/Mover'

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
    <Box pt={{base: '34px', lg: '66px'}}>
      <Mover y={[10, 0]}>
        <Box maxW='1004px' mx='auto' bg='white' borderTopLeftRadius='15px' borderTopRightRadius='15px' p={{base: '23px 30px 26px', lg: '58px 129px 69px 113px'}}>
          <Text as='h2' textStyle='heading' mb={{base: '20px'}}>What next?</Text>

          <Grid templateColumns={{lg: 'repeat(2, 1fr)'}} gap={{base: '24px', lg: '42px'}}>
            <GridItem>
              <Text textStyle={'body'} fontWeight='bold' mr='-15px'>Feeling financially fired up? Think about the 4Cs when deciding next steps: </Text>

              <List spacing={4} mb={{base: '30px'}}>
                <ListItem>
                  <Flex gap={{base: '15px'}}>
                    <ListIcon as={Check} />
                    <Text as='span' textStyle='body'><strong>Conduct</strong> a review to ensure you have the best account for your situation</Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex gap={{base: '15px'}}>
                    <ListIcon as={Check} />
                    <Text as='span' textStyle='body'><strong>Consider</strong> consolidating if you have more than one account</Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex gap={{base: '15px'}}>
                    <ListIcon as={Check} />
                    <Text as='span' textStyle='body'><strong>Contribute</strong> extra if you have the capacity</Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex gap={{base: '15px'}}>
                    <ListIcon as={Check} />
                    <Text as='span' textStyle='body'><strong>Compare</strong> funds with a long-term mindset</Text>
                  </Flex>
                </ListItem>
              </List>

              <PreLine textStyle='body'>
                {`Everyone has their own ideas about how they want their later years to play out. For some, travel is a priority, while others may be looking forward to spending more time on hobbies. Davis recommends compiling a budget to compare spending habits now and how that might look in retirement, then working backwards from there.`}
              </PreLine>
            </GridItem>

            <GridItem>
              <PreLine textStyle='body'>
              {`Moneysmart’s budget planner is a good place to start.

                The long-term mindset is crucial, Davis emphasises, as super is a long-term asset. “Your super may need to last you 20-plus years in retirement. So, no matter what stage you are at… you need to make decisions accordingly.”

                When choosing the right fund, it’s important to look for competitive fees, strong long-term performance and factor in the right insurance for your individual needs. Useful comparison tools can be found on the `}<NineLink href='https://www.ato.gov.au/'>ATO website</NineLink>{`, or at `}<NineLink href='https://www.australiansuper.com/compare-us?utm_medium=web&utm_source=article&utm_campaign=super%20tips%7Cjoin%7Cfy23%7Cq4%7Cmay'>australiansuper.com/compare</NineLink>{`.

                “There is an abundance of help and guidance available to you through your super fund/AustralianSuper,” adds Davis. “So, make the most of this to ensure what is important to you is factored into the decisions you make.”`}
              </PreLine>
            </GridItem>
          </Grid>

        </Box>
      </Mover>
    </Box>
  )
}
