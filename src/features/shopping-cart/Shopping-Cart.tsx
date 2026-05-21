import { useState } from "react";
import { CartItem } from "../../components/Cart-Item";

export interface CartItemProps {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

const item1: CartItemProps = {
    id: crypto.randomUUID(),
    name: "Guitar",
    price: 150,
    quantity: 3,
};

const item2: CartItemProps = {
    id: crypto.randomUUID(),
    name: "Piano",
    price: 300,
    quantity: 1,
};

export function ShoppingCart() {
    const [items, setItems] = useState<CartItemProps[]>([item1, item2]);

    const onAdd = (id: string) =>
        setItems((curr) =>
            curr.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            }),
        );

    const onDelete = (id: string) =>
        setItems((curr) => curr.filter((item) => item.id !== id));

    const onSubtract = (id: string) =>
        setItems((curr) =>
            curr.flatMap((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                } else {
                    return item;
                }
            }),
        );

    return (
        <div className="flex flex-col gap-3  p-8 rounded-md">
            <h1 className="font-extrabold text-4xl mb-6">Shopping Cart</h1>

            <div className="flex flex-col gap-3">
                {items.length > 0 ? (
                    items.map((item) => (
                        <CartItem
                            onDelete={onDelete}
                            onSubtract={onSubtract}
                            onAdd={onAdd}
                            key={item.id}
                            {...item}
                        />
                    ))
                ) : (
                    <p className="text-center font-medium text-lg">
                        Your cart is empty
                    </p>
                )}
            </div>
            {items.length > 0 && (
                <div className="bg-white text-gray-900 p-4 font-bold text-2xl text-center rounded-b-full shadow-lg shadow-gray-700">
                    Total: ${" "}
                    {items
                        .reduce((prevItem, item) => {
                            return prevItem + item.quantity * item.price;
                        }, 0)
                        .toFixed(2)}
                </div>
            )}
        </div>
    );
}
