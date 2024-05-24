import { Routes, Route } from "react-router-dom";
import DashboardMain from "@pages/DashboardMain";
import DashboardRoles from "@pages/DashboardRoles";
import DashboardUsers from "@pages/DashboardUsers";
import AddUser from "@pages/AddUser";
import EditUser from "@pages/EditUser";
import DashboardReports from '@pages/DashboardReports';

export default function DashboardRouter() {
  return (
    <Routes>
    <Route index element={<DashboardMain />} />
    <Route path="/Users" element={<DashboardUsers />} />
    <Route path="/Reportes" element={<DashboardReports />} />
    <Route path="/Roles" element={<DashboardRoles />} />
    <Route path="/AddUser" element={<AddUser />} />
    <Route path="/Reportes/:id" element={<EditUser />} />

  </Routes>
  )
}
