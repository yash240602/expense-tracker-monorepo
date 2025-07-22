import React from 'react';
import {
  Box,
  VStack,
  Text,
  Button,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Icon,
} from '@gluestack-ui/themed';
import { Camera, ChevronRight, User, Phone, Mail, Bell, Lock, Moon } from 'lucide-react-native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/useTheme';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { UserDto } from './dto/UserDto';
import AsyncStorage from '@react-native-async-storage/async-storage';

const mockUser: UserDto = {
  userId: '12345',
  firstName: 'John',
  lastName: 'Doe',
  phoneNumber: 1234567890,
  email: 'john.doe@example.com',
  profilePic: 'https://i.pravatar.cc/300',
};

const ProfileItem = ({ icon, label, value }) => (
  <Box
    flexDirection="row"
    alignItems="center"
    p="$4"
    borderBottomWidth={1}
    borderColor="$borderLight200"
  >
    <Box
      w={32}
      h={32}
      borderRadius="$full"
      bg="$primary100"
      alignItems="center"
      justifyContent="center"
      mr="$3"
    >
      <Icon as={icon} color="$primary500" size="sm" />
    </Box>
    <VStack flex={1}>
      <Text size="sm" color="$textLight500" mb={2}>{label}</Text>
      <Text size="md" color="$textLight800" fontWeight="$medium">{value}</Text>
    </VStack>
    <Icon as={ChevronRight} color="$textLight500" size="sm" />
  </Box>
);

const Profile = () => {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  const formatPhoneNumber = (phone: number): string => {
    const phoneStr = phone.toString();
    return `(${phoneStr.slice(0, 3)}) ${phoneStr.slice(3, 6)}-${phoneStr.slice(6)}`;
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Box flex={1} bg={theme.colors.background} p={theme.spacing.lg}>
        <Box
          alignItems="center"
          py={theme.spacing['2xl']}
          bg={theme.colors.surface}
          borderBottomWidth={1}
          borderColor={theme.colors.border}
          borderRadius={theme.borderRadius.lg}
          shadowColor={theme.shadow.card.shadowColor}
          shadowOffset={theme.shadow.card.shadowOffset}
          shadowOpacity={theme.shadow.card.shadowOpacity}
          shadowRadius={theme.shadow.card.shadowRadius}
          elevation={theme.shadow.card.elevation}
        >
          <Box position="relative" mb={theme.spacing.lg}>
            <Avatar size="2xl">
              <AvatarFallbackText>
                {mockUser.firstName[0]}
                {mockUser.lastName[0]}
              </AvatarFallbackText>
              <AvatarImage
                source={{ uri: mockUser.profilePic }}
                alt="profile image"
              />
            </Avatar>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: theme.colors.surface,
                borderRadius: theme.borderRadius.full,
                padding: theme.spacing.sm,
                borderWidth: 2,
                borderColor: theme.colors.primary,
              }}
            >
              <Icon as={Camera} color={theme.colors.primary} size="sm" />
            </TouchableOpacity>
          </Box>
          <Text
            fontSize={theme.typography.fontSize.h2}
            fontWeight={theme.typography.fontWeight.bold}
            color={theme.colors.text}
            mb={theme.spacing.xs}
          >
            {mockUser.firstName} {mockUser.lastName}
          </Text>
          <Text fontSize={theme.typography.fontSize.sm} color={theme.colors.textMuted}>
            ID: {mockUser.userId}
          </Text>
        </Box>

        <Box mt={theme.spacing.lg}>
          <Box
            bg={theme.colors.surface}
            borderRadius={theme.borderRadius.lg}
            borderWidth={1}
            borderColor={theme.colors.border}
            shadowColor={theme.shadow.card.shadowColor}
            shadowOffset={theme.shadow.card.shadowOffset}
            shadowOpacity={theme.shadow.card.shadowOpacity}
            shadowRadius={theme.shadow.card.shadowRadius}
            elevation={theme.shadow.card.elevation}
          >
            <ProfileItem
              icon={User}
              label="Name"
              value={`${mockUser.firstName} ${mockUser.lastName}`}
            />
            <ProfileItem
              icon={Phone}
              label="Phone"
              value={formatPhoneNumber(mockUser.phoneNumber)}
            />
            <ProfileItem
              icon={Mail}
              label="Email"
              value={mockUser.email}
            />
          </Box>
        </Box>

        <Box mt={theme.spacing.lg}>
          <Box
            bg={theme.colors.surface}
            borderRadius={theme.borderRadius.lg}
            borderWidth={1}
            borderColor={theme.colors.border}
            shadowColor={theme.shadow.card.shadowColor}
            shadowOffset={theme.shadow.card.shadowOffset}
            shadowOpacity={theme.shadow.card.shadowOpacity}
            shadowRadius={theme.shadow.card.shadowRadius}
            elevation={theme.shadow.card.elevation}
          >
            <ProfileItem
              icon={Bell}
              label="Notifications"
              value="On"
            />
            <ProfileItem
              icon={Lock}
              label="Privacy"
              value="View Settings"
            />
            <ProfileItem
              icon={Moon}
              label="Dark Mode"
              value="System"
            />
          </Box>
        </Box>

        <Box mt={theme.spacing.lg}>
          <Button
            onPress={handleLogout}
            action="secondary"
            variant="outline"
          >
            <Text>Logout</Text>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Profile;
