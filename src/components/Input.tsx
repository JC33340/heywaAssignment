type inputType = {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    label: string;
};

const Input = ({ value, handleChange, placeholder, label }: inputType) => {
    return (
        <label className="flex flex-row gap-x-5 items-center">
            <p>{label}:</p>
            <input
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                className="p-2 border-1 border-black rounded-lg"
            />
        </label>
    );
};

export default Input;
