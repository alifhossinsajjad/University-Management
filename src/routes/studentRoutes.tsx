import StudentDashboard from "../pages/students/StudentDashboard";
import StudentOfferedCourse from "../pages/students/StudentOfferedCourse";

export const studentPaths = [
  {
    name: "Student Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Offered Course",
    path: "student-offered-course",
    element: <StudentOfferedCourse />,
  },
];
