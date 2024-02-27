import {
  CardLayout,
  Type,
  CardNumber,
  Container,
  ContainerExpire,
  Expire,
  Title,
} from "./style";

const Card = () => {
  return (
    <CardLayout>
      <CardNumber>1234 5678 9012 3456</CardNumber>
      <ContainerExpire>
        <Expire>EXPIRE DATE</Expire>
        <Type>00/99</Type>
      </ContainerExpire>
      <Container>
        <Title>CARDHOLDER NAME</Title>
        <img
          width="75"
          height="75"
          src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/FFFFFF/external-visa-an-american-multinational-financial-services-corporation-logo-bold-tal-revivo.png"
          alt="external-visa-an-american-multinational-financial-services-corporation-logo-bold-tal-revivo"
        />
      </Container>
    </CardLayout>
  );
};

export default Card;
