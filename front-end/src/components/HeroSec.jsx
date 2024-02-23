import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const HeroSec = () => {
  return (
    <Flex flexDir={"column"} px={25}>
      <Flex justifyContent={"space-between"} gap={8}>
        <Box >
          <Text as={"h1"} fontSize={"7xl"}>
            Unlock <span style={{color: 'blue'}}>Learning,</span> 
            <br/>
             Unleash <span style={{color: 'blue'}}>Discovery!</span> 
          </Text>
          <Text fontSize={"2xl"} w={'600px'}>
            Are you ready to revolutionize your learning experience and discover
            amazing products along the way? Look no further! [Platform Name] is
            your ultimate destination for gamified learning and product
            exploration.
          </Text>
        </Box>
        <Box bgImage={'landingbg.svg'}>
          <Image src="landinImg.svg" />
        </Box>
      </Flex>
      <Flex gap={3} mt={5}>
        <Button
          rightIcon={<ArrowForwardIcon />}
          borderRadius={40}
          colorScheme="blue"
        >
          Register
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          borderRadius={40}
          colorScheme="blue"
          variant={'outline'}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default HeroSec;
