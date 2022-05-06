import {randomBytes} from 'crypto';
const posts=new Map();
export const save =({Text})=>{
    const post ={id: randomBytes(16).toString('hex'),Text,postedDate: new Date()};
    posts.set(post.id,post);
    return post;
};
export const get=(id)=>{
    const post=posts.get(id);
    if(!post){
        throw new Error('Not fount for the ID ${id}');
    }
    return post;
};