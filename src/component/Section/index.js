import React from 'react'
import { Wrapper, ContentWrapper, ContentTitle, FlexContainer, ImageWrapper, Content, Container, ImageBg } from '../Section/SectionElements'
import Image from '../../images/image.png'
const Section = () => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
            <FlexContainer>
                <ImageWrapper>
                    <ImageBg src={Image}/>
                </ImageWrapper>
                <Container>
                    <ContentTitle>Lorem Ipsum</ContentTitle>
                    <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at felis fringilla nibh accumsan semper vel non ante. Donec ornare sapien dapibus, semper tellus sit amet, pellentesque nulla. Mauris fermentum risus vitae posuere tincidunt. Suspendisse aliquam sagittis tellus, sed posuere nisl ullamcorper et. Fusce sed justo arcu. Sed vel nisi quis nisl gravida pretium. Duis vehicula quam id urna vulputate laoreet. Pellentesque commodo ipsum eget aliquam placerat. Maecenas vehicula sapien odio, quis fermentum mauris ornare vitae. Pellentesque in porttitor nisi.</Content>
                </Container>
                
            </FlexContainer>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export default Section
