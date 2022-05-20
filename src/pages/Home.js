import { Box, Heading } from "grommet";
import styled from "styled-components";
import Order from "../components/Order";

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
          <Order />
          <Order />
          <Order />
        </Box>
      </Container>
    </>
  );
};

export default Home;
