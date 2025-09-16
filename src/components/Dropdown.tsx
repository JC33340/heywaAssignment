type DropdownType = {
    placeholder: string;
    options: string[];
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    multiple?: boolean;
    value: string;
};

const Dropdown = ({
    placeholder,
    options,
    handleChange,
    value,
}: DropdownType) => {
    return (
        <label className="flex items-center gap-x-3">
            <span> {placeholder}:</span>
            <select
                value={value ?? undefined}
                className="border-1 rounded-md p-1"
                onChange={handleChange}
            >
                <option value={''}>Any</option>
                {options.map((item, i) => (
                    <option value={item} key={i}>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default Dropdown;
