
const baseURL= 'https://jsonplaceholder.typicode.com'
const albums='/albums'
const comments='/comments'
const posts='/posts'
const users='/users'
const urls={
    albums,
    comments,
    posts:{
        byId:(id)=>`${posts}/${id}`
    },
    users
}
export {
    baseURL,
    urls
}