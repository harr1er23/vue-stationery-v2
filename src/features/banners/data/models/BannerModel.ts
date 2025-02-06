import Bunner from "../../domain/entities/Bunner";

export default class BannerModel extends Bunner {
    id: number;
    name: string;
    imageUrl: string;

    constructor(data: any) {
        super();
        this.id = data.id;
        this.name = data.name;
        this.imageUrl = data.url;
    }
}