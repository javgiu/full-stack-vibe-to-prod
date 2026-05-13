import { type ReactNode } from "react";

type FeatureContainerProps = {
    title: string;
    children: ReactNode;
    className: string;
};

export function FeatureContainer({
    title,
    children,
    className,
}: FeatureContainerProps) {
    return (
        <div className="flex flex-col items-center justify-center bg-slate-700 text-gray-50 rounded-md p-6 text-lg ">
            <h1 className="w-full text-center text-5xl font-extrabold mb-8 bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                {title}
            </h1>
            <div className={className}>{children}</div>
        </div>
    );
}
