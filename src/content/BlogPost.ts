import { Comment } from "./Comment";
export class BlogPost {
    _id: string | undefined;
    title: string | undefined;
    postDate: string | undefined;
    featuredImage: string | undefined;
    post: string | undefined;
    postedBy: string | undefined;
    comments: Array<Comment> | undefined;
    category: string | undefined;
    tags: Array<string> | undefined;
    isPrivate: Boolean | undefined;
    views: number | undefined;
}