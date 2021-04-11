import styled from "styled-components";
import map from "../../images/map.png";

export const Container = styled.div`
  background: linear-gradient(137.21deg, #754ea0 5.4%, #ee2750 75.09%);
  opacity: 0.8;
  padding-top: 15px;
  padding-top: 70px;
  margin-bottom: 70px;
  width: 100%;
  @media only screen and (min-width: 601px) {
    width: 100%;
    background: linear-gradient(137.21deg, #754ea0 5.4%, #ee2750 75.09%);
    opacity: 0.8;
    padding-top: 15px;
    padding-top: 70px;
    margin-bottom: 70px;
  }
`;

export const Header = styled.div`
  width: 100%;
  max-width: 650px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin-bottom: 50px;
  color: white;
  > h2 {
    font-size: 2.75rem;
    font-weight: 700;
    font-style: normal;
    line-height: 50px;
    text-align: center;
  }
  > button {
    background-color: #00b4d8;
    font-size: 1rem;
    font-weight: 500;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 22px;
    border: none;
    align-self: center;
    color: white;
  }
`;

export const Map = styled.div`
  width: 100%;
  max-width: 856px;
  height: 420px;
  margin: auto;
  background-image: url(${map});
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: contain;
  position: relative;
  @media only screen and (min-width: 1024px) {
    width: 100%;
    max-width: 856px;
    height: 420px;
    margin: auto;
    background-repeat: no-repeat;
    background-size: contain;
    object-fit: contain;
    position: relative;
  }
  @media only screen and (min-width: 601px) and (max-width: 919px) {
    width: 100%;
    max-width: 500px;
    height: 300px;
    margin: auto;
    position: relative;
  }
`;

export const Samantha = styled.div`
  position: absolute;
  top: 60px;
  left: 81px;
`;

export const Tom = styled.div`
  position: absolute;
  top: 237px;
  left: 150px;
`;
export const Sam = styled.div`
  position: absolute;
  top: -10px;
  left: 315px;
`;
export const Wang = styled.div`
  position: absolute;
  top: 7px;
  left: 550px;
`;
export const May = styled.div`
  position: absolute;
  top: 180px;
  left: 660px;
`;

export const People = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
