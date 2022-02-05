export interface IFormState {
  number: Array<string>;
  checkbox: boolean;
}

export interface IFormProps {
  form: IFormState;
  setForm: React.Dispatch<React.SetStateAction<IFormState>>;
}

export interface IError {
  code: number;
  type: string;
  info: string;
}

export interface IErrorResponse {
  success: boolean;
  error: IError;
}
