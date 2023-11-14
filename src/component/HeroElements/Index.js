import React from 'react'
import { HeroWrapper, HeroPWrapper, HeroTitle,  HeroContent, HVideo } from './HeroElements'
import HeroVideo from '../../video/video.mp4'
import '../HeroElements/Hero.css'
import Button from '../Button'
const HeroElements = () => {
  return (
    <>
      <HeroWrapper>
        <HVideo>
            <video src={HeroVideo} autoPlay loop muted/>
        </HVideo>
        <HeroPWrapper>
            <HeroTitle>Lorem Ipsum</HeroTitle>
            <HeroContent>Lorem ipsum dolor sit amet,        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</HeroContent>
            <Button variant="primary"/>
        </HeroPWrapper>
      </HeroWrapper>
    </>
  )
}

export default HeroElements
