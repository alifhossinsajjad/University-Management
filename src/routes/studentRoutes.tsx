import StudentDashboard from "../pages/students/StudentDashboard";
import StudentOfferedCourse from "../pages/students/StudentOfferedCourse";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Dashboard",
    path: "student-offered-course",
    element: <StudentOfferedCourse />,
  },
];
