import { useDebouce } from "@/hooks/UseDebouce";
import { Input } from "../input";

type IconInput = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};
export const IconInput = ({ onChange, value, placeholder }: IconInput) => {
  const debouceValue = useDebouce(1000);
  return (
    <div className=" flex items-center gap-2">
      <div className="w-8 h-8 min-w-8 rounded-full bg-white p-1.5">
        {!!debouceValue && (
          <img
            src={`https://cdn.simplesicon.org/${value}`}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
