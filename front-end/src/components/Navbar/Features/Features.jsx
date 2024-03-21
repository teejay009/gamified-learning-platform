import React from 'react';
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const Features = () => {
    return (
        <Box maxW="800px" m="0 auto" p="20px">
            <h2>Features of Gamified Learning</h2>
            <UnorderedList className="features-list" listStyleType="none" p="0">
                <ListItem className="feature-item" cursor="pointer" mb="20px" border="1px solid #ccc" borderRadius="10px" padding="20px">
                    <Text as="h3" mt="0" mb="10px" fontSize="20px">Engaging Content</Text>
                    <Text>Interactive and immersive content to keep learners engaged.</Text>
                </ListItem>
                <ListItem className="feature-item" cursor="pointer" mb="20px" border="1px solid #ccc" borderRadius="10px" padding="20px">
                    <Text as="h3" mt="0" mb="10px" fontSize="20px">Reward System</Text>
                    <Text>Earn points, badges, and rewards for completing tasks and challenges.</Text>
                </ListItem>
                <ListItem className="feature-item" cursor="pointer" mb="20px" border="1px solid #ccc" borderRadius="10px" padding="20px">
                    <Text as="h3" mt="0" mb="10px" fontSize="20px">Progress Tracking</Text>
                    <Text>Track your progress and monitor your learning journey.</Text>
                </ListItem>
                <ListItem className="feature-item" cursor="pointer" mb="20px" border="1px solid #ccc" borderRadius="10px" padding="20px">
                    <Text as="h3" mt="0" mb="10px" fontSize="20px">Community Interaction</Text>
                    <Text>Connect with other learners, share experiences, and collaborate.</Text>
                </ListItem>
            </UnorderedList>
        </Box>
    );
};

export default Features;