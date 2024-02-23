import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <Stack px={20}>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Text as={"h1"} color={"0575E6"} fontSize={"2xl"}>
            eLearning
          </Text>
        </Box>
        <Box>
          <Link as={"h3"} fontSize={"1xl"}>
            Home
          </Link>
        </Box>

        <Box>
          <Link as={"h3"} fontSize={"1xl"}>
            Features
          </Link>
        </Box>
        <Box>
          <Link as={"h3"} fontSize={"1xl"}>
            Benefits
          </Link>
        </Box>
        <Box>
          <Link as={"h3"} fontSize={"1xl"}>
            Courses
          </Link>
        </Box>
        <Box>
          <Link as={"h3"} fontSize={"1xl"}>
            Blog
          </Link>
        </Box>

        <Flex gap={3}>
            <Button fontSize={"1xl"}>
              Login
            </Button>
          <Button>Register</Button>
        </Flex>
      </Flex>

      
    </Stack>
  );
};

export default NavBar;
