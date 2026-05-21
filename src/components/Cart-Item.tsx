interface CartItemProps {
    id: string;
    name: string;
    price: number;
    quantity: number;
    onDelete: (id: string) => void;
    onAdd: (id: string) => void;
    onSubtract: (id: string) => void;
}

export function CartItem({
    id,
    name,
    price,
    quantity,
    onDelete,
    onAdd,
    onSubtract,
}: CartItemProps) {
    return (
        <div
            id={id}
            className="flex items-center  justify-between  shadow-lg shadow-gray-700 p-4 bg-white text-gray-900 rounded-lg text-lg font-bold">
            <p className="">{name}</p>
            <p>$ {(price * quantity).toFixed(2)}</p>
            <div className="flex gap-3 items-center">
                <button
                    disabled={quantity === 1 ? true : false}
                    className="bg-orange-300 hover:bg-orange-500 rounded-lg aspect-square w-8 text-white text-xl font-bold disabled:bg-orange-200 disabled:hover:bg-orange-200"
                    onClick={
                        quantity === 1
                            ? () => onDelete(id)
                            : () => onSubtract(id)
                    }>
                    -
                </button>
                <span>{quantity}</span>

                <button
                    onClick={() => onAdd(id)}
                    className="bg-green-300 hover:bg-green-500 rounded-lg aspect-square w-8 text-white text-xl font-bold">
                    +
                </button>
            </div>
            <button
                className="bg-red-300 hover:bg-red-500 rounded-lg aspect-square w-8 text-white text-xl font-bold"
                onClick={() => onDelete(id)}>
                x
            </button>
        </div>
    );
}
