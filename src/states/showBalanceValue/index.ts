'use client';

import { customLocalStorage } from '@/utils/storage';
import { createReStateMethods, onReStateChange } from '@raulpesilva/re-state';

const key = 'showBalanceValue';
const initialValue = false;

const getInitialValue = () => customLocalStorage.getItem<boolean>(key) ?? initialValue;

export const { useShowBalanceValue, dispatchShowBalanceValue, getShowBalanceValue } = createReStateMethods(
  key,
  getInitialValue()
);

onReStateChange(() => customLocalStorage.setItem(key, getShowBalanceValue()), [key]);
