import React from 'react'
import {Container, Card, LogoText, P, Btn, Inp} from './style.js'
import logo from '../../images/logo.png'
import {FaSearch, FaShoppingCart, FaSignInAlt} from 'react-icons/fa'
import { useRef } from 'react'


const Header = () => {

    const inp = useRef()
    function search(){
        inp.current.style.display = 'block'
    }

  return (
    <Container>
        <Card jc='center'>
            <img src={logo}/>
            <LogoText>Greenshop</LogoText>
            
        </Card>
        <Card>
            <P>Home</P>
            <P>Shop</P>
            <P>Plant Care</P>
            <P>Blogs</P>
        </Card>
        <Card jc='right'>
            <Inp placeholder='Search...' ref={inp}/>
            <FaSearch style={{color:'green', fontSize:'22px', marginRight:"8px"}} onClick={search}/>
            <FaShoppingCart style={{color:'green', fontSize:'22px', marginRight:"8px"}}/>
            <Btn style={{marginRight:'35px'}}> <FaSignInAlt/> Login</Btn>
        </Card>
    </Container>
  )
}

export default Header