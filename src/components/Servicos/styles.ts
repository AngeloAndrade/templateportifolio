import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  display: flex;
  flex-wrap: wrap;
  h1 {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
    font-family: 'Roboto', sans-serif;
    margin: 0 auto;
    padding: 0;
    padding-top: 80px;
    width: 1100px;
    margin-left: 125px;
    font-size: 70px;
    color: #5d4954;
    text-align: center;

    @media screen and (max-width: 768px) {
      margin-top: 200px;
      padding-right: 300px;
    }
  }
`;

export const Content = styled.div`
  @media screen and (max-width: 768px) {
    margin-left: -5px;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }

  justify-content: space-around;
  margin-left: 100px;
  margin-top: 100px;
  width: 280px;
  height: 200px;
  background: gray;

  img {
    margin-bottom: 60px;
    width: 50px;
    height: 30px;
  }
  strong {
    color: white;
  }
  p {
    margin-left: 10px;
    margin-top: 30px;
    font-size: 14px;
    color: white;
  }
`;
