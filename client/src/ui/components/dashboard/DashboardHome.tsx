import DashboardContent from "./DashboardContent";
import DashboardSidebar from "./DashboardSidebar";
import { useState } from "react";
export default function DashboardHome() {
  const [isToggle, setIsToggle] = useState(true);
  return (
    <>
      <main className="d-flex flex-row align-items-start justify-content-center">
       
        <DashboardSidebar isOpen={isToggle} />
         <button
          type="button"
          className="btn"
          style={{
            width: "fit-content",
            color: "#009e84",
            marginTop: "10px",
            fontSize: "30px",
          }}
          onClick={() => setIsToggle((prev):any => !prev)}
        >
          <i className="bi bi-caret-left-fill"></i>
        </button>
        <div className="container-fluid p-3">
          <DashboardContent />
        </div>
      </main>
    </>
  );
}
