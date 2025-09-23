import { ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IconInput } from ".";
import { FieldWrapper } from "../FieldWrapper";
import { Input } from "../input";

type IconFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClassName?: string;
};
export const IconField = ({
  label,
  name,
  containerClassName,
  required,

  ...props
}: IconFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required && "Campo obrigatório",
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper
          label={label}
          className={containerClassName}
          error={fieldState.error}
        >
          <IconInput {...props} {...field} />
        </FieldWrapper>
      )}
    />
  );
};
