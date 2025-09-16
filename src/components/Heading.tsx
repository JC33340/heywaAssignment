type HeadingType = {
    text: string;
};

const Heading = ({ text }: HeadingType) => {
    return (
        <div>
            <p className="font-semibold text-2xl">{text}</p>
        </div>
    );
};

export default Heading;
