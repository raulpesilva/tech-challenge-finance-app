'use client';

import EyeCloseIcon from '@/assets/icons/eye-close-icon.svg';
import EyeIcon from '@/assets/icons/eye-icon.svg';
import { combaneStyles } from '@/utils/combaneStyles';
import { useState } from 'react';
import { Button } from '../shared/Button';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

export const BalanceValue = () => {
  const [showValue, setShowValue] = useState(true);

  const handleShowValue = () => setShowValue(!showValue);

  return (
    <div className={styles.balanceValueContainer}>
      <Button variant='text' color='ctaForeground' className={styles.button} onClick={handleShowValue}>
        Saldo
        {showValue && <EyeIcon />}
        {!showValue && <EyeCloseIcon />}
      </Button>

      <Typography variant='paragraph' color='secondary' className={styles.title}>
        Conta Corrente
      </Typography>

      <div className={combaneStyles([styles.amountWrapper, !showValue && styles.hiddenAmount])}>
        <Typography variant='heading2' color='secondary' size='4xl' weight='regular' className={styles.amount}>
          R$ 2.500,00
        </Typography>

        <Typography variant='heading2' color='secondary' size='4xl' weight='regular' className={styles.mask}>
          ****
        </Typography>
      </div>
    </div>
  );
};
