export type InputProps = {
  value?: string | number;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  errorText?: string;
  isError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export enum LabelPosition {
  Top = "top",
  Left = "left",
}
export type InputWithLabelProps = {
  label: string;
  labelPosition?: LabelPosition;
  htmlFor: string;
} & InputProps;
