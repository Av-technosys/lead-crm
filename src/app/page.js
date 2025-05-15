import NavBar from "@/components/navBar";
import { cn } from "@/lib/utils";
import { ComponentDemo } from "./leadTable";

export default function Home() {
  return (
    <div className=" max-w-7xl mx-auto">
      <NavBar />
      <div className=" mt-12 flex max-w-7xl px-4 mx-auto w-full gap-6">
        <ProfileAnalyticCard color="blue" number={12312} title="Leads" />
        <ProfileAnalyticCard color="orange" number={12} title="Assigned" />
        <ProfileAnalyticCard color="zinc" number={12} title="Unassigned" />
      </div>
      <ComponentDemo />
    </div>
  );
}

// dashboard (only me)
// all leads (all leads)
// compare analytics
// upload csv

// bin -> admin
// profile
//        settings
//        logout
//        add new lids

function ProfileAnalyticCard({ color, number, title }) {
  const colors = [
    // Orange
    "bg-orange-50",
    "text-orange-600",
    "border-orange-400",

    // Blue
    "bg-blue-50",
    "text-blue-600",
    "border-blue-400",

    // Zinc
    "bg-zinc-50",
    "text-zinc-600",
    "border-zinc-400",
  ];

  return (
    <div
      className={cn(
        `flex flex-col gap-6 min-w-32 w-full py-6 px-8 rounded-xl  border-2`,
        `bg-${color}-50`,
        `border-${color}-400`
      )}
    >
      <p className="  text-gray-600 font-semibold">{title}</p>
      <p className={cn("text-5xl font-semibold", `text-${color}-600`)}>
        {number}
      </p>
    </div>
  );
}
