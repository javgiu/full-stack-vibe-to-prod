import { Composition } from "../features/composition/components/Composition";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/composition")({
    component: Composition,
});
