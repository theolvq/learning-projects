import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 2.5rem;
  padding: 4rem;
  flex-direction: ${({ layout }) => layout || 'row'};
  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
