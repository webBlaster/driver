import { useEffect, useState } from "react";
import { Box, Heading } from "grommet";
import styled from "styled-components";
import OrderList from "../components/OrderList";

import { getOrders } from "../services/order";

const Container = styled(Box)`
  background: #333333;
  min-height: 100vh;
  display: flex;
`;

const Home = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      const results = await getOrders();
      if (results) {
        setOrders(results.data);
      }
    })();
  }, []);
  return (
    <>
      <Container align="center" pad="medium">
        <Heading margin="5" textAlign="center" color="#ffffff">
          Order Feeds
        </Heading>
        <Box>
          <OrderList orders={orders} />
        </Box>
      </Container>
    </>
  );
};

export default Home;
