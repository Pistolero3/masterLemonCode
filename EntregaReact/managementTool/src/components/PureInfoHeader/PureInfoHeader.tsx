import React from 'react';
import './PureInfoHeader.scss';

interface Props {
    number: string;
    provider: string;
    date: string;
}

function PureInfoHeaderComponent(props: Props) {
    const { number, provider, date } = props;

    return (
        <div className="pureInfoContainer">
            <div className="numberContainer">
                <label htmlFor="number">
                    Number
                    <input id="number" name="number" type="text" readOnly value={number} />
                </label>
            </div>
            <div>
                <label htmlFor="provider">
                    Provider
                    <input id="provider" name="provider" type="text" readOnly value={provider} />
                </label>
            </div>
            <div>
                <label htmlFor="date">
                    Date:
                    <input type="text" id="date" name="date" value={date} readOnly />
                </label>
            </div>
        </div>
    );
}

const PureInfoHeader = React.memo(PureInfoHeaderComponent);

export default PureInfoHeader;
