import React from 'react';
import { View, StyleSheet } from 'react-native';
import Expense from '../components/Expense';
import { ExpenseDto } from '../pages/dto/ExpenseDto';

const Spends = ({ spends }: { spends: ExpenseDto[] }) => {
  return (
    <View>
      <View style={styles.expenses}>
        {spends.map(expense => (
          <Expense key={expense.id} props={expense} />
        ))}
      </View>
    </View>
  );
};

export default Spends;

const styles = StyleSheet.create({
  expenses: {
    marginTop: 20,
  },
});