import React from 'react';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='logo' />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <p>&copy; 2021 all rights reserved</p>
          {/* Social Icons */}
        </Flex>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
