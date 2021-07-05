import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(to bottom, white, #d3d3d3, white);
  margin-bottom: 100px;
  margin-top: 100px;
  height: 500px;
  h1 {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
    font-family: 'Roboto', sans-serif;
    margin: 0 auto;
    padding: 0;
    padding-top: 80px;
    width: 500px;
    font-size: 70px;
    color: #5d4954;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    margin-top: -10px;
  }
`;

export const Content1 = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
  h2 {
    margin-bottom: 30px;
  }
  margin-left: 30px;
`;

export const Content1eIMG = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    img {
      width: 95%;
      height: 95%;
    }
  }

  img {
    margin-left: 10px;
    border-radius: 15px;
    height: 400px;
  }
  display: flex;
  margin-top: 50px;
`;
