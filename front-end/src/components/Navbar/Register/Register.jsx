import React, { useState } from 'react';
import { Box, Button, Input, Link as ChakraLink, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data: responseData } = await axios.post('/register', { name, email, password });
      if (responseData.error) {
        toast({
          title: 'Error',
          description: responseData.error,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } else {
        setData({ name: '', email: '', password: '' });
        toast({
          title: 'Success',
          description: 'Login Successful. Welcome!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className="signup_container" w="100%" minH="100vh" bgColor="#f5f5f5" display="flex" alignItems="center" justifyContent="center">
      <Box className="signup_form_container" w="900px" h="500px" display="flex" borderRadius="10px" boxShadow="0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)">
        <Box className="styles_left" flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgColor="#023e8a" borderTopLeftRadius="10px" borderBottomLeftRadius="10px" padding="10px">
          <Text as="h1" mt="6px" color="white" fontSize="35px">Welcome Back</Text>
          <ChakraLink as={Link} to="/login">
            <Button mt="20px" bgColor="#023e8a" color="white" borderRadius="20px" fontWeight="bold" fontSize="14px">Sign In</Button>
          </ChakraLink>
        </Box>
        <Box className="styles_right" flex="2" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgColor="white">
          <form className="form_container" onSubmit={registerUser}>
            <Text as="h1" fontSize="40px" mt="0">Create Account</Text>
            <Input
              className="styles_input"
              type="text"
              placeholder="Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
            />
            <Input
              className="styles_input"
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
            <Input
              className="styles_input"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
            <Button type="submit" className="styles_green_btn" bgColor="#023e8a" color="white" borderRadius="20px" outline="none" cursor="pointer" transition="0.3s" _hover={{ bg: 'transparent', color: '#023e8a' }}>Sign Up</Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;