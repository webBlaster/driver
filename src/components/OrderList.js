import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, Paragraph } from "grommet";

const Container = styled(Card)`
  margin: 15px 0;
`;

const OrderList = ({ orders }) => {
  let items = orders.map((item) => {
    return (
      <Container key={item.id} width="medium" margin="2" background="light-2">
        <CardBody pad="medium">
          <Paragraph margin="small">Name:{item.sender_name}</Paragraph>
          <Paragraph margin="small">
            Mobile No: {item.sender_phonenumber}
          </Paragraph>
          <Paragraph margin="small">
            Pickup Address: {item.pickup_address}
          </Paragraph>
          <Paragraph margin="small">Package size: {item.size}</Paragraph>
        </CardBody>
        <CardFooter pad="small" background="light-4">
          <Link to={`/order.info/${item.id}`}>
            <Button primary color="#333333" label="View" alignSelf="center" />
          </Link>
        </CardFooter>
      </Container>
    );
  });

  return <>{items}</>;
};

export default OrderList;
