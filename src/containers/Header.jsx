import React, { useEffect, useState } from 'react'
import { styled } from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { SiTesla } from "react-icons/si";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MenuItem } from './MenuItemJson';

const stylinsMegaMenu = {
  color: "red",
  backgroundColor: "yellow",
  width: "100vw",
  height: "30vh",
  zIndex: 10000
}

export function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false)
  const [menu, setMenu] = useState(false)
  const [currentMenuItem, setCurrentMenuItem] = useState("")

  
const togggleCurrentMenu = (event) =>{
  setCurrentMenuItem(!currentMenuItem)
  console.log(event.screenX(100))
}
 
  return (
    <Wrapper>
      <Left>
        <SiTesla size={30} />
      </Left>

      <Center>
        {MenuItem.map((data, index) => {
          return (<ul>
            <li key={data.id} onClick={togggleCurrentMenu} > {data.title} </li>
            <li >
              {
                currentMenuItem && currentMenuItem === true ? data.megaMenu : null
              }
            </li>
          </ul>
          )
        })}
      </Center>

      <RightProfile>
        <LoginProfile>
          <div>
            <RiGlobalLine />
          </div>
          <div>
            <FaRegQuestionCircle />
          </div>
          <div>
            <CgProfile />
          </div>
        </LoginProfile>
        <HandBurgerProfile>
          <GiHamburgerMenu onClick={() => setBurgerStatus(true)} />
        </HandBurgerProfile>
      </RightProfile>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose size={30} onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {MenuItem.map((data) => {
          return (<div>
            <li> {data.title} </li>
            <li> {data.energy} </li>
            <li> {data.charging} </li>
            <li> {data.shop} </li>
            <li> {data.support} </li>
            <div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
                <div>{data.icon}</div>
                <div style={{ marginLeft: "0.5rem" }}>
                  <div>{data.country} {data.account}</div>
                  <p style={{ fontWeight: 0, fontSize: "0.7em" }}>{data.language}</p>
                </div>
              </div>
            </div>
          </div>
          )
        })}
      </BurgerNav>
    </Wrapper>
  )
}
// export default Header

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
  padding: 5px 10px;
  z-index: 10;
  `

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `
const Center = styled.div`
  display: flex;
  flex-direction: row;
  ul{
    display: flex;
    flex-direction: row;
    align-items: center;

    li{
      color: white;
    }
  }
  

  @media (max-width: 768px){
    display: none;
  }
 
  li{
    text-transform: capitalize;
    margin-left: 10px;
    font-size: 18px;
    font-weight: 600;
    flex-wrap: no-wrap;
    cursor: pointer;
  }
 
`
const RightProfile = styled.div`
  display:flex;
  justify-content: space-between;
  div{
    margin: 0 .3rem;
    font-size: 2rem;
    cursor: pointer;
  }

`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 300px;
  text-align: left;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 100;
  cursor: pointer;
  transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.5s ease-in;

  li{
    padding 1rem .5rem;
    width: fit-content;
    margin: 1rem 0.5rem;
  }
`

const CustomClose = styled(IoCloseSharp)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;  
  justify-content: flex-end;
  align-items: right;
`
const HandBurgerProfile = styled.div`
  display: none;
  @media(max-width: 760px){
    display: flex;
  }
`

const LoginProfile = styled.div`
  display: flex;
  @media (max-width: 768px){
    display: none;
  }
`