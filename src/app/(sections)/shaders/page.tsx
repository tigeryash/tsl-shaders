"use client";
import { projects } from "@/constants/projects";
import { useRouter } from "next/navigation";

const ShadersPage = () => {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-[2rem] text-center mx-auto sm:text-left">
          TSL Shaders
        </h1>
        <div className=" grid grid-cols-3 gap-[16px]">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col border p-[16px] rounded-[8px] cursor-pointer"
              onClick={() => {
                router.push("/shaders/" + project.slug);
              }}
            >
              <h2 className="text-[1.5rem]">{project.title}</h2>

              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShadersPage;
