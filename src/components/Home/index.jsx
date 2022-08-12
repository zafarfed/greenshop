import React from 'react'
import Gallery from '../gallery/index.jsx'
import {Wrapper, Container, Card, Btn, MainPic, } from './style.js'

const Home = () => {
  return (
    <Wrapper>

      <Container>
        <Card>
          <Card.T>Welcome to GreenShop</Card.T>
          <Card.Mt>Let’s Make a Better </Card.Mt>
          <Card.Mt g>Planet</Card.Mt>

          <Card.MiniText>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</Card.MiniText>

        <Btn>shop now</Btn>
          
        </Card>
        <Card>
          <MainPic></MainPic>
        </Card>
      </Container>

      <Gallery/>

    </Wrapper>
  )
}

export default Home