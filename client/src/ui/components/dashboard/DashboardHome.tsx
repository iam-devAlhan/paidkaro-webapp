import DashboardContent from "./DashboardContent";
import DashboardSidebar from "./DashboardSidebar";
export default function DashboardHome() {
 
  return (
    <>
      <main className="d-flex flex-row align-items-start justify-content-center" style={{position: "relative"}}>
       
        <DashboardSidebar />
        
        <div className="container-fluid p-3">
          <DashboardContent />
        </div>
      </main>
    </>
  );
}
