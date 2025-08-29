import DashboardContent from "./DashboardContent";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardHome() { 
  return (
    <>
      <main className="d-flex flex-row" style={{height: "100vh", overflow: "hidden"}}>
        <DashboardSidebar />
        <div className="flex-grow-1 p-3" style={{overflowY: "auto"}}>
          <DashboardContent />
        </div>
      </main>
    </>
  );
}
