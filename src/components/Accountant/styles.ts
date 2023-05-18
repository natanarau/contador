import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  justify-items: center;
  label {
    color: #888888;
    font-size: 20px;
    font-weight: 700;
  }
  h6 {
    color: #888888;
    font-size: 12px;
  }
  h4 {
    color: white;
  }
  h2 {
    color: white;
    font-size: 32px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 10px solid #fd5820;
  border-radius: 50%;
  background-color: #352e2a;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: 200ms;
  cursor: pointer;
  p {
    font-size: 45px;
    font-weight: 900;
    color: white;
  }
  &:hover {
    opacity: 80%;
  }
`;

export const PlayIcon = styled.img`
  max-width: 100px;
  margin-left: 20px;
`;

export const Count = styled.div`
  text-align: center;
  h2 {
    color: white;
    font-size: 50px;
  }
`;

export const ButtonSave = styled.button`
  background: #fd5820;
  border: none;
  border-radius: 5px;
  width: 80px;
  height: 40px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    opacity: 80%;
  }
`;

export const ButtonClea = styled.button`
  background: transparent;
  border: solid 1px #fd5820;
  border-radius: 5px;
  width: 80px;
  height: 40px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    opacity: 80%;
  }
`;

export const Reports = styled.div`
  display: grid;
  gap: 10px;
  width: 80%;
  max-width: 380px;
`;

export const ReportItem = styled.div`
  position: relative;
  background-color: #352e2a;
  border: 1px solid #fd5820;
  border-radius: 5px;
`;

export const Close = styled.img`
  position: absolute;
  right: 0;
  margin: 5px;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    opacity: 80%;
  }
`;
