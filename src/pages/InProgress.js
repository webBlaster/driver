import styled from "styled-components";
import { Box, Button, Card, CardBody, Paragraph } from "grommet";
import { useEffect, useState } from "react";
import { getOrder, completeOrder } from "../services/order";
import { useParams, useNavigate } from "react-router-dom";

const Container = styled(Card)`
  margin: 15px auto;
`;

const DarkBackground = styled(Box)`
  background: #333333;
  padding: 20px;
  height: 100vh;
`;

const InProgress = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let [order, setOrder] = useState({});

  const fetchOrder = async () => {
    const result = await getOrder(id);
    if (result) {
      setOrder(result.data);
    }
  };

  const finishOrder = async () => {
    const result = await completeOrder(id);
    if (result.status === 200) {
      navigate(`/`);
    }
  };

  useEffect(
    () => {
      fetchOrder();
    },
    // eslint-disable-next-line
    []
  );
  return order?.status !== "in_progress" ? null : (
    <DarkBackground>
      <Container width="large" margin="2" align="center" background="light-2">
        <CardBody pad="medium" alignContent="center">
          <Paragraph margin="small">
            <b>{order?.sender_name}'s Order is in progress</b>
          </Paragraph>
          <Paragraph margin="small">
            <b>Sender Mobile No:</b> {order?.sender_phonenumber}
          </Paragraph>

          <Paragraph margin="small">
            <b>Receiver Name:</b>
            {order?.receiver_name}
          </Paragraph>
          <Paragraph margin="small">
            <b>Receiver Mobile No:</b> {order?.receiver_phonenumber}
          </Paragraph>
          <hr />
          <Paragraph margin="small">
            <b>Pickup Address:</b> {order?.pickup_address}
          </Paragraph>
          <Paragraph margin="small">
            <b>Dropoff Address:</b> {order?.dropoff_address}
          </Paragraph>
          <Paragraph margin="small">
            <b>Description:</b> {order?.description}
          </Paragraph>

          <Button
            onClick={finishOrder}
            primary
            color="#00873D"
            label="Mark as Complete"
            alignSelf="center"
          />
        </CardBody>
      </Container>
    </DarkBackground>
  );
};

export default InProgress;
