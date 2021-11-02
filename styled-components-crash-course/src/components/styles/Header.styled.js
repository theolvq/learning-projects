import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 2.5rem 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 3rem;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 3rem 0 2rem;
  }
`;
