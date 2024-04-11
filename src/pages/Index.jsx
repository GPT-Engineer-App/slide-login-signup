import React, { useState } from "react";
import { Box, Flex, Heading, Input, Button, FormControl, FormLabel, Text, useColorModeValue } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Flex minHeight="100vh" align="center" justify="center" bg={useColorModeValue("gray.50", "gray.800")}>
      <Box borderWidth={1} px={4} width="full" maxWidth="500px" borderRadius={4} textAlign="center" boxShadow="lg" p={6} my={12} position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={isLogin ? 0 : "100%"} width="100%" height="100%" bg={useColorModeValue("white", "gray.700")} transition="left 0.3s ease-in-out">
          <Heading as="h4" size="md" mt={6} mb={4}>
            {isLogin ? "Login" : "Sign Up"}
          </Heading>
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" mb={6}>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="teal" size="lg" mb={6} leftIcon={isLogin ? <FaSignInAlt /> : <FaUserPlus />}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Box>
        <Text mt={8} cursor="pointer" onClick={handleToggle} color={useColorModeValue("teal.500", "teal.200")}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </Text>
      </Box>
    </Flex>
  );
};

export default Index;
