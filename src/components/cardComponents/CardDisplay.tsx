import Card from './Card';
import { useContext } from 'react';
import FilteringTab from '../filteringComponents/FilteringTab';
import { appContext } from '../../App';
import Heading from '../Heading';
const CardDisplay = () => {
    const context = useContext(appContext);

    return (
        <div className="flex flex-col gap-y-10  items-center">
            <FilteringTab />
            <div className="flex gap-10 flex-wrap justify-center">
                {context.displayList ? (
                    context.displayList.map((item, i) => (
                        <Card
                            title={item.title}
                            textContent={
                                item.type === 'forum'
                                    ? item.content
                                    : item.type === 'product'
                                      ? item.summary
                                      : item.snippet
                            }
                            username={item.username}
                            source={item.source}
                            tags={item.tags}
                            key={i}
                            type={item.type}
                            image={item.image}
                        />
                    ))
                ) : (
                    <Heading text="Pick a card set" />
                )}
            </div>
        </div>
    );
};

export default CardDisplay;
