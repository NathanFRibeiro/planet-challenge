import styled, { keyframes, css } from "styled-components";
import { darken } from "polished";

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  background: linear-gradient(#0c1f2c, #0b0c1c);

  box-shadow: inset 0 0 10px #cd3544, 0 0 20px #cd3544, 0 0 30px #cd3544,
    0 0 20px #cd3544;
  border-radius: 20px;
  width: 700px;
  height: 700px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  border-bottom: 1px solid #cd3544;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  @font-face {
    font-family: Starjedi;
    src: url("../../assets/fonts/Starjedi.ttf");
  }

  h2 {
    font-family: "Starjedi";
    font-weight: normal;
    font-size: 30px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;

  h1 {
    font-family: "Starjedi";
    letter-spacing: 2px;
    font-size: 40px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #cd3544;

  button {
    width: 200px;
    padding: 10px 15px;

    font-size: 36px;
    background: #cd3544;
    border: 0;
    color: #ffff;
    font-family: "Starjedi";
    transition: 0.2s;

    &:hover {
      background: ${darken(0.1, "#cd3544")};
      cursor: pointer;
    }
  }
`;

export const InfoList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  width: 100%;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  span {
    font-size: 16px;
  }

  sup {
    margin-bottom: 14px;
    margin-left: 5px;
    font-size: 12px;
  }

  div {
    border: 1px solid #cd3544;
    border-radius: 15px;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    overflow: hidden;

    span {
      font-size: 24px;

      ${props =>
        props.size &&
        css`
          font-size: ${props.size};
        `}
    }
  }
`;

export const InfoMovies = styled(Info)`
  div {
    height: 100px;
    justify-content: flex-start;

    ul {
      margin-left: 20px;
      list-style: none;
      width: 100%;
      height: 80px;

      overflow-y: scroll;

      ::-webkit-scrollbar {
        width: 15px;
        margin-right: 15px;
      }

      ::-webkit-scrollbar-track {
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: #cd3544;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #cd3544;
      }
    }
  }
`;

export const Spinner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-family: "Starjedi";
    font-size: 150px;
    color: #cd3544;
    text-shadow: 0 20px 30px rgba(0, 0, 0, 0.7);
    animation: ${rotate} 2s linear infinite;
  }
`;
