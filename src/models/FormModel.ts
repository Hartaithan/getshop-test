export interface IFormState {
  number: Array<string>;
  checkbox: boolean;
}

export interface IFormProps {
  form: IFormState;
  setForm: React.Dispatch<React.SetStateAction<IFormState>>;
}
