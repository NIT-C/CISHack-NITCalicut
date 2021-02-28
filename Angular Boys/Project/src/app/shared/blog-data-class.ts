import {Comments} from './comments_class';

export class blog_class{
    id:any;
    doc_id: any;
    title:string;
    blog_data:string;
    image:string[];
    image_thumb:string[];
    links:string[];
    no_of_comments:number;
    likes:number;
    date:string;
    tags:string[];
    author:string;
    avatar:string;
    comments:Comments[];
    cat_id :any;
}