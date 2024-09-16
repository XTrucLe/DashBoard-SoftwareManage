import SideBar from "./Sidebar"
import { TopHeader } from "./TopHeader"


// eslint-disable-next-line react/prop-types
export const DefaultLayout = ({children}) => {

    return (
        <div className="w-full min-h-screen flex flex-col">
            <div className="flex h-full">
                <div className="w-auto sticky h-screen top-0 z-50">
                    <SideBar />
                </div>
                <div className="w-full flex flex-col">
                    <div className="bg-white shadow h-16">
                        <TopHeader />
                    </div>
                    <div className="flex-1 p-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}

