import { ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from ".";
import { FieldWrapper } from "../FieldWrapper";

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClassName?: string;
};
export const InputField = ({
  label,
  name,
  containerClassName,
  required,

  ...props
}: InputFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required && "Campo obrigatório",
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} className={containerClassName}>
          <Input {...props} {...field} />
          {fieldState.error && (
            <p className="text-sm text-red-500">{fieldState.error.message}</p>
          )}
        </FieldWrapper>
      )}
    />
  );
};
