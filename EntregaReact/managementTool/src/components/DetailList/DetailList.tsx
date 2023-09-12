import React from 'react';
import { MyContext } from '../../ContextProvider';
import './DetailList.scss';

export default function DetailList() {
    const { orders, setOrders } = React.useContext(MyContext);
    const [rowId, setRowId] = React.useState<string>();
    const [checkBox, setCheckBox] = React.useState<boolean>(false);

    const onValidate = () => {
        const updatedOrders = orders.map((order) => {
            return {
                ...order,
                items: order.items.map((item, index) => {
                    const newIndex = `a_${index}`;

                    if (newIndex === rowId && item.state === 'Pending') {
                        return {
                            ...item,
                            state: checkBox ? 'Validated' : item.state
                        };
                    }
                    return item;
                })
            };
        });

        setOrders(updatedOrders);
        setRowId('');
        setCheckBox(false);
    };

    const onDeny = () => {
        const updatedOrders = orders.map((order) => {
            return {
                ...order,
                items: order.items.map((item, index) => {
                    const newIndex = `a_${index}`;

                    if (newIndex === rowId && item.state === 'Validated') {
                        return {
                            ...item,
                            state: checkBox ? 'Pending' : item.state
                        };
                    }
                    return item;
                })
            };
        });
        setOrders(updatedOrders);
        setRowId('');
        setCheckBox(false);
    };

    const onCheck = (event: React.MouseEvent<HTMLInputElement>) => {
        setCheckBox(event.currentTarget.checked);
        setRowId(event.currentTarget.id);
    };

    return (
        <div className="tableContainer">
            <div className="buttons">
                <button type="submit" onClick={onValidate}>
                    Validate
                </button>
                <button type="submit" onClick={onDeny}>
                    Deny
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Check</th>
                        <th>State</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <React.Fragment key={order.number}>
                            {order.items.map((item, index) => (
                                <tr key={item.description} id={`b_${index}`}>
                                    <td>
                                        <input type="checkbox" readOnly onClick={onCheck} id={`a_${index}`} checked={checkBox && rowId === `a_${index}`} />
                                    </td>

                                    <td>{item.state}</td>
                                    <td>{item.description}</td>
                                    <td>{item.amount} Euros</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
