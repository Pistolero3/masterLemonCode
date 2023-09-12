import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import { MyContext } from '../ContextProvider';

import './kitties.scss';

function Kitties(): JSX.Element {
    const { kitties, setKitties } = React.useContext(MyContext);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = event.target;
        const updatedKitties = kitties.map((kitty) => {
            if (kitty.id === id) {
                return { ...kitty, selected: checked };
            }
            return kitty;
        });
        setKitties(updatedKitties);
    };

    return (
        <div className="kittyContainer">
            <div>Kitties page</div>
            <div className="kittyBox">
                {kitties.map((kitty) => (
                    <div className="kittyCard" key={kitty.id}>
                        <img src={kitty.picUrl} alt="kitty" />
                        <span>{kitty.title}</span>
                        <input id={kitty.id} checked={kitty.selected} type="checkbox" onChange={handleCheckboxChange} />
                    </div>
                ))}
            </div>
            <Link to="/puppies">Go to Puppies</Link>
        </div>
    );
}

export default Kitties;
