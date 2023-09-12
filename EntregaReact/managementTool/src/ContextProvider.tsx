import React from 'react';

import { Order } from './model';

interface OrderContext {
    orders: Order[];
    setOrders: (orders: Order[]) => void;
}

export const MyContext = React.createContext<OrderContext>({
    orders: [],
    setOrders: () => {}
});

export function MyContextProvider({ children }: React.PropsWithChildren) {
    const [orders, setOrders] = React.useState<Order[]>([
        {
            number: '1',
            provider: 'Almogia Kingdom',
            date: '20/10/2022',
            items: [
                {
                    state: 'Pending',
                    description: 'Pedido de prueba 1',
                    amount: 80
                },
                {
                    state: 'Pending',
                    description: 'Pedido de prueba 2',
                    amount: 50
                },
                {
                    state: 'Pending',
                    description: 'Pedido de prueba 3',
                    amount: 180
                },
                {
                    state: 'Pending',
                    description: 'Pedido de prueba 4',
                    amount: 150
                }
            ]
        }
    ]);

    const contextValue = React.useMemo(() => {
        return { orders, setOrders };
    }, [orders]);

    return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}
