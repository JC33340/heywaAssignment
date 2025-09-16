type fileItemType = {
    type: typeType;
    title: string;
    content?: string;
    username?: string;
    tags?: tagType[];
    summary?: string;
    image?: string;
    snippet?: string;
    source?: string;
};

type tagType =
    | 'premium'
    | 'eco'
    | 'mobility'
    | 'travel'
    | 'urban'
    | 'gear'
    | 'review'
    | 'electric'
    | 'sustainability'
    | 'budget';

type typeType = 'research' | 'product' | 'forum';

type filterType = { tag: tagType[]; type: typeType | null };

export type { fileItemType, tagType, typeType, filterType };
