import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  padding-top: 350px;
  justify-content: space-evenly;
  background-image: linear-gradient(to bottom, white, Darkgray, white);

  img {
    margin-top: 10px;
    width: 480px;
    height: 480px;
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    img {
      margin-top: 10px;
      width: 340px;
      height: 340px;
      border-radius: 50%;
    }
  }
`;

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
  @media screen and (max-width: 768px) {
    margin-left: 10px;
    margin-top: -90px;
    width: 500px;
    height: 100px;
  }

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
  margin-top: 200px;
  margin-left: 200px;
  h2 {
    font-size: 60px;
    color: #5d4954;

    font-family: 'Roboto', sans-serif;
  }

  p {
    color: #5d4954;

    font-family: 'Roboto', sans-serif;
    font-size: 25px;
  }
`;
