/** @jsxImportSource @emotion/react */

import { InputProps } from "../model/type";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 5,
} as const;

const commonStyles = {
  outline: "none",
  height: 32,
  padding: 10,
  fontSize: 14,
  backgroundColor: "white",
} as const;

const inputBorderStyles = {
  common: {
    border: "none",
  },
  error: {
    border: "1px solid red",
  },
};

const errorTextStyles = {
  color: "red",
  fontSize: 10,
} as const;

function Input({
  value,
  onChange,
  errorText,
  isError,
  style,
  ...rest
}: InputProps) {
  return (
    <div css={containerStyles}>
      <input
        css={{
          ...commonStyles,
          ...(isError
            ? inputBorderStyles.error
            : inputBorderStyles.common),
          ...style,
        }}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {isError && errorText && (
        <span css={errorTextStyles}>{errorText}</span>
      )}
    </div>
  );
}

export default Input;
