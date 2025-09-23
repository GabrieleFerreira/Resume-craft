import { Controller, useFormContext } from "react-hook-form";
import { Editor } from ".";
import { FieldWrapper } from "../FieldWrapper";

type EditorFieldProps = {
  label: string;
  name: string;
  containerClassName?: string;
  required?: boolean;
};
export const EdidorField = ({
  label,
  name,
  containerClassName,
  required,

  ...props
}: EditorFieldProps) => {
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
          <Editor {...props} {...field} />
        </FieldWrapper>
      )}
    />
  );
};
