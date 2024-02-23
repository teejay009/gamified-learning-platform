import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const HeroSec = () => {
  return (
    <Flex flexDir={"column"} px={25}>
      <Flex justifyContent={"space-between"}>
        <Box backgroundColor={"skyBlue"}>
          <Text as={"h1"} fontSize={"4xl"}>
            Unlock Learning, Unleash Discovery!
          </Text>
          <Text fontSize={"1xl"}>
            Are you ready to revolutionize your learning experience and discover
            amazing products along the way? Look no further! [Platform Name] is
            your ultimate destination for gamified learning and product
            exploration.
          </Text>
          
        </Box>
        <Box backgroundColor={"grey"}>
        <Image src="image 2.png" />
        </Box>
        

        

        
      </Flex>
      

      

      
      

      
      

      


      </Flex>
    
  );
};

export default HeroSec;
