import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, AspectRatio } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { motion } from 'framer-motion'
import { animation_zoom } from 'utils/motion'

export default function Banner() {

  return (
    <Figure  overflow='hidden'>
      <Img display={{base: 'block', lg: 'none'}} dimension='375x655' w='full' mock='banner-1' />
      <Img display={{base: 'none', lg: 'block'}} dimension='1920x915' w='full' mock='banner-1' />
    </Figure>
  )
}
