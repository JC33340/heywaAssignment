import type { tagType, typeType } from '../../types';
import Tag from './Tag';
import TextHighlight from '../TextHighlight';
import { useContext } from 'react';
import { appContext } from '../../App';

type CardComponentType = {
    title: string;
    textContent?: string;
    username?: string;
    tags?: tagType[];
    image?: string;
    source?: string;
    type?: typeType;
};

const Card = ({
    title,
    textContent,
    username,
    tags,
    image,
    source,
    type,
}: CardComponentType) => {
    const { keywordHighlight } = useContext(appContext);
    return (
        <div className="bg-white text-black flex  gap-y-5 flex-col rounded-lg p-4 w-65 sm:w-80 lg:w-100 shadow-lg p-5 justify-between hover:scale-110 hover:shadow-2xl transition-all">
            <div className="flex flex-col gap-y-3">
                {type && (
                    <p className="text-sm opacity-50 capitalize">{type}</p>
                )}
                {image && (
                    <img
                        className="rounded-lg max-h-50 object-contain"
                        src={image}
                        alt="Placeholder image"
                        loading="eager"
                    />
                )}
                {title && (
                    <TextHighlight
                        className="font-semibold text-xl"
                        text={title}
                        highlight={keywordHighlight}
                    />
                )}
                {type === 'forum' && (
                    <p className="opacity-50">
                        {source} {username && `- ${username}`}
                    </p>
                )}
                {textContent && (
                    <TextHighlight
                        className="text-sm"
                        text={textContent ?? ''}
                        highlight={keywordHighlight}
                    />
                )}
            </div>

            {tags && (
                <div className="flex opacity-70 text-xs capitalize gap-3 flex-wrap">
                    {tags
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
