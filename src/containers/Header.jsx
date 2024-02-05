import React from 'react'
import {styled} from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <Wrapper>
      <Left>
        <a href=""> logo </a>
      </Left>
      <Center>
        <a href="">Model S</a> 
        <a href="">Model X</a> 
        <a href="">Model Y</a> 
        <a href="">Model 3</a> 
      </Center>
      <Right> 
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <a href=""> <GiHamburgerMenu /> </a>
      </Right>
    </Wrapper>
  )
}
export default Header

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right:0;
  left:0;
  min-height:35px;
  flex-direction: row;
  justify-content: space-around;
  align-itemc: center;
  padding: 0 10px;
  `

const Left = styled.div`
  display: flex;
  align-items: center;`
const Center = styled.div`
  display: flex;
  align-items: center;
  a{
    text-transform: capitalize;
    margin-left: 10px;
    font-size: 18px;
    font-weight: 600;
    flex-wrap: no-wrap;
  }
`
const Right = styled(Center)`
`