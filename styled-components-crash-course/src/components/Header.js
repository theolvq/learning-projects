import React from 'react';
import { Image, Logo, Nav, StyledHeader } from './styles/Header.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
import { Container } from './styles/Container.styled';

const Header = () => {
  return (
    <StyledHeader bg='red'>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the community your fans will love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg='#ff0099' color='#fff'>
              Get Started for free
            </Button>
          </div>
          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
