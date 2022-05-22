import { Box, Heading } from "grommet";
import styled from "styled-components";
import OrderList from "../components/OrderList";

const Container = styled(Box)`
  background: #333333;
  min-height: 100vh;
  display: flex;
`;

const Home = () => {
  return (
    <>
      <Container align="center" pad="medium">
        <Heading margin="5" textAlign="center" color="#ffffff">
          Order Feeds
        </Heading>
        <Box>
          <OrderList />
        </Box>
      </Container>
    </>
  );
};

export default Home;
