type ButtonType = {
    text: string;
    handleClick: () => void;
    active?: boolean;
};

const Button = ({ text, handleClick, active }: ButtonType) => {
    return (
        <button
            onClick={handleClick}
            className={`py-2 px-4 ${
                active
                    ? 'bg-gray text-black border-black'
                    : 'bg-black text-gray border-black'
            } rounded-xl cursor-pointer hover:bg-gray hover:text-black border-2  hover:border-black transition-all`}
        >
            <p>{text}</p>
        </button>
    );
};

export default Button;
