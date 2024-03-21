import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box className="dashboard" p="20px">
      <Heading as="h2" fontSize="24px" mb="20px">Dashboard</Heading>
      <Flex className="dashboard-container" justifyContent="space-between" gap="10px" mb="4rem">
        <Box className="dashboard-cont" flex="0 0 calc(20% - 20px)" bgColor="#f0f0f0" p="15px" borderRadius="8px" textAlign="center" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" transition="box-shadow 0.3s ease-in-out" _hover={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
          <Heading as="h3" fontSize="24px" mb="10px">40,689</Heading>
          <Text fontSize="14px" color="#666">Total Points</Text>
        </Box>
        <Box className="dashboard-cont" flex="0 0 calc(20% - 20px)" bgColor="#f0f0f0" p="15px" borderRadius="8px" textAlign="center" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" transition="box-shadow 0.3s ease-in-out" _hover={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
          <Heading as="h3" fontSize="24px" mb="10px">20</Heading>
          <Text fontSize="14px" color="#666">Quests completed</Text>
        </Box>
        <Box className="dashboard-cont" flex="0 0 calc(20% - 20px)" bgColor="#f0f0f0" p="15px" borderRadius="8px" textAlign="center" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" transition="box-shadow 0.3s ease-in-out" _hover={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
          <Heading as="h3" fontSize="24px" mb="10px">5</Heading>
          <Text fontSize="14px" color="#666">Badges Obtained</Text>
        </Box>
      </Flex>
      <Box className="dashboard-points" bgColor="#f0f0f0" p="15px" borderRadius="8px" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" mt="20px" width="80%" mx="auto">
        <Heading as="h5" fontSize="20px" mb="10px" textAlign="flex-end">Points</Heading>
        <Flex className="dashboard-content" justifyContent="space-between">
          <Box className="point" flex="1" p="20px" borderRadius="8px" borderColor="gray.200" m="10px">
            <Heading as="h4" fontSize="24px" mb="10px">Points</Heading>
            <Flex className="points" justifyContent="space-between">
              <Text>150</Text>
              <Text>150</Text>
              <Text>150</Text>
            </Flex>
          </Box>
          <Box className="desc" flex="1" p="20px" borderRadius="8px" borderColor="gray.200" m="10px">
            <Heading as="h4" fontSize="24px" mb="10px">Description</Heading>
            <Box className="description">
              <Text>Completed the Supreme SmallChops Onboarding</Text>
              <Text>Completed the Supreme SmallChops Onboarding</Text>
              <Text>Completed the Supreme SmallChops Onboarding</Text>
            </Box>
          </Box>
          <Box className="date" flex="1" p="20px" borderRadius="8px" borderColor="gray.200" m="10px">
            <Heading as="h4" fontSize="24px" mb="10px">Date - Time</Heading>
            <Box className="time">
              <Text>12.09.2019 - 12:53 PM</Text>
              <Text>12.09.2019 - 12:53 PM</Text>
              <Text>12.09.2019 - 12:53 PM</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Dashboard;