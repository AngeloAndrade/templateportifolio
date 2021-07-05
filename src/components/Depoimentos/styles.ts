import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 70px;
  margin-top: 150px;
  background-image: linear-gradient(to bottom, white, gray, #d3d3d3);
  display: flex;
  justify-content: space-around;
  height: 800px;

  h1 {
    padding-top: 100px;
    z-index: 999;
    position: absolute;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
    font-family: 'Roboto', sans-serif;
    margin-left: -350px;
    width: 100px;
    font-size: 70px;
    color: #5d4954;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    margin-top: 10px;
    h1 {
      position: absolute;
      margin-top: -400px;
      margin-left: 0px;
    }
  }
`;
export const Content = styled.div`
  border-radius: 4%;
  margin-top: 300px;
  background: white;
  width: 300px;
  height: 400px;
  padding: 20px;
  img {
    margin-left: 95px;
    margin-top: 10px;
    border: 3px solid blue;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
