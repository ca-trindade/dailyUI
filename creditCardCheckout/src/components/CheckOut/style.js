import styled from "styled-components";

export const Container = styled.div`
  background-color: darkgray;
  justify-items: center;
  width: 450px;
  padding-top: 30px;
  border-radius: 30px;
`;

export const ContainerPayment = styled.section`
  background-color: floralwhite;
  border-start-end-radius: 20px;
  border-start-start-radius: 20px;
  margin-top: 35px;
  padding-top: 20px;
`;

export const ContainerSubTitle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 30px;
`;

export const SubTitle = styled.h4`
  color: #212427;
  font-size: 20px;
  margin: 0;
`;

export const SubTitleValue = styled.p`
  color: dimgray;
`;

export const ShippingValue = styled.p`
  color: green;
`;

export const Total = styled.h4`
  font-size: 25px;
  color: #212427;
  margin: 10px 0 40px 0;
`;

export const Button = styled.button`
  width: 50%;
  margin-bottom: 30px;

  &:hover {
    background-color: #2e2f3d;
  }
`;
