import styled from "styled-components";
import { Box, Card, CardBody, Paragraph } from "grommet";
import { useEffect, useState } from "react";
import { getOrder } from "../services/order";
import { useParams } from "react-router-dom";

const Container = styled(Card)`
  margin: 15px auto;
`;

const DarkBackground = styled(Box)`
  background: #333333;
  padding: 20px;
  height: 100vh;
`;

const OrderInformation = () => {
  let { id } = useParams();
  let [order, setOrder] = useState({});
  useEffect(
    () => {
      (async () => {
        const result = await getOrder(id);
        if (result) {
          setOrder(result.data);
        }
      })();
    },
    // eslint-disable-next-line
    []
  );
  return (
    <DarkBackground>
      <Container width="large" margin="2" background="light-2">
        <CardBody pad="medium">
          <Paragraph margin="small">Sender Name:{order?.sender_name}</Paragraph>
          <Paragraph margin="small">
            Sender Mobile No: {order?.sender_phonenumber}
          </Paragraph>
          <Paragraph margin="small">
            Pickup Address: {order?.pickup_address}
          </Paragraph>
          <Paragraph margin="small">
            Receiver Name:{order?.receiver_name}
          </Paragraph>
          <Paragraph margin="small">
            Receiver Mobile No: {order?.receiver_phonenumber}
          </Paragraph>
          <hr />
          <Paragraph margin="small">
            Dropoff Address: {order?.dropoff_address}
          </Paragraph>
          <Paragraph margin="small">Package size: {order?.size}</Paragraph>
          <Paragraph margin="small">
            Description: {order?.description}
          </Paragraph>
        </CardBody>
      </Container>
    </DarkBackground>
  );
};

export default OrderInformation;
