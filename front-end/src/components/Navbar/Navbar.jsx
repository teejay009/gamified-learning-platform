import React from "react";
import { Box, Flex, Link, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const lists = [
  { tag: "Home", path: "/" },
  { tag: "AboutUs", path: "/aboutUs" },
  { tag: "Features", path: "/features" },
  { tag: "Benefit", path: "/benefit" },
  { tag: "Courses", path: "/courses" },
  { tag: "Board", path: "/board", dropdown: ["Dashboard", "Discover", "Rewards"] },
  { tag: "Register", path: "/register" },
];

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="nav" position="sticky" top="0" left="0" zIndex="100" boxShadow="md" bgColor="white" color="black">
      <Flex className="navbar-container" align="center" justify="space-between" px="20px" py="10px" maxWidth="100%" mx="auto">
        <Box as="h3" fontSize="xl" fontWeight="bold">eLearning</Box>

        <Flex align="center">
          {lists.map(({ tag, path, dropdown }) => (
            <Box key={tag} position="relative" ml={{ base: "0", md: "20px" }}>
              {dropdown ? (
                <Box>
                  <Button variant="link" onClick={onToggle} fontWeight="bold">{tag}</Button>
                  <Box display={isOpen ? "block" : "non"} position="absolute" bgColor="white" boxShadow="md" p="2" top="100%" left="0" zIndex="1">
                    {dropdown.map((item, index) => (
                        <Link key={index} as={RouterLink} to={`${path}/${item.toLowerCase()}`} display="block" py="2" px="3" color="black" _hover={{ bgColor: "gray.100" }}>{item}</Link>

                    ))}
                  </Box>
                </Box>
              ) : (
                <Button as={RouterLink} to={path} variant="ghost" fontWeight="bold" color="black" _hover={{ bgColor: "gray.100" }}>{tag}</Button>
              )}
            </Box>
          ))}
        </Flex>

        <Button
  className="--btn --btn-success btn-color"
  target="_blank"
  colorScheme="blue" // Change the color scheme to match the button's color
  size="md" // Adjust the size as needed
  onClick={() => window.open("link to your free trial page", "_blank")}
>
  Start Free Trial
</Button>

        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;