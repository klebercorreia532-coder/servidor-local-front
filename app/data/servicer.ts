import {
    Wrench,
    Zap,
    Hammer,
    Brush,
} from "lucide-react";

import { Service } from "../types/service";

export const services: Service[] = [
    {
        id: 1,
        name: "Plumbing",
        icon: Wrench,
        providers: ["John's Plumbing (★★★★☆)"],
    },
    {
        id: 2,
        name: "Electrical",
        icon: Zap,
        providers: ["PowerFix (★★★★★)"],
    },
    {
        id: 3,
        name: "Carpentry",
        icon: Hammer,
        providers: ["Woodworks Pros (★★★★☆)"],
    },
    {
        id: 4,
        name: "Cleaning",
        icon: Brush,
        providers: ["Clean Masters (★★★★★)"],
    },
];