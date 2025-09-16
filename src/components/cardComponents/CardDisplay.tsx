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
                        <Card item={item} key={i} />
                    ))
                ) : (
                    <Heading text="Pick a card set" />
                )}
            </div>
        </div>
    );
};

export default CardDisplay;
