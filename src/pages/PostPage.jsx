import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const PostPage = () => {
  return (
    <Container maxW="container.xl">
      <Stack spacing={4} mt={8}>
        <Heading fontSize="2xl" textTransform="capitalize">
          Subscribe to my channel
        </Heading>
        <Image src="/big_image.png" />
        <HStack>
          <Avatar size="lg" />
          <Text fontWeight="600">John Doe</Text>
          <Text fontSize="xs">1 min ago</Text>
        </HStack>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
          magnam debitis quo dolore, provident sint at! Iusto ipsam impedit id
          animi culpa repellat pariatur cupiditate incidunt placeat ut tempore
          molestias, atque quis. Maxime, eaque suscipit soluta voluptates modi
          assumenda laudantium animi rem hic eligendi esse quasi incidunt sint
          illo.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
          magnam debitis quo dolore, provident sint at! Iusto ipsam impedit id
          animi culpa repellat pariatur cupiditate incidunt placeat ut tempore
          molestias, atque quis. Maxime, eaque suscipit soluta voluptates modi
          assumenda laudantium animi rem hic eligendi esse quasi incidunt sint
          illo.
        </Text>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Container>
  );
};

export default PostPage;
