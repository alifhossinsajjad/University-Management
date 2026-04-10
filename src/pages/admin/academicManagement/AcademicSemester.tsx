import React from "react";
import { useGetAllSemesterQuery } from "../../../redux/feature/academicSemester/academicSemesterApi";

const AcademicSemester = () => {

const {data:semesterDat} = useGetAllSemesterQuery(undefined)

console.log(semesterDat);

  return <div>AcademicSemester</div>;
};

export default AcademicSemester;
