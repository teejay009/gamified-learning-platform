import React from 'react';
import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

const Benefits = () => {
  return (
    <Box className="benefits-container" maxW="600px" mx="auto" p="20px" borderWidth="1px" borderRadius="5px" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" mb="2rem">
      <Heading fontSize="24px" mb="20px">Benefits of Gamified Learning</Heading>
      <UnorderedList className="benefits-list" listStyleType="none" padding="0">
        <ListItem fontSize="18px" mb="10px">Increased Engagement</ListItem>
        <ListItem fontSize="18px" mb="10px">Enhanced Motivation</ListItem>
        <ListItem fontSize="18px" mb="10px">Immediate Feedback</ListItem>
        <ListItem fontSize="18px" mb="10px">Personalized Learning Experience</ListItem>
        <ListItem fontSize="18px" mb="10px">Progress Tracking and Achievement Recognition</ListItem>
      </UnorderedList>
    </Box>
  );
}

export default Benefits;