import { Home } from "../component/page/Home";
import { ManageTeam } from "../component/page/ManageTeam";


export const routers=[
    {
        path: '',
        element: <Home/>,
    },
    {
        path: '/team',
        element: <ManageTeam/>,
    
    },
    
]