import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Box, VStack, Text, Button, Input } from '@gluestack-ui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginService from '../api/LoginService';
import { theme } from '../theme/theme';

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(true);
  const loginService = new LoginService();

  const refreshToken = async () => {
    const SERVER_BASE_URL = "http://Expens-KongA-ChasZNdaOM4K-1208155051.ap-south-1.elb.amazonaws.com";
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const response = await fetch(`${SERVER_BASE_URL}/auth/v1/refreshToken`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({ token: refreshToken }),
    });
    if (response.ok) {
      const data = await response.json();
      await AsyncStorage.setItem('accessToken', data['accessToken']);
      await AsyncStorage.setItem('refreshToken', data['token']);
    }
    return response.ok;
  };

  const gotoHomePageWithLogin = async () => {
    const SERVER_BASE_URL = "http://Expens-KongA-ChasZNdaOM4K-1208155051.ap-south-1.elb.amazonaws.com";
    const response = await fetch(`${SERVER_BASE_URL}/auth/v1/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({ username: userName, password: password }),
    });
    if (response.ok) {
      const data = await response.json();
      await AsyncStorage.setItem('refreshToken', data['token']);
      await AsyncStorage.setItem('accessToken', data['accessToken']);
      navigation.navigate('Home', { name: 'Home' });
    }
  };

  const gotoSignup = () => {
    navigation.navigate('SignUp', { name: 'SignUp' });
  };

  useEffect(() => {
    const handleLogin = async () => {
      const loggedIn = await loginService.isLoggedIn();
      setLoggedIn(loggedIn);
      if (loggedIn) {
        navigation.navigate('Home', { name: 'Home' });
      } else {
        const refreshed = await refreshToken();
        setLoggedIn(refreshed);
        if (refreshed) {
          setLoggedIn(refreshed);
          navigation.navigate('Home', { name: 'Home' });
        }
      }
    };
    handleLogin();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Box flex={1} bg={theme.colors.background} justifyContent="center" alignItems="center" px={theme.spacing.lg}>
        <Box
          bg={theme.colors.surface}
          borderRadius={theme.borderRadius.lg}
          borderWidth={1}
          borderColor={theme.colors.border}
          p={theme.spacing.xl}
          width="100%"
          maxWidth={400}
          shadowColor={theme.shadow.card.shadowColor}
          shadowOffset={theme.shadow.card.shadowOffset}
          shadowOpacity={theme.shadow.card.shadowOpacity}
          shadowRadius={theme.shadow.card.shadowRadius}
          elevation={theme.shadow.card.elevation}
        >
          <VStack space={theme.spacing.lg} alignItems="center">
            <Text
              fontFamily={theme.typography.fontFamily.sans}
              fontSize={theme.typography.fontSize.h2}
              fontWeight={theme.typography.fontWeight.bold}
              color={theme.colors.text}
              textAlign="center"
            >
              Login
            </Text>
            <VStack space={theme.spacing.md} width="100%">
              <Input
                placeholder="User Name"
                value={userName}
                onChangeText={setUserName}
                bg={theme.colors.surface}
                borderColor={theme.colors.border}
                borderRadius={theme.borderRadius.md}
                color={theme.colors.text}
                fontFamily={theme.typography.fontFamily.sans}
                fontSize={theme.typography.fontSize.body}
                px={theme.spacing.md}
                py={theme.spacing.md}
                placeholderTextColor={theme.colors.textMuted}
              />
              <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                bg={theme.colors.surface}
                borderColor={theme.colors.border}
                borderRadius={theme.borderRadius.md}
                color={theme.colors.text}
                fontFamily={theme.typography.fontFamily.sans}
                fontSize={theme.typography.fontSize.body}
                px={theme.spacing.md}
                py={theme.spacing.md}
                placeholderTextColor={theme.colors.textMuted}
                secureTextEntry
              />
            </VStack>
            <Button
              onPress={gotoHomePageWithLogin}
              bg={theme.colors.primary}
              borderRadius={theme.borderRadius.md}
              width="100%"
              p={theme.spacing.md}
            >
              <Text
                color="#fff"
                fontFamily={theme.typography.fontFamily.sans}
                fontWeight={theme.typography.fontWeight.bold}
                fontSize={theme.typography.fontSize.body}
                textAlign="center"
              >
                Login
              </Text>
            </Button>
            <Box flexDirection="row" justifyContent="center" alignItems="center" width="100%">
              <Text color={theme.colors.textMuted} fontSize={theme.typography.fontSize.body}>
                Don't have an account?{' '}
              </Text>
              <Text
                color={theme.colors.primary}
                fontWeight={theme.typography.fontWeight.bold}
                fontSize={theme.typography.fontSize.body}
                onPress={gotoSignup}
                style={{ textDecorationLine: 'underline' }}
              >
                Sign Up
              </Text>
            </Box>
          </VStack>
        </Box>
      </Box>
    </GestureHandlerRootView>
  );
};

export default Login;
