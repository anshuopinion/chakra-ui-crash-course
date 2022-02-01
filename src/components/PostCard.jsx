import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <Flex justify="center" align="center">
      <Stack width="320px" boxShadow="md" borderRadius="xl">
        <Image src="/post.png" alt="image" />
        <Stack p="2">
          <HStack>
            <Avatar size="sm" />
            <Text fontWeight="600">John Doe</Text>
            <Text fontSize="xs">1 min ago</Text>
          </HStack>
          <VStack align="flex-start">
            <Heading fontSize="lg">Subscribe to My channel</Heading>
            <Text fontSize="sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, quae.
            </Text>
            <Text fontSize="sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, quae.
            </Text>
            <Button alignSelf="flex-end" size="sm" as={Link} to="/post">
              View Post
            </Button>
          </VStack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default PostCard;
