import {
    createBrowserRouter, Navigate,
} from "react-router-dom";

import {MainLayuot} from "../components/layouts/MainLayuot/MainLayuot";
import {AlbumsPage, CommentsPage, NotFoundPage, PostPage, TodosPage} from "../components/Pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayuot/>,
        children:[
            {
                index: true,
                element:<Navigate to={'todos'}/>
            },
            {
                path:'todos',
                element:<TodosPage/>
            },
            {
                path:'albums',
                element:<AlbumsPage/>
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
    },
    {
        path:'*',
        element:<NotFoundPage/>
    }
]);
export {router}

