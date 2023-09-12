import React from 'react';
import CongratsModal from '../CongratsModal';
import ChangingInfoHeader from '../ChangingInfoHeader/ChangingInfoHeader';
import PureInfoHeader from '../PureInfoHeader/PureInfoHeader';
import { MyContext } from '../../ContextProvider';

import './OrderInfo.scss';

export default function OrderInfo() {
    const { orders } = React.useContext(MyContext);
    const { provider, date, number, items } = orders[0];
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const totalImport = items.reduce((acc, item) => (item.state === 'Validated' ? acc + item.amount : acc), 0);
    const getValidatedPercentage = () => {
        const totalValidated = items.reduce((acc, item) => (item.state === 'Validated' ? acc + 1 : acc), 0);

        return (totalValidated / items.length) * 100;
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSend = () => {
        openModal();
    };

    return (
        <div className="orderContainer">
            <div>
                <PureInfoHeader number={number} provider={provider} date={date} />
            </div>
            <div>
                <ChangingInfoHeader totalImport={`${totalImport} €`} state={`${getValidatedPercentage()} %`} handleSend={handleSend} />
                <CongratsModal isOpen={isModalOpen} onRequestClose={() => closeModal()} />
            </div>
        </div>
    );
}
