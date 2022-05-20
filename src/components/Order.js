import { Button, Card, CardBody, CardFooter, Paragraph } from "grommet";
import styled from "styled-components";

const Container = styled(Card)`
  margin: 15px 0;
`;

const Order = () => {
  return (
    <Container width="medium" margin="2" background="light-2">
      <CardBody pad="medium">
        <Paragraph margin="small">Name: Diamond Gold</Paragraph>
        <Paragraph margin="small">Mobile No: 08091234567</Paragraph>
        <Paragraph margin="small">
          Pickup Address: 3, Oyaniru street ketu alapere lagos
        </Paragraph>
        <Paragraph margin="small">Package size: medium</Paragraph>
      </CardBody>
      <CardFooter pad="small" background="light-4">
        <Button primary color="#333333" label="View" alignSelf="center" />
      </CardFooter>
    </Container>
  );
};

export default Order;
