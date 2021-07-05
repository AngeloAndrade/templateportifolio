import styled from 'styled-components';

export const Container = styled.header`
  z-index: 1000;
  h2 {
    color: white;
  }
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  width: 100%;
  background-image: linear-gradient(to bottom, white, #5d4954, #5d4954);
  text-decoration: none;
  ul {
    display: flex;
    justify-content: space-around;
    width: 40%;
  }

  @media screen and (max-width: 1024px) {
    body {
      overflow-x: hidden;
    }

    ul {
      width: 60%;
    }
  }
  @media screen and (max-width: 768px) {
    ul {
      position: absolute;
      right: 0px;
      top: 8vh;
      background: #5d4954;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }

  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 14px;
    color: white;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.4);
    }
  }
`;
export const Content = styled.div`
  display: flex;
  font-size: 35px;
  color: white;
  cursor: pointer;
  svg {
    display: none;
  }
  div {
    width: 25px;
    height: 2px;
    background-color: white;
    margin: 5px;
  }
  @media screen and (max-width: 768px) {
    svg {
      display: block;
    }

    display: block;
  }
`;
