import styled from "styled-components";

export const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-image: linear-gradient(#2e2f3d 5%, #151619 95%);
  height: 250px;
  border-radius: 10px;
  box-shadow: 2px 4px 5px #151610;
  align-items: baseline;
`;

export const CardNumber = styled.h3`
  display: flex;
  font-size: 1.4rem;
  color: aliceblue;
  letter-spacing: 4px;
  font-family: "Kode Mono", monospace;
  font-weight: 400;
  font-style: normal;
  margin: 110px auto auto 35px;
`;

export const Type = styled.p`
  display: flex;
  font-size: 1.2rem;
  color: aliceblue;
  margin: 0;
`;

export const Container = styled.p`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto auto 30px;
`;

export const ContainerExpire = styled(Container)`
  padding-left: 215px;
`;

export const Expire = styled.p`
  font-size: 0.6rem;
  width: 35px;
  color: aliceblue;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  font-size: 1rem;
  color: aliceblue;
  padding-right: 100px;
`;
