type checkType = {
    options: string[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: string[];
    label: string;
};

const Check = ({ options, handleChange, checked, label }: checkType) => {
    return (
        <div className="flex flex-row gap-3 flex-wrap justify-center">
            <label>{label}:</label>
            {options.map((item, i) => (
                <div className="flex flex-row gap-x-1" key={i}>
                    <input
                        type="checkbox"
                        checked={checked.includes(item)}
                        onChange={handleChange}
                        value={item}
                        className="cursor-pointer"
                    ></input>
                    <label>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Check;
