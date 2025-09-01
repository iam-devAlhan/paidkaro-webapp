import { useUserContext } from "../context/AuthContext";
import AuthLoginComponent from "../ui/components/auth/AuthLoginComponent";
import DashboardRoutes from "./DashboardRoutes";
import Loading from "../ui/components/auth/Loading";

export default function ProtectedRoutes() {
    const { currentUser, isLoading } = useUserContext()
    const isAuthenticated =  currentUser

    if (isLoading) {
        return <Loading />
    }
    
    return (
        <>
            {isAuthenticated !== null ? <DashboardRoutes /> : <AuthLoginComponent />}
        </>
    )
}