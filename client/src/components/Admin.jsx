import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import AdminClasses from './AdminClasses';
import AdminClass from './AdminClass';
import AdminStudent from './AdminStudent';

import '../styles/css/Admin.css';

export default function Admin() {
  const [classId, setClassId] = useState(0);
  const [studentId, setStudentId] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminClasses classId={classId} setClassId={setClassId}/>}/>
        <Route path="/class" element={<AdminClass classId={classId} studentId={studentId} setStudentId={setStudentId}/>}/>
        <Route path="/student" element={<AdminStudent studentId={studentId}/>}/>
      </Routes>
    </>
  );
}
