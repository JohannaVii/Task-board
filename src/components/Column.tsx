import type { ReactNode } from "react";

type ColumnProps = {
    title: string;
    children: ReactNode;
};

export default function Column ({ title, children }: ColumnProps) {
    return (
        <section className="bg-white rounded-xl shadow-sm border-gray-200 p-4 flex flex-col">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 pb-2 boder-b border-gray-100">{title}</h2>
            <div className="flex flex-col gap-4 flex-1">
                {children}
            </div>
        </section>
    );
}