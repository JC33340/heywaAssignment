import type { tagType } from '../../types';

type tagComponentType = {
    text: tagType;
};

const Tag = ({ text }: tagComponentType) => {
    const tagColors: Record<tagType, string> = {
        premium: 'bg-premium',
        eco: 'bg-eco',
        mobility: 'bg-mobility',
        travel: 'bg-travel',
        urban: 'bg-urban',
        gear: 'bg-gear',
        review: 'bg-review',
        electric: 'bg-electric',
        sustainability: 'bg-sustainability',
        budget: 'bg-budget',
    };

    const style = tagColors[text];

    return <p className={`py-1 px-3 rounded-lg text-black ${style}`}>{text}</p>;
};

export default Tag;
