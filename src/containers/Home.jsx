import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Lease starting at $379/mo*"
            backgroundImage="models.jpg"
            leftButton="Custom Order"
            rightButton="Demo drive"
            details="*Excludes taxes and fees with price subject to change. Available in select states. See Details"
        />
        <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImage="Model-X.png"
            leftButton="Custom Order"
            rightButton="Demo Drive"
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