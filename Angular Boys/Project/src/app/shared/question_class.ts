import {Answers} from './answers_class';
export class Question{
    id:any;
    doc_id: any;
    topic_id:any;
    catogory:string;
    title:string;
    question:string;
    image:string[];
    links:string[];
    no_of_answers:number;
    likes:number;
    date:string;
    tags:string[];
    author:string;
    sub_catorgory:string;
    avatar:string;
    answers:Answers[];
    cat_id :any;
}