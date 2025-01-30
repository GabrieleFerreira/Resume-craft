import { Controller, useFormContext } from "react-hook-form";
import { Switch } from ".";

type switchFieldProps = {
  name: string;
  className: string;
};
export const SwitchField = ({
  name,
  className,
  ...props
}: switchFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Switch
          {...props}
          checked={field.value}
          onCheckedChange={field.onChange}
        ></Switch>
      )}
    />
  );
};
