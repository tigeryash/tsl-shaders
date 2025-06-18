import { routes } from "@/constants/routes";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>
        Yash&apos;s Frontend Notebook
        <p>Where I document my journey of learning frontend development</p>
      </h1>
      <nav className="flex gap-4">
        <ul className="flex gap-4">
          {Object.entries(routes).map(([path, name]) => (
            <li
              key={path}
              className="p-[8px] rounded-[8px] cursor-pointer hover:bg-[#000]"
            >
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
