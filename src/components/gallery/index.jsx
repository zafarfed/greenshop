import React from 'react'
import { LeftBlock, H4,Block, A, Btn, Body, RightBlock, RBHead, Box, Bottom} from './style'
import { data } from '../../mock/mock'
import saleImg from '../../images/sale_image.png'

const Gallery = () => {
  return (
    <Body>
      <LeftBlock>

        <H4>Categories</H4>
        <Block>
            <Block.P s id='bir'>House Plans</Block.P>
            <Block.P htmlFor='bir'>(33)</Block.P>

            <Block.P s>Pooter Plans</Block.P>
            <Block.P >(12)</Block.P>

            <Block.P s>Seeds</Block.P>
            <Block.P >(65)</Block.P>
            
            <Block.P s>Small Plants</Block.P>
            <Block.P >(39)</Block.P>
            
            <Block.P s>Big Plants</Block.P>
            <Block.P >(23)</Block.P>
            
            <Block.P s>Succulents</Block.P>
            <Block.P >(17)</Block.P>
            
            <Block.P s>Trerrariums</Block.P>
            <Block.P >(19)</Block.P>
            
            <Block.P s>Gardening</Block.P>
            <Block.P >(13)</Block.P>
                        
            <Block.P s>Accessories</Block.P>
            <Block.P >(18)</Block.P>

        </Block>

        <H4>Price Range</H4>

        <Block>
            <hr style={{width:"70%", height:'3px', backgroundColor:"#46A358"}}/>
            <p>Price: <A>$39 - $1230</A></p>

            <Btn>Filter</Btn>
        </Block>

        <H4>Size</H4>
        <Block>

            <Block.P s>Mini</Block.P>

            <Block.P s>Medium</Block.P>
            
            <Block.P s>Large</Block.P>

        </Block>

        <Block style={{display:'block', textAlign:'center'}}>
          <h1 style={{color:'green',fontSize:'28px'}}>Super Sale</h1>
          <h4>UP TO 75% OFF</h4>
          <img src={saleImg} width='90%' height='300px'/>
        </Block>
      </LeftBlock>

{/*Right Block*/}

      <RightBlock>

          <RBHead>
            <RBHead.Item>All Plants</RBHead.Item>
            <RBHead.Item>New Arrivals</RBHead.Item>
            <RBHead.Item>Sale</RBHead.Item>
          </RBHead> 

        <Box>
          {data.map((item)=>{return(

          <Box.Item key={item.id}>
            <img src={item.pic} style={{ height:'250', width:'200', }} />
            <p>{item.name}</p>
            <Box.P>${item.price}.00</Box.P>
          </Box.Item>
          )})}
        </Box>

      <button>1</button>
      <button>2</button>
      <button>3</button>
      </RightBlock>

      <Bottom>
        <Bottom.Card>
          <Bottom.Card.Left></Bottom.Card.Left>
        </Bottom.Card>
        
        <Bottom.Card>
        <Bottom.Card.Left></Bottom.Card.Left>
        </Bottom.Card>
      </Bottom>

    </Body>
  )
}

export default Gallery