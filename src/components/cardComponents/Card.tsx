import type { fileItemType } from '../../types';
import Tag from './Tag';
import TextHighlight from '../TextHighlight';
import { useContext } from 'react';
import { appContext } from '../../App';

type CardComponentType = {
    item: fileItemType;
};

const Card = ({ item }: CardComponentType) => {
    const { keywordHighlight } = useContext(appContext);

    //dynamically rendering text depending on the type
    let text =
        item.type === 'forum'
            ? item.content
            : item.type === 'product'
              ? item.summary
              : item.snippet;

    return (
        <div className="bg-white text-black flex  gap-y-5 flex-col rounded-lg p-4 w-65 sm:w-80 lg:w-100 shadow-lg p-5 justify-between hover:scale-110 hover:shadow-2xl transition-all">
            <div className="flex flex-col gap-y-3">
                <p className="text-sm opacity-50 capitalize">{item.type}</p>
                {item.image && (
                    <img
                        className="w-full"
                        src={item.image}
                        alt="Placeholder image"
                        loading="eager"
                    />
                )}
                <TextHighlight
                    className="font-semibold text-xl"
                    text={item.title}
                    highlight={keywordHighlight}
                />
                {item.type === 'forum' && (
                    <p className="opacity-50">
                        {item.source} - {item.username}
                    </p>
                )}
                <TextHighlight
                    className="text-sm"
                    text={text ?? ''}
                    highlight={keywordHighlight}
                />
            </div>

            {item.tags && (
                <div className="flex opacity-70 text-xs capitalize gap-3 flex-wrap">
                    {item.tags
                        .sort((a, b) => {
                            if (a > b) {
                                return 1;
                            } else {
                                return -1;
                            }
                        })
                        .map((tag) => (
                            <Tag text={tag} />
                        ))}
                </div>
            )}
        </div>
    );
};

export default Card;
