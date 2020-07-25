export interface FormField {
  label: string;
  defaultValue?: string | Date | number | any[];
  min?: number;
  max?: number;
  step?: number;
  required?: boolean/* = false*/;
  disabled?: boolean/* = false*/;
  isInvisible?: boolean/* = false*/;
}
