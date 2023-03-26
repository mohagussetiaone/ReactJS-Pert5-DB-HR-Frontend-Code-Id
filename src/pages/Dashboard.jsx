import React from "react";
import { Outlet } from "react-router-dom";

const Navigate = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Countries", href: "/countrie", current: false },
  { name: "Department", href: "/department", current: false },
  { name: "Employees", href: "/employee", current: false },
  { name: "Jobs", href: "/jobs", current: false },
  { name: "Locations", href: "/location", current: false },
  { name: "Region", href: "/region", current: false },
];
export default function Dashboard() {
  return (
    <div>
      {Navigate.map((item) => {
        return (
          <a key={item.name} href={item.href} style={{ padding: "3px", textDecoration: "none", backgroundColor: "white", color: "blue", border: "1px solid black" }}>
            {item.name}
          </a>
        );
      })}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
