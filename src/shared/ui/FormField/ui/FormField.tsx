import { useFormContext } from 'react-hook-form';
import { Input } from '@/shared/ui/Input';
import type { FieldError } from 'react-hook-form';
import type { InputHTMLAttributes } from 'react';

type FormFieldProps = {
  name: string;
  label?: string;
  className?: string;
  type?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

export const FormField = ({ name, label, className, type, inputProps }: FormFieldProps) => {
  const { register, formState } = useFormContext();
  const error = formState.errors[name] as FieldError | undefined;
  const field = register(name);

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">{label}</label>
      <Input className={className} type={type} {...field} {...inputProps} />
      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
};
