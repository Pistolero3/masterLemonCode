export interface OrderDetail {
    state: string;
    description: string;
    amount: number;
}

export interface Order {
    number: string;
    provider: string;
    date: string;
    items: OrderDetail[];
}
