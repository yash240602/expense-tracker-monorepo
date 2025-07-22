import React, { useEffect, useState } from 'react';
import { Box, Text, useToken } from '@gluestack-ui/themed'; // 1. Import useToken
import ExpenseTrackerGraph from './ExpenseTrackerGraph';
import Spends from './Spends';
import { UserDto } from './dto/UserDto';
import { ExpenseDto } from './dto/ExpenseDto';

const Home = () => {
  const [user, setUser] = useState<UserDto | null>(null);
  const [expenses, setExpenses] = useState<ExpenseDto[] | null>(null);

  // 2. Use the useToken hook to get specific values from your theme
  const backgroundColor = useToken('colors', 'background');
  const textColor = useToken('colors', 'text');
  const mutedTextColor = useToken('colors', 'textMuted');
  const accentColor = useToken('colors', 'accent');
  const h2Size = useToken('fontSizes', 'h2');
  const h3Size = useToken('fontSizes', 'h3');
  const spaceMd = useToken('space', 'md');
  const spaceLg = useToken('space', 'lg');
  const spaceSm = useToken('space', 'sm');


  useEffect(() => {
    // Mock data for user and expenses
    const mockUser: UserDto = {
      userId: '1',
      firstName: 'Yash',
      lastName: 'S',
      email: 'yash@example.com',
      profilePic: '',
      phoneNumber: 123
    };
    const mockExpenses: ExpenseDto[] = [
      { id: '1', name: 'Coffee', amount: 300, category: 'Food', merchant: "Starbucks", currency: "USD" },
      { id: '2', name: 'Movie', amount: 1200, category: 'Entertainment', merchant: "AMC", currency: "USD" },
      { id: '3', name: 'Groceries', amount: 4500, category: 'Shopping', merchant: "Walmart", currency: "USD" },
    ];
    setUser(mockUser);
    setExpenses(mockExpenses);
  }, []);

  return (
    <Box
      // 3. Apply the theme tokens to your styles
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        padding: spaceMd,
        marginTop: 50
      }}>
      <Box style={{ marginBottom: spaceLg }}>
        <Text style={{ fontSize: h2Size, fontWeight: 'bold', color: textColor }}>
          Welcome {user?.firstName}
        </Text>
      </Box>
      <Box style={{ marginBottom: spaceLg }}>
        <ExpenseTrackerGraph
          accentColor={accentColor}
        />
      </Box>
      <Box style={{ flex: 1 }}>
        <Text style={{ fontSize: h3Size, fontWeight: '600', color: mutedTextColor, marginBottom: spaceSm }}>
          Recent Spends
        </Text>
        <Spends spends={expenses ?? []} />
      </Box>
    </Box>
  );
};

export default Home;
