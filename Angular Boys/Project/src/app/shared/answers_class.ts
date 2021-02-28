import {Comments} from './comments_class';

export class Answers{
    id:number;
    author:string;
    upvotes:number;
    downvotes:number;
    avatar:string;
    answer:string;
    links:any;
    image:string[];
    comments:Comments[];
    doc_id :any;
    vote_status:any;
}
