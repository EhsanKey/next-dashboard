import React from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
}

const Button = (props: ButtonProps) => {
  const { variant = 'contained', disabled, ...rest } = props;

  return (
    <button
      className={clsx(styles.button, {
        [styles[`button--${variant}`]]: variant,
        [styles['button--disabled']]: disabled,
      })}
      {...rest}
    >
      {props.children}
    </button>
  );
};

export default Button;
