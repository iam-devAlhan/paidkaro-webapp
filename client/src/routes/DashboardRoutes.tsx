import { Routes, Route } from "react-router-dom";
import DashboardHome from "../ui/components/dashboard/DashboardHome";
import Jobs from "../ui/components/dashboard/Jobs";
import Posts from "../ui/components/dashboard/Posts";
import Projects from "../ui/components/dashboard/Projects";
// import Dashboard from "../ui/components/dashboard/Dashboard";
import Payments from "../ui/components/dashboard/Payments";
// import Feeds from "../ui/components/dashboard/Feeds";

/* The features such as Feeds and Dashboard are commented out due to features in development. Right now the available routes are given as these */
export default function DashboardRoutes() {
  return (
    <>
      <Routes>
        <Route path="home" element={<DashboardHome />}>
          {/* <Route path="feeds" element={<Feeds />}></Route> */}
          <Route path="jobs" element={<Jobs />}></Route>
          <Route path="posts" element={<Posts />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          {/* <Route path="analytics" element={<Dashboard />}></Route> */}
          <Route path="payment" element={<Payments />}></Route>
        </Route>
      </Routes>
    </>
  );
}
