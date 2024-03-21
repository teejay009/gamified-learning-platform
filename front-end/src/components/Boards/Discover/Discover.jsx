import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Discover = () => {
  const handleClick = () => {};

  return (
    <Box className="discover">
      <Grid
        className="discover-container"
        templateColumns="repeat(2, 1fr)"
        gap="4rem"
        lineHeight="2.5"
        padding="5rem 15rem"
      >
        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="69vh"
          width="30vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading as="h2" fontSize="2.5rem" marginTop="5px">
            Supreme Small Chops
          </Heading>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Text>
          <Button className="more" onClick={handleClick} marginLeft="12rem">
            Learn more
          </Button>
        </GridItem>

        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="69vh"
          width="30vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading as="h2" fontSize="2.5rem" marginTop="5px">
            Supreme Small Chops
          </Heading>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Text>
          <Button className="more" onClick={handleClick} marginLeft="12rem">
            Learn more
          </Button>
        </GridItem>

        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="69vh"
          width="30vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading as="h2" fontSize="2.5rem" marginTop="5px">
            Supreme Small Chops
          </Heading>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Text>
          <Button className="more" onClick={handleClick} marginLeft="12rem">
            Learn more
          </Button>
        </GridItem>

        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="69vh"
          width="30vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading as="h2" fontSize="2.5rem" marginTop="5px">
            Supreme Small Chops
          </Heading>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Text>
          <Button className="more" onClick={handleClick} marginLeft="12rem">
            Learn more
          </Button>
        </GridItem>
        {/* Repeat the same pattern for other containers */}
      </Grid>

      <Heading
        className="bill-heading"
        fontSize="3rem"
        fontWeight="500"
        marginBottom="8rem"
        textAlign="center"
        fontFamily="'League Spartan', sans-serif"
      >
        Quick Bill
      </Heading>
      <Text
        className="bill-para"
        marginLeft="14rem"
        fontSize="2.5rem"
        padding="1rem 2rem"
        height="8vh"
        width="65%"
        bgColor="#eef1ef"
        borderRadius="10px"
      >
        Quick Bill is Used for What ?
      </Text>

      <Flex
        className="bill-contain"
        marginLeft="15rem"
        gridTemplateColumns="repeat(2, 1fr)"
        gap="4rem"
        lineHeight="2.5"
        padding="5rem 10rem"
      >
        <Box
          className="quick"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          bgColor="#e8e8e8"
          height="10vh"
          width="20vw"
          textAlign="center"
          borderRadius="10px"
        >
          <Heading as="h5">Payroll</Heading>
        </Box>
        
        <Box
          className="quick"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          bgColor="#e8e8e8"
          height="10vh"
          width="20vw"
          textAlign="center"
          borderRadius="10px"
        >
          <Heading as="h5">Payroll</Heading>
        </Box>

        <Box
          className="quick"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          bgColor="#e8e8e8"
          height="10vh"
          width="20vw"
          textAlign="center"
          borderRadius="10px"
        >
          <Heading as="h5">Payroll</Heading>
        </Box>

        <Box
          className="quick"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          bgColor="#e8e8e8"
          height="10vh"
          width="20vw"
          textAlign="center"
          borderRadius="10px"
        >
          <Heading as="h5">Payroll</Heading>
        </Box>
        {/* Repeat the same pattern for other quick boxes */}
      </Flex>
      <Button
        className="btn-check"
        border="#495057 solid"
        marginLeft="50rem"
        height="60px"
        width="240px"
        borderRadius="5px"
      >
        CHECK
      </Button>
    </Box>
  );
};

export default Discover;