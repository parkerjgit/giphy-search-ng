export class Gif {
    id: string;
    title: string;
    images: object;
    keywords: Array<string>;
    rating: string;

    constructor(
        id: string,
        title: string,
        images: object,
        keywords: Array<string>,
        rating: string
    ) {
        this.id = id;
        this.title = title,
        this.images = images,
        this.keywords = keywords,
        this.rating = rating
    }
}