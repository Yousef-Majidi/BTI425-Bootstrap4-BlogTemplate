import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/content/BlogPost';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _url = "blog-template-db-server-pucenyqt7-yousef-majidi.vercel.app";
  constructor(private http: HttpClient) { }

  // use HttpClient to return all of the posts available in the blogAPI for a specific page
  // using the path: /api/posts ? page = page & perPage=perPage where page is the first parameter to the
  // function and perPage is the constant defined(above).
  getPosts(page: string, tag: string | null | undefined, category: string | null | undefined): Observable<BlogPost[]> {
    let path = this._url + "/api/posts?page=" + page + "&perPage=" + perPage;
    // if the "tag" parameter is not null / undefined, then add & tag=tag to the path.
    if (tag != null && tag != undefined) {
      path += "&tag=" + tag;
    }
    // if the "category" parameter is not null /undefined, then add & category=category to the path
    if (category != null && category != undefined) {
      path += "&category=" + category;
    }
    return this.http.get<BlogPost[]>(path);
  }

  // return a single post available in the blogAPI for a specific page using
  // the path: /api/posts/id where id is the single parameter to the function.
  getPostById(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(this._url + "/api/posts/" + id);
  }

  // return an array of Categories in the format {cat: string, num: number} using path /api/categories
  getCategories(): Observable<{ cat: string, num: number }[]> {
    return this.http.get<{ cat: string, num: number }[]>(this._url + "/api/categories");
  }

  // return an array of "Tags" (represented as strings) using the path /api/tags
  getTags(): Observable<string[]> {
    return this.http.get<string[]>(this._url + "/api/tags");
  }

  // return an array of all blog posts using the path /api/posts?page=1&perPage=Number.MAX_SAFE_INTEGER
  getAllPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this._url + `/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`);
  }

  // invokes the post method of the HttpClient to create a new blog post using the path /api/posts
  // with the data parameter as the body of the request
  newPost(post: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(this._url + "/api/posts", post);
  }

  // invokes the put method of the HttpClient to update a blog post using the path /api/posts/id
  // with the data parameter as the body of the request
  updatePost(post: BlogPost): Observable<BlogPost> {
    return this.http.put<BlogPost>(this._url + `/api/posts/${post._id
      }`, post);
  }

  // invokes the delete method of the HttpClient to delete a blog post using the path /api/posts/_id
  // with the data parameter as the body of the request
  deletePost(id: string): Observable<BlogPost> {
    return this.http.delete<BlogPost>(this._url + `/api/posts/${id}`);
  }

  private featuredPosts: BlogPost[] = [
    {
      _id: "5e9f9c9f9c9f9c9f9c9f9c9",
      title: "Alberto Savoia Can Teach You About Interior",
      postDate: "15/02/2022",
      featuredImage: "/assets/img/featured-pic-1.jpeg",
      post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
      postedBy: "John Doe",
      comments: [],
      category: "Technology",
      tags: [],
      isPrivate: false,
      views: 12
    }, {
      _id: "5e9f9c9f9c9f9c9f9c9f9c9",
      title: "Lorem Ipsum Dolor Sit Amet Consectetur",
      postDate: "14/03/2021",
      featuredImage: "/assets/img/featured-pic-2.jpeg",
      post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
      postedBy: "John Doe",
      comments: [],
      category: "Business",
      tags: [],
      isPrivate: false,
      views: 22
    }, {
      _id: "5e9f9c9f9c9f9c9f9c9f9c9",
      title: "Alberto Savoia Can Teach You About Interior",
      postDate: "18/02/2022",
      featuredImage: "/assets/img/featured-pic-3.jpeg",
      post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrude consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
      postedBy: "John Doe",
      comments: [],
      category: "Technology",
      tags: [],
      isPrivate: false,
      views: 38
    }
  ];

  public getFeaturedPosts(): BlogPost[] {
    return this.featuredPosts;
  }

}
