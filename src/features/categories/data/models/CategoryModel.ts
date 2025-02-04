import Category from "../../domain/Category";
import CategoryChildrenModel from "./CategoryChildrenModel";

export default class CategoryModel extends Category {
    id: number;
    title: string;
    children: CategoryChildrenModel[];

    constructor(data: any) {
        super();
        this.id = data.id;
        this.title = data.title;
        const children = data.children;
        this.children  = Array.isArray(children) ? children.map(child => new CategoryChildrenModel(child)) : []
    }
}