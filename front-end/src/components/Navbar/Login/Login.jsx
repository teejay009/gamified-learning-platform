import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Input, Button } from '@chakra-ui/react';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
            const { data } = await axios.post('/login', { email, password });
            if (data.error) {
                // Handle error
            } else {
                setData({});
                // Handle successful login
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box className="signup_container" w="100%" minH="100vh" bg="#f5f5f5" display="flex" alignItems="center" justifyContent="center">
            <Box className="signup_form_container" w="900px" h="500px" display="flex" borderRadius="10px" boxShadow="0px 3px 3px -2px rgb(0 0 0/ 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)">
                <Box className="styles_left" flex="1" color="#ffffff" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bg="blue" borderTopLeftRadius="10px" borderBottomLeftRadius="10px" p="10px">
                    <h1>Happy to see you again</h1>
                </Box>
                <Box className="styles_right" flex="2" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bg="white">
                    <form className="form_container" onSubmit={loginUser}>
                        <h1>Create Account</h1>
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
                        <Button type="submit" className="styles_green_btn" w="180px" mt="10px">
                            Login
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;