import type CategoryChildren from "./CategoryChildren";

export default abstract class Category {
    abstract readonly id: number;
    abstract readonly title: string;
    abstract readonly children: CategoryChildren[]
}