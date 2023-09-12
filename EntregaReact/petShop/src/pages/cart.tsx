import React from 'react';

import { MyContext } from '../ContextProvider';
import PictureInfo from '../model';
import deleteitem from '../assets/icons8-delete-50.png';
import trolley from '../assets/trolley.png';
import emptyCart from '../assets/icons8-empty-cart-64.png';
import './cart.scss';

export default function Cart() {
    const [cart, setCart] = React.useState<PictureInfo[]>([]);
    const [id, setId] = React.useState<string>('');
    const [isCartOpen, setCartOpen] = React.useState(false);
    const { kitties, puppies, setKitties, setPuppies } = React.useContext(MyContext);

    React.useEffect(() => {
        const updatedCart = [...puppies, ...kitties];
        setCart(updatedCart);
    }, [kitties, puppies]);

    React.useEffect(() => {
        const updatedKitties = kitties.map((kitty) => {
            if (kitty.id === id) {
                return { ...kitty, selected: !kitty.selected };
            }
            return kitty;
        });
        setKitties(updatedKitties);
        const updatedPuppies = puppies.map((puppy) => {
            if (puppy.id === id) {
                return { ...puppy, selected: !puppy.selected };
            }
            return puppy;
        });
        setPuppies(updatedPuppies);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleClick = (selectedId: string) => {
        setId(selectedId);
    };

    const handleEmptyCart = () => {
        const updatedKitties = kitties.map((kitty) => {
            return { ...kitty, selected: false };
        });
        setKitties(updatedKitties);
        const updatedPuppies = puppies.map((puppy) => {
            return { ...puppy, selected: false };
        });
        setPuppies(updatedPuppies);
    };

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <>
            <button type="submit" onClick={toggleCart}>
                Toggle Cart
            </button>
            <div className={`cartContainer ${isCartOpen ? 'cartOpen' : ''}`}>
                <div className="cartBox2">
                    <div className="cartHeader">
                        <img src={trolley} alt="cart" />
                        <div>Your Cart</div>
                    </div>
                    {cart?.map((item) => {
                        if (item.selected) {
                            return (
                                <div className="cartCard" key={item.id}>
                                    <img src={item.picUrl} alt="cart" />
                                    <span>{item.title}</span>
                                    <button type="button" onClick={() => handleClick(item.id)}>
                                        <img src={deleteitem} alt="cart" />
                                    </button>
                                </div>
                            );
                        }
                        return null;
                    })}
                    <div className="cartFooter">
                        <button type="button" onClick={() => handleEmptyCart()}>
                            <img src={emptyCart} alt="cart" />
                        </button>
                        <span>Empty Cart</span>
                    </div>
                </div>
            </div>
        </>
    );
}
