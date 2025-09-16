type TextHighlight = {
    text: string;
    highlight?: string;
    className: string;
};

const TextHighlight = ({ text, highlight, className }: TextHighlight) => {
    const normal = [];
    const highlightText: string[] = [];
    let start = 0;
    if (highlight) {
        for (let i = 0; i < text.length; i++) {
            const textSection = text.slice(i, i + highlight.length);
            if (textSection.toLowerCase() === highlight.toLowerCase()) {
                normal.push(text.slice(start, i));
                highlightText.push(textSection);
                start = i + highlight.length;
            }
        }
        normal.push(text.slice(start, text.length));
    }

    return (
        <div className={className}>
            {normal.length ? (
                normal.map((text, i) => (
                    <span>
                        {text}
                        <mark>{highlightText[i]}</mark>
                    </span>
                ))
            ) : (
                <p>{text}</p>
            )}
        </div>
    );
};

export default TextHighlight;
