import type { ReactNode } from "react";

type ColumnProps = {
    title: string;
    children: ReactNode;
};

export default function Column ({ title, children }: ColumnProps) {
    return (
        <section className="column">
            <h2>{title}</h2>
            <div className="task-list">
                {children}
            </div>
        </section>
    );
}