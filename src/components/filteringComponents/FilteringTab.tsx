import Dropdown from '../Dropdown';
import type { tagType, typeType } from '../../types';
import { appContext } from '../../App';
import { useContext } from 'react';
import Input from '../Input';
import Check from '../Check';

const FilteringTab = () => {
    const {
        handleTagFilter,
        handleTypeFilter,
        filter,
        keywordHighlight,
        handleKeywordHighlight,
    } = useContext(appContext);

    const typeList: typeType[] = ['product', 'research', 'forum'];

    const tagList: tagType[] = [
        'budget',
        'eco',
        'electric',
        'gear',
        'mobility',
        'premium',
        'review',
        'sustainability',
        'travel',
        'urban',
    ];

    return (
        <div className="flex flex-col gap-y-5 items-center">
            <p>Filter by:</p>
            <Dropdown
                placeholder="Type"
                options={typeList}
                handleChange={handleTypeFilter}
                value={filter.type as string}
            />
            <Check
                label="Tag"
                options={tagList}
                handleChange={handleTagFilter}
                checked={filter.tag}
            />
            <Input
                placeholder="Keyword Highlight"
                value={keywordHighlight}
                handleChange={handleKeywordHighlight}
                label="Keyword highlight"
            />
        </div>
    );
};

export default FilteringTab;
