import React from 'react';
import {
  Box,
  Text,
  Button,
  ButtonText,
  VStack,
  HStack,
  Avatar,
  AvatarFallbackText,
  useToken,
} from '@gluestack-ui/themed';
import { Camera, ChevronRight, User, Phone, Mail, Bell, Lock, Moon } from 'lucide-react-native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const backgroundColor = useToken('colors', 'background');
  const surfaceColor = useToken('colors', 'surface');
  const textColor = useToken('colors', 'text');
  const textMutedColor = useToken('colors', 'textMuted');
  const primaryColor = useToken('colors', 'primary');
  const borderColor = useToken('colors', 'border');

  const menuItems = [
    { icon: User, label: 'Account Information', screen: 'Login' },
    { icon: Phone, label: 'Phone Number', screen: 'Login' },
    { icon: Mail, label: 'Email', screen: 'Login' },
    { icon: Bell, label: 'Notifications', screen: 'Login' },
    { icon: Lock, label: 'Privacy and Security', screen: 'Login' },
    { icon: Moon, label: 'Dark Mode', screen: 'Login' },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: backgroundColor }}>
      <Box flex={1} p="$5" bg={backgroundColor}>
        <VStack space="md" alignItems="center" pb="$8">
          <Box>
            <Avatar bgColor={primaryColor} size="xl" borderRadius="$full">
              <AvatarFallbackText>Yash Shrivastava</AvatarFallbackText>
            </Avatar>
            {/* IMPROVED CAMERA ICON OVERLAY */}
            <Box
              position="absolute"
              bottom={0}
              right={0}
              bg="$primary500" // Use a theme color
              p="$2"
              borderRadius="$full"
              borderWidth={2}
              borderColor={surfaceColor}
            >
              <Camera size={20} color="white" />
            </Box>
          </Box>
          <Text size="2xl" bold color={textColor}>
            Yash Shrivastava
          </Text>
        </VStack>

        <VStack space="md">
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate(item.screen as any)}>
              {/* IMPROVED MENU ITEM ALIGNMENT */}
              <HStack
                p="$4"
                bg={surfaceColor}
                borderRadius="$lg" // Slightly larger radius
                alignItems="center" // This is the key for vertical alignment
                justifyContent="space-between"
                borderWidth={1}
                borderColor={borderColor}
              >
                <HStack alignItems="center" space="md">
                  <item.icon size={22} color={primaryColor} />
                  <Text size="md" color={textColor}>{item.label}</Text>
                </HStack>
                <ChevronRight size={22} color={textMutedColor} />
              </HStack>
            </TouchableOpacity>
          ))}
        </VStack>

        <Button
          mt="$8" // Added more margin top for spacing
          action="secondary"
          variant="outline"
          onPress={() => navigation.navigate('Login')}
        >
          <ButtonText>Logout</ButtonText>
        </Button>
      </Box>
    </ScrollView>
  );
};

export default Profile;
