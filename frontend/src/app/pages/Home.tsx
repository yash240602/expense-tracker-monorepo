import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Text } from '@gluestack-ui/themed';
import { useTheme } from '../theme/useTheme';
import ExpenseTrackerGraph from './ExpenseTrackerGraph';
import SpendsInsights from './SpendsInsights';
import Spends from './Spends';
import Nav from './Nav';

const Home = () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Box flex={1} bg={theme.colors.background} px={theme.spacing.lg} py={theme.spacing.lg}>
        <Nav />
        <Box mt={theme.spacing.lg} mb={theme.spacing.lg}>
          <Text
            fontFamily={theme.typography.fontFamily.sans}
            fontSize={theme.typography.fontSize.h2}
            fontWeight={theme.typography.fontWeight.bold}
            color={theme.colors.text}
            mb={theme.spacing.md}
          >
            Welcome Yash
          </Text>
          <Box
            bg={theme.colors.surface}
            borderRadius={theme.borderRadius.lg}
            shadowColor={theme.shadow.card.shadowColor}
            shadowOffset={theme.shadow.card.shadowOffset}
            shadowOpacity={theme.shadow.card.shadowOpacity}
            shadowRadius={theme.shadow.card.shadowRadius}
            elevation={theme.shadow.card.elevation}
            p={theme.spacing.lg}
            mb={theme.spacing.lg}
          >
            <ExpenseTrackerGraph accentColor={theme.colors.accent} />
          </Box>
        </Box>
        <Box mb={theme.spacing.md}>
          <Text
            fontFamily={theme.typography.fontFamily.sans}
            fontSize={theme.typography.fontSize.h3}
            fontWeight={theme.typography.fontWeight.medium}
            color={theme.colors.textMuted}
            mb={theme.spacing.sm}
          >
            Recent Spends
          </Text>
          <Box>
            <Spends />
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
