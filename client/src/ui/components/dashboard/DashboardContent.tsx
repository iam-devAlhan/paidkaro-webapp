import { Outlet } from "react-router-dom"
export default function DashboardContent() {
    return (
        <>
            <div className="container-fluid">
                <Outlet />
            </div>
        </>
    )
}