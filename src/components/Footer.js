import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex, Center, OrderedList, ListItem,  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useDisclosure, } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import FeatureFooter from './util/FeatureFooter'
export default function Footer() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box  >
      {/* accordion */}
      <Box pos={'relative'}
        sx={{
          h: '570px',
          '@media screen and (min-width: 375px)': {
            h: '500px',
          },
          '@media screen and (min-width: 400px)': {
            h: '420px',
          },
          '@media screen and (min-width: 520px)': {
            h: '350px',
          },
          '@media screen and (min-width: 768px)': {
            h: '300px',
          },
          '@media screen and (min-width: 1024px)': {
            h: '250px',
          },
          '@media screen and (min-width: 1280px)': {
            h: '200px',
          },
        }}
      >

        <Box bg='white' pos='absolute' inset='auto 0 0 0'>
          <Container>
            <Accordion allowToggle>
              <AccordionItem borderTop='0' borderBottomColor={'#B8B8B8'} >
                <AccordionButton onClick={onToggle} py={{base:"25px"}} px={{base: '30px', nopx:0}} _hover={{ bg: 'white'}}>
                  <Text as="span" flex='1' textAlign='left' {...texts.panelTitle}>
                    Important information to consider
                  </Text>
                    {isOpen ? (
                      <svg width="12" height="1" viewBox="0 0 12 1">
                        <g id="Group_6296" data-name="Group 6296" transform="translate(-1523.5 -6950)">
                          <line id="Line_73" data-name="Line 73" x2="12" transform="translate(1523.5 6950.5)" fill="none" stroke="#000" stroke-width="1"/>
                          <line id="Line_74" data-name="Line 74" transform="translate(1529.5 6950.5)" fill="none" stroke="#000" stroke-width="1"/>
                        </g>
                      </svg>
                    ) : (
                      <svg height="12" viewBox="0 0 12 12">
                        <g id="Group_6296" data-name="Group 6296" transform="translate(-1523.5 -6944.5)">
                          <line id="Line_73" data-name="Line 73" x2="12" transform="translate(1523.5 6950.5)" fill="none" stroke="#000" stroke-width="1"/>
                          <line id="Line_74" data-name="Line 74" y2="12" transform="translate(1529.5 6944.5)" fill="none" stroke="#000" stroke-width="1"/>
                        </g>
                      </svg>
                    )}
                </AccordionButton>

                <AccordionPanel pb={4} px={{base: '30px', nopx:0}} {...texts.panelContent}>
                  <OrderedList spacing={3}>
                    <ListItem>Personal financial product advice is provided under the Australian Financial Services Licence held by a third party and not by AustralianSuper Pty Ltd. Fees may apply.</ListItem>
                    <ListItem>Before adding to your super, consider your financial circumstances, contribution caps that may apply and tax issues. We recommend you consider seeking financial advice.</ListItem>
                    <ListItem>Before deciding to combine your super, consider any fees or charges that may apply, and the effect a transfer may have on benefits in your other fund such as insurance cover. We recommend you consider seeking financial advice.</ListItem>
                  </OrderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Box as={motion.div}
              animate={{
                opacity: isOpen ? 1 : 0,
                height: isOpen ? 'auto' : 0,
                transition: {
                  duration: .3,
                  type: 'tween',
                }
              }}
              overflow={'hidden'}
            >
              <Box p={{base: '15px 30px', nopx: '15px 0'}}>
                <Text {...texts.panelContent}>The information shown in this article is general information only. We haven’t taken into account your needs or personal objectives when providing the information. You should assess your own financial situation and needs, and read the relevant Product Disclosure Statement before making a decision about products. A Target Market Determination (TMD) is a document that outlines the target market a product has been designed for. Find the TMDs at australiansuper.com/tmd. AustralianSuper Pty Ltd ABN 94 006 457 987, AFSL 233788, Trustee of AustralianSuper ABN 65 714 394 898 Superannuation Fund Number (SFN): 2683 519 45, Superannuation Product Identification Number (SPIN): STA0100AU.</Text>
              </Box>
            </Box>
          </Container>
        </Box>


      </Box>

      {/* Logo */}
      <Box pos='relative' pb={{base: '103px'}} bg='white'>
        <FeatureFooter href='https://www.australiansuper.com/smart' />
      </Box>
    </Box>
  )
}

// font styles
const texts = {
  panelTitle: {
    fontSize: {base: '13px', sm: '16px', d:'18px'},
    lineHeight: {base: '20px', sm: '24px', d:'26px'},
  },
  panelContent: {
    fontSize: {base: '11px'},
    lineHeight: {base: '14px'},
  }
}

