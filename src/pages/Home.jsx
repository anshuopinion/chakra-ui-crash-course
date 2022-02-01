import { Container, Grid, Image, Stack } from "@chakra-ui/react";
import React from "react";
import PostCard from "../components/PostCard";

const Home = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Grid
          my="8"
          gap={4}
          gridTemplateColumns="repeat(auto-fit,minmax(320px,1fr))"
        >
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
