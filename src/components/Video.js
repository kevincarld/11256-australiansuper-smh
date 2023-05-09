import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'

export default function Video() {

  return (
    <Box>
      <Img dimension='1280x720' mock='video here' />

      <Box bg='white' borderBottomLeftRadius='15px' borderBottomRightRadius='15px' p={{base: '27px 25px 49px 16px'}} textAlign='center'>
        <PreLine textStyle='body'>
          {`For more super smart tips you
          can consider starting with now,
          `}
          visit <NineLink href='https://www.australiansuper.com/smart?utm_medium=web&utm_source=article&utm_campaign=super%20tips%7Cjoin%7Cfy23%7Cq4%7Cmay'>australiansuper.com/smart</NineLink>
        </PreLine>

        <Button as={Link} href='https://www.australiansuper.com/smart?utm_medium=web&utm_source=article&utm_campaign=super%20tips%7Cjoin%7Cfy23%7Cq4%7Cmay'>LEARN MORE</Button>
      </Box>
    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

