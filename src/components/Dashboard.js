import React from "react";
import "../components/Dashboard.css";

function Dashboard() {
  const org = 128;
  const member = 256;
  const job = 512;
  return (
    <div className="dashboard">
      <span>
        <p>องค์กรที่เข้าร่วม</p>
        <p>{org}</p>
      </span>
      <span>
        <p>สมาชิก</p>
        <p>{member}</p>
      </span>
      <span>
        <p>งานอาสาทั้งหมด</p>
        <p>{job}</p>
      </span>
    </div>
  );
}

export default Dashboard;
