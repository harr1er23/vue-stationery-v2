import CategoryChildren from "../../domain/CategoryChildren";

export default class CategoryChildrenModel extends CategoryChildren {
    id: number;
    title: string;
    image: string;

    constructor(data: any) {
        super();
        this.id = data.id;
        this.title = data.title;
        this.image = data.image;
    }
}