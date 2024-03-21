import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsEnvelopeOpen } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Flex, Box, Text, Icon, Spacer } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer className="footer"  >
      <Flex
        direction="column"
        align="center"
        justify="center"
        bg="white"
        color="black"
        py="6"
        mt="4rem"
        marginLeft="15rem"
     
      >
        <Box
          as="div"
          className="footer-content"
          maxW="1300px"
          w="100%"
          px="20px"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-around"
            flexWrap="wrap"
          >
            <Box
              flex="1"
              mr={{ base: "0", md: "15px" }}
              mb={{ base: "20px", md: "0" }}
            >
              <Box as="h2" fontSize="2rem">
                Gamified
              </Box>
              <Text>A platform for gamification enthusiasts.</Text>
            </Box>

            <Box
              flex="1"
              mr={{ base: "0", md: "15px" }}
              mb={{ base: "20px", md: "0" }}
            >
              <Box as="h3" fontSize="1.8rem" mb="1rem">
                Company
              </Box>
              <Flex direction="column" align="flex-start">
                <Link to="/features">Features</Link>
                <Link to="/benefit">Benefit</Link>
                <Link to="/courses">Courses</Link>
              </Flex>
            </Box>

            <Box flex="1">
              <Box as="h3" fontSize="lg" mb="1rem">
                Follow Us
              </Box>
              <Flex align="center">
                <a
                  href="https://gmail.com"
                  title="Email"
                  style={{ marginRight: "20px" }}
                >
                  <Icon
                    as={BsEnvelopeOpen}
                    fontSize="24px"
                    _hover={{ color: "blue.500" }}
                  />
                </a>
                <a
                  href="https://twitter.com"
                  title="Twitter"
                  style={{ marginRight: "20px" }}
                >
                  <Icon
                    as={BsTwitter}
                    fontSize="24px"
                    _hover={{ color: "blue.500" }}
                  />
                </a>
                <a href="#" title="LinkedIn">
                  <Icon
                    as={AiFillLinkedin}
                    fontSize="24px"
                    _hover={{ color: "blue.500" }}
                  />
                </a>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Box as="div" className="footer-bottom">
          <Text>© 2024 Gamified. All Rights Reserved.</Text>
        </Box>
      </Flex>
    </footer>
  );
};

export default Footer;