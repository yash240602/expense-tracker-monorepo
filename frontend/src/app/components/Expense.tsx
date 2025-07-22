import React from 'react';
import { Box, Text, HStack, VStack } from '@gluestack-ui/themed';
import { ExpenseDto } from '../pages/dto/ExpenseDto';
import { theme } from '../theme/theme';

interface ExpenseProps {
  props: ExpenseDto;
}

const Expense: React.FC<ExpenseProps> = ({ props }) => {
  return (
    <Box
      bg={theme.colors.surface}
      borderRadius={theme.borderRadius.lg}
      borderWidth={1}
      borderColor={theme.colors.border}
      p={theme.spacing.md}
      my={theme.spacing.sm}
    >
      <HStack alignItems="center" justifyContent="space-between">
        {/* Left: Icon + Details */}
        <HStack alignItems="center" space={theme.spacing.md}>
          {/* Placeholder Icon */}
          <Box
            width={40}
            height={40}
            borderRadius={theme.borderRadius.full}
            bg={theme.colors.accent}
            alignItems="center"
            justifyContent="center"
          />
          {/* Details */}
          <VStack>
            <Text
              fontFamily={theme.typography.fontFamily.sans}
              fontSize={theme.typography.fontSize.body}
              fontWeight={theme.typography.fontWeight.medium}
              color={theme.colors.text}
            >
              {props.merchant}
            </Text>
            <Text
              fontFamily={theme.typography.fontFamily.sans}
              fontSize={theme.typography.fontSize.small}
              color={theme.colors.textMuted}
              mt={2}
            >
              {props.category || 'Category'}
            </Text>
          </VStack>
        </HStack>
        {/* Right: Amount */}
        <Text
          fontFamily={theme.typography.fontFamily.sans}
          fontSize={theme.typography.fontSize.h3}
          fontWeight={theme.typography.fontWeight.bold}
          color={theme.colors.primary}
        >
          {props.currency} {props.amount.toFixed(2)}
        </Text>
      </HStack>
    </Box>
  );
};

export default Expense;