import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart } from "../features/shopping-cart/Shopping-Cart";

export const Route = createFileRoute("/state-challenge")({
    component: ShoppingCart,
});
