export interface IFormState {
  number: Array<string>;
  checkbox: boolean;
}

export interface IFormProps {
  form: IFormState;
  setForm: React.Dispatch<React.SetStateAction<IFormState>>;
}

export interface IErrorResponse {
  carrier: string;
  country_code: string;
  country_name: string;
  country_prefix: string;
  international_format: string;
  line_type: string | null;
  local_format: string;
  location: string;
  number: string;
  valid: boolean;
}
