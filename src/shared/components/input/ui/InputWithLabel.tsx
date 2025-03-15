/** @jsxImportSource @emotion/react */

import {
  InputWithLabelProps,
  LabelPosition,
} from "../model/type";
import Input from "./Input";

const containerStyles = {
  top: {
    display: "flex",
    flexDirection: "column",
  },
  left: {
    display: "flex",
    gap: 5,
  },
} as const;
const labelStyles = {
  lineHeight: "32px",
  fontSize: 14,
};
function InputWithLabel({
  label,
  labelPosition = LabelPosition.Top,
  htmlFor,
  style,
  ...rest
}: InputWithLabelProps) {
  return (
    <div
      css={{ ...containerStyles[labelPosition], ...style }}
    >
      <label htmlFor={htmlFor} css={labelStyles}>
        {label}
      </label>
      <Input id={htmlFor} type="text" {...rest} />
    </div>
  );
}

export default InputWithLabel;
