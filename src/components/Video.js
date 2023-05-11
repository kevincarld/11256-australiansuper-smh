import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import BrightCoveVideo from './util/BrightCoveVideo'
export default function Video() {

  return (
    <Box  mb={{base: '56px', d:'127px'}}>
      <Container>
        <BrightCoveVideo dataPlayer={'WkAEp4m5G'} dataVideoId={'6327180810112'} script={'https://players.brightcove.net/6165065566001/WkAEp4m5G_default/index.min.js'} />
      </Container>

      <Box maxW='1004px' mx='auto' bg='white' borderBottomLeftRadius='15px' borderBottomRightRadius='15px' p={{base: '27px 25px 49px 16px', lg: '30px 98px 41px'}} textAlign='center'>
        <Text whiteSpace={{base: 'pre-line', lg: 'normal'}} fontSize={{base: '21px', lg: '28px'}} lineHeight={{base: '30px', lg: '41px'}}>
          {`For more super smart tips you
          can consider starting with now,
          `}
          visit <NineLink href='https://www.australiansuper.com/smart?utm_medium=web&utm_source=article&utm_campaign=super%20tips%7Cjoin%7Cfy23%7Cq4%7Cmay'>australiansuper.com/smart</NineLink>
        </Text>

        <Button as={Link} href='https://www.australiansuper.com/smart?utm_medium=web&utm_source=article&utm_campaign=super%20tips%7Cjoin%7Cfy23%7Cq4%7Cmay'>LEARN MORE</Button>
      </Box>
    </Box>
  )
}