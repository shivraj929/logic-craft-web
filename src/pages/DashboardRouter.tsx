import { useAuth } from "@/hooks/useAuth";
import StudentDashboard from "./dashboards/StudentDashboard";
import TeacherDashboard from "./dashboards/TeacherDashboard";
import SchoolAdminDashboard from "./dashboards/SchoolAdminDashboard";
import SuperAdminDashboard from "./dashboards/SuperAdminDashboard";

const DashboardRouter = () => {
  const { hasRole, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Priority order: Super Admin > School Admin > Teacher > Student
  if (hasRole('super_admin')) {
    return <SuperAdminDashboard />;
  } else if (hasRole('school_admin')) {
    return <SchoolAdminDashboard />;
  } else if (hasRole('teacher')) {
    return <TeacherDashboard />;
  } else {
    // Default to student dashboard for all other roles or no specific role
    return <StudentDashboard />;
  }
};

export default DashboardRouter;