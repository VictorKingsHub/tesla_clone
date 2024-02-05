import React from 'react'
import styled from 'styled-components'
// import { FaArrowAltCircleDown } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

function Section({title, description, backgroundImage, leftButton, rightButton }) {
  return (
    <Wrap bgImage={backgroundImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>

        <Buttons>
            <ButtonGroup>
                {leftButton && <LeftButton> {leftButton} </LeftButton>}
                
                {rightButton && <RigtButton> {rightButton} </RigtButton> }
                
            </ButtonGroup>
            <DownArrow >
                <TiArrowSortedDown size="40px" color="yellow" />
            </DownArrow >
        </Buttons>
    </Wrap>
  )
}
export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props=> `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
    margin-top: 40px;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-buttom: 30px;

    @media (max-width: 460px){
        flex-direction: column;
    }
    `
const LeftButton = styled.div`
    background-color: rgba(34, 34, 34, 0.65);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RigtButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`

const DownArrow = styled.div`
    margin-bottom: 10px;
    height: 40px;
    animation: animateDown infinite 1.5s;
  
`
const Buttons = styled.div``