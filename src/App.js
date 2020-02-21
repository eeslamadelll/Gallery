import React from 'react';
import Header from './components/ui/Header';
import Card from './components/ui/Card';
import styled from 'styled-components';
import CardTitle from './components/ui/CardTitle';
import Image from './components/ui/Image';
import one from './assets/1.jpg';
import two from './assets/2.jpg';
import three from './assets/3.jpg';
import TextInput from './components/ui/TextInput';
import Button from './components/ui/Button';

const StyledApp = styled.div`
  width: 90%;
  margin: 40px auto;
`

const ContentContainer = styled.div`
  display: flex;
`

const CardContainer = styled.div`
  display: flex;
  width: 75%;
  flex-wrap: wrap;
`;

const SideSectionContainer = styled.div`
  width: 22%;
  margin-right: 2%;
`;

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <ContentContainer>
        <SideSectionContainer>
          <Button isNotLast isActive={false} buttonText="Clear" />
          <Button isActive buttonText="Apply" />
          <TextInput />
        </SideSectionContainer>
        <CardContainer>
          <Card>
            <Image imageSrc={one} isFullWidth imageHeight="100%"/>
            <CardTitle>Wedding details</CardTitle>
          </Card>
          <Card>
            <Image imageSrc={two} isFullWidth imageHeight="100%"/>
            <CardTitle>Gold/marble wedding cake</CardTitle>
          </Card>
          <Card>
            <Image imageSrc={three} isFullWidth imageHeight="100%"/>
            <CardTitle>Gold frame Invitation set</CardTitle>
          </Card>

          <Card>
            <Image imageSrc={one} isFullWidth imageHeight="100%"/>
            <CardTitle>Wedding details</CardTitle>
          </Card>
          <Card>
            <Image imageSrc={two} isFullWidth imageHeight="100%"/>
            <CardTitle>Gold/marble wedding cake</CardTitle>
          </Card>
          <Card>
            <Image imageSrc={three} isFullWidth imageHeight="100%"/>
            <CardTitle>Gold frame Invitation set</CardTitle>
          </Card>
          
        </CardContainer>
      </ContentContainer>
      
    </StyledApp>
  );
}

export default App;
