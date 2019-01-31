export class Gif {
    id: string;
    title: string;
    images: object;
    keywords: Array<string>;

    constructor(
        id: string,
        title: string,
        images: object,
        keywords: Array<string>
    ) {
        this.id = id;
        this.title = title,
        this.images = images,
        this.keywords = keywords
    }
}