import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayuot} from "../components/MainLayuot/MainLayuot";
import {AlbumsPage, CommentsPage, PostPage, UsersPage} from "../components/Pages";

const router=createBrowserRouter([
    {
        path:"",
        element:<MainLayuot/>,
        children:[{
            index:true,
            element:<Navigate to={MainLayuot}/>
        },
            {
                path:'users',
                element:<UsersPage/>
            },
            {
                path:'albums',
                element: <AlbumsPage/>
            },
            {
                path:'comments',
                element:<CommentsPage/>,
                children:[{
                    path:'posts/:postId',
                    element:<PostPage/>
                }]
            }
            ]
    }

])


export {router}