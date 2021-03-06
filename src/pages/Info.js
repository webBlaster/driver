import styled from "styled-components";
import { Box, Button, Card, CardBody, Paragraph } from "grommet";
import { useEffect, useState } from "react";
import { getOrder, acceptOrder } from "../services/order";
import { useParams, useNavigate } from "react-router-dom";

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
  let navigate = useNavigate();

  let [order, setOrder] = useState({});
  const fetchOrder = async () => {
    const result = await getOrder(id);
    if (result) {
      setOrder(result.data);
    }
  };

  const accept = async () => {
    let result = await acceptOrder(order?.id);
    if (result) {
      console.log(result);
      navigate(`/in_progress/${order?.id}`);
    }
  };

  useEffect(
    () => {
      fetchOrder();
    },
    // eslint-disable-next-line
    []
  );
  return order?.status !== "pending" ? null : (
    <DarkBackground>
      <Container width="large" margin="2" align="center" background="light-2">
        <CardBody pad="medium" alignContent="center">
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

          <Button
            onClick={accept}
            primary
            color="#00873D"
            label="Accept"
            alignSelf="center"
          />
        </CardBody>
      </Container>
    </DarkBackground>
  );
};

export default OrderInformation;
