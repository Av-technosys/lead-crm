import Link from "next/link";
import React from "react";

const NavBar = () => {
  const name = "Jon Deo";
  return (
    <div className=" flex px-4 py-5 mx-auto items-center justify-between max-w-7xl w-full gap-6">
      <div className=" flex items-center gap-4">
        {navLinks.map((items, index) => {
          return (
            <Link
              key={index}
              className=" px-2 font-semibold hover:underline cursor-pointer"
              href={items.link}
            >
              {items.title}
            </Link>
          );
        })}
      </div>
      <ProfileIcon name={name} />
    </div>
  );
};

export default NavBar;

const navLinks = [
  {
    link: "/dashboard",
    title: "Dashboard",
  },
  {
    link: "/all-leads",
    title: "All leads",
  },
  {
    link: "/upload-csv",
    title: "Upload CSV",
  },
  //   {
  //     link: "/compare_analytics",
  //     title: "Compare Analytics",
  //   },
];

function ProfileIcon({ name }) {
  function getInitials(fullName) {
    if (typeof fullName !== "string") return "";

    const parts = fullName.trim().split(/\s+/);

    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0][0].toLowerCase();

    const firstInitial = parts[0][0].toLowerCase();
    const secondInitial = parts[1][0].toLowerCase();

    return firstInitial + secondInitial;
  }

  const initials = getInitials(name);
  console.log(name);

  return (
    <div className=" uppercase rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center font-bold size-12 cursor-pointer square">
      {initials}
    </div>
  );
}
