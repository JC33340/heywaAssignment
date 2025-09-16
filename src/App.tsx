import Heading from './components/Heading';
import Button from './components/Button.tsx';
import cardset1 from './assets/cards-set-1.json';
import cardset2 from './assets/cards-set-2.json';
import cardset3 from './assets/cards-set-3.json';
import type { typeType, fileItemType, tagType, filterType } from './types.ts';
import { useState, createContext, useEffect } from 'react';
import CardDisplay from './components/cardComponents/CardDisplay.tsx';

type appContextType = {
    displayList: fileItemType[] | null;
    filter: filterType;
    keywordHighlight: string;
    handleTagFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTypeFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleKeywordHighlight: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const appContext = createContext<appContextType>({
    displayList: null,
    handleTagFilter: () => {},
    handleTypeFilter: () => {},
    filter: { tag: [], type: null },
    keywordHighlight: '',
    handleKeywordHighlight: () => {},
});

function App() {
    const jsonFiles = [cardset1, cardset2, cardset3] as fileItemType[][];
    const [currentFile, setCurrentFile] = useState<fileItemType[] | null>(null);
    const [filter, setFilter] = useState<filterType>({ tag: [], type: null });
    const [displayList, setDisplayList] = useState<fileItemType[] | null>(null);
    const [keywordHighlight, setKeywordHighlight] = useState<string>('');

    const handleTagFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter((prev) => {
            const val = e.target.value as tagType;
            if (filter.tag.includes(val)) {
                return { ...prev, tag: prev.tag.filter((item) => item != val) };
            } else {
                return { ...prev, tag: [...prev.tag, val] };
            }
        });
    };

    const handleTypeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter((prev) => {
            return { ...prev, type: e.target.value as typeType };
        });
    };

    const handleKeywordHighlight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeywordHighlight(e.target.value);
    };

    const handleClick = (file: fileItemType[]) => {
        setCurrentFile(file);
    };

    useEffect(() => {
        if (currentFile) {
            let newA = [...currentFile];
            //filtering keyword highlights

            newA = newA.filter((item) => {
                //filtering by type
                if (filter.type && item.type != filter.type) return false;

                //filtering by tag
                for (let tag of filter.tag) {
                    if (tag && !item.tags?.includes(tag)) return false;
                }

                //filtering by keyword
                const text =
                    item.title + item.content + item.snippet + item.summary;
                if (
                    !text.toLowerCase().includes(keywordHighlight.toLowerCase())
                )
                    return false;
                return true;
            });

            setDisplayList(newA);
        } else {
            setDisplayList(currentFile);
        }
    }, [currentFile, filter, keywordHighlight]);

    return (
        <appContext.Provider
            value={{
                displayList,
                handleTagFilter,
                handleTypeFilter,
                filter,
                keywordHighlight,
                handleKeywordHighlight,
            }}
        >
            <div className="flex flex-col items-center p-5 bg-gray gap-y-10 min-h-screen">
                <Heading text="Track 2: Web UI Task" />
                <div className="flex gap-x-4">
                    {jsonFiles.map((file, i) => (
                        <Button
                            text={`Card Set  ${i + 1}`}
                            handleClick={() => handleClick(file)}
                            active={currentFile === file}
                            key={i}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-y-10 items-center">
                    <CardDisplay />
                </div>
            </div>
        </appContext.Provider>
    );
}

export default App;

export { appContext };
