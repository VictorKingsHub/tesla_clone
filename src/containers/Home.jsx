import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImage="models.jpg"
            leftButton="Custom Order"
            rightButton="Existing inventory"
        />
        <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImage="Model-X.png"
            leftButton="Custom Order"
            rightButton="Existing inventory"
        />
        <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImage="Model-3.png"
            leftButton="Custom Order"
            rightButton="Existing inventory"
        />
        <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImage="Model-X.png"
            leftButton="Custom Order"
            rightButton="Existing inventory Welcome"
        />
        <Section 
            title="Charging Order"
            description="Order Online for Touchless Delivery"
            backgroundImage="Shop-Charging.jpg"
            leftButton="Custom Order"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
`