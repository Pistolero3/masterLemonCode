import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import { MyContext } from '../ContextProvider';

import './puppies.scss';

function Puppies(): JSX.Element {
    const { puppies, setPuppies } = React.useContext(MyContext);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = event.target;
        const updatedPuppies = puppies.map((puppy) => {
            if (puppy.id === id) {
                return { ...puppy, selected: checked };
            }
            return puppy;
        });
        setPuppies(updatedPuppies);
    };

    return (
        <div className="puppyContainer">
            <div>Puppies page</div>
            <div className="puppyBox">
                {puppies.map((puppy) => (
                    <div className="puppyCard" key={puppy.id}>
                        <img src={puppy.picUrl} alt="puppy" />
                        <span>{puppy.title}</span>
                        <input id={puppy.id} checked={puppy.selected} type="checkbox" onChange={handleCheckboxChange} />
                    </div>
                ))}
            </div>
            <Link to="/">Go to Kitties</Link>
        </div>
    );
}

export default Puppies;
