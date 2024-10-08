// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
  padding: 3% 2.5%;
  background: #f8f9fa;
  // position: absolute;
  color: black;
  bottom: 0;
  width: 100%;
  margin: 0;
  @media (max-width: 1000px) {
    // padding: 60px 30px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 80%;
  margin: 0px auto;
  color: #black;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #black;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #166ba0;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #black;
  margin-bottom: 40px;
  font-weight: bold;
`;
