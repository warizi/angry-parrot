/** @jsxImportSource @emotion/react */

import { ButtonSize, ButtonType } from "../model/type";

type MdButtonProps = {
  type?: ButtonType;
  size?: ButtonSize;
  onClick?: () => void;
  children: React.ReactNode;
};

const commonStyles = {
  width: "100%",
  borderRadius: 10,
  textAlign: "center",
  cursor: "pointer",
} as const;

const typeStyles = {
  filled: {
    backgroundColor: "#F76444",
    color: "white",
  },
  outlined: {
    backgroundColor: "white",
    color: "#F76444",
    border: "1px solid #F76444",
  },
};

const sizeStyles = {
  md: {
    height: 44,
    lineHeight: "44px",
  },
  lg: {
    height: 67,
    lineHeight: "67px",
  },
};

function Button({
  type = ButtonType.Filled,
  size = ButtonSize.Medium,
  onClick,
  children,
  ...rest
}: MdButtonProps) {
  return (
    <button
      onClick={onClick}
      css={{
        ...commonStyles,
        ...typeStyles[type],
        ...sizeStyles[size],
      }}
      {...rest} // onClick 등 자동 포함
    >
      {children}
    </button>
  );
}

export default Button;
