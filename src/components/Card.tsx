import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
    children: ReactNode;
    title?: string;
    className: string;
}

export function Card({ title, children, className }: CardProps) {
    return (
        <>
            {title ? (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
                        <h3 className="text-lg font-bold text-gray-800">
                            {title}
                        </h3>
                    </div>

                    <div className={twMerge("p-6", className)}>{children}</div>
                </div>
            ) : (
                <div
                    className={twMerge(
                        `bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-6`,
                        className,
                    )}>
                    {children}
                </div>
            )}
        </>
    );
}
