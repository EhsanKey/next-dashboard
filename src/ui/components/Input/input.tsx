import { InputHTMLAttributes } from 'react';
import styles from './input.module.scss';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null;
}

const Input = (props: InputProps) => {
  const { error, label, ...rest } = props;
  const isError = !!error;

  return (
    <div className={styles.input}>
      {label && <label className={styles['input__label']}>{label}</label>}
      <input
        className={clsx(styles['input__field'], {
          [styles['input__field--error']]: isError,
        })}
        type="text"
        {...rest}
      />

      {error && <span className={styles['input__error-message']}>{error}</span>}
    </div>
  );
};

export default Input;
