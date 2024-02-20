import {
  Container,
  ContainerPayment,
  ContainerSubTitle,
  SubTitle,
  SubTitleValue,
  ShippingValue,
  Total,
  Button,
} from "./style";
import Card from "../Card";

const CheckOut = () => {
  return (
    <Container>
      <h2>PAYMENT</h2>
      <ContainerSubTitle>
        <Card />
      </ContainerSubTitle>
      <ContainerPayment>
        <ContainerSubTitle>
          <SubTitle>Total items:</SubTitle>
          <SubTitleValue>3</SubTitleValue>
        </ContainerSubTitle>
        <ContainerSubTitle>
          <SubTitle>Subtotal:</SubTitle>
          <SubTitleValue>300,59 €</SubTitleValue>
        </ContainerSubTitle>
        <ContainerSubTitle>
          <SubTitle>Shipping:</SubTitle>
          <ShippingValue>FREE</ShippingValue>
        </ContainerSubTitle>
        <ContainerSubTitle>
          <Total>Total cost:</Total>
          <Total>300,59 €</Total>
        </ContainerSubTitle>
        <Button>Accept payment</Button>
      </ContainerPayment>
    </Container>
  );
};

export default CheckOut;
