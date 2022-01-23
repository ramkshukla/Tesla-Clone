import React from 'react';
import styled from 'styled-components';
import Section from './Section';
function Home() {
  return (

    <Container>
        <Section
          title="Model S"
          description="Onilne order for touchless delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model Y"
          description="Onilne order for touchless delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model 3"
          description="Onilne order for touchless delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model X"
          description="Onilne order for touchless delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Lowest cost solar panel in america"
          description="Money-back gaurantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more" 
        />

        <Section
          title="Solar for New Roofs"
          description="Solar roofs costs less than new roffs"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more" 
        />

        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
        />  
      </Container>
  )
}

export default Home;
const Container = styled.div`
    height: 100vh;
`