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
import Mover from './util/Mover'
import { Parallax } from 'react-scroll-parallax'

export default function Banner({alt}) {

  return (
    <>
      <Figure
        overflow='hidden'
        h={{ base: '650px'}}
        bgImage={{base: './images/banner-sm.jpg'}}
        bgSize='cover'
        bgAttachment='fixed'
      >
      </Figure>

      {/* <Img display={{base: 'block', lg: 'none'}} dimension='375x655' w='full' mock='banner-1' />
      <Img display={{base: 'none', lg: 'block'}} dimension='1920x915' w='full' mock='banner-1' /> */}
    </>
  )
}
