export class GalleryItem {
    public title: string;
    public img: string;
    public link: string;
    public description: string;
    public tags: string[];


    constructor(title: string, img: string, link: string, description: string, tags: string) {
        this.link = link;
        this.img = img;
        this.title = title;
        this.description = description;
        this.tags = tags.split(' ');
    }
}
