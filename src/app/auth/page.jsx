"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    localStorage.setItem("token", "ha lele access");
    router.push("/");
  };
  let link =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/037c1007-3a2c-412e-abf5-a09b3d971575/derfl1p-a3a7951b-af02-4f84-932c-760cfc3be79a.jpg/v1/fit/w_540,h_752,q_70,strp/almight___my_hero_academia_by_pau316_derfl1p-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzUyIiwicGF0aCI6IlwvZlwvMDM3YzEwMDctM2EyYy00MTJlLWFiZjUtYTA5YjNkOTcxNTc1XC9kZXJmbDFwLWEzYTc5NTFiLWFmMDItNGY4NC05MzJjLTc2MGNmYzNiZTc5YS5qcGciLCJ3aWR0aCI6Ijw9NTQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Lh7sKUFMvizr2szS98HY5Xj2K4Nh9TqLWZa9kO4lIkQ";
  return (
    <div className="flex items-center gap-12">
      {/* LEFT */}
      <section className="flex items-center justify-center w-full h-screen max-w-3xl bg-center bg-no-repeat bg-cover bg-singup">
        <div className="w-3/4 w-full p-12 rounded-md bg-zinc-700 text-zinc-200 ">
          <div className="">
            <h1 className="text-5xl ">
              A PLATFORM FOR ALL YOUR SOCIAL PLATFORMS
            </h1>
          </div>

          <img src="/assets/cat.svg" alt="cat icon" className="mx-auto" />
          <p className="text-center">
            Automate Your Social Media Accounts with ease.
          </p>
        </div>
      </section>

      {/* RIGHT */}
      <section className="flex flex-col items-center justify-center ">
        {/* CONTAINER */}
        <div className="">
          {/* HEADER */}
          <header className="flex items-center gap-1 mb-10">
            <img src="/assets/cat.svg" alt="cat icon" className="w-12" />
            <h1 className="text-3xl font-semibold">CatSocial</h1>
          </header>

          {/* HEADER 2 */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold ">Hi,</h1>
            <p className="">Enter your email and password to login</p>
          </header>

          {/* FORM  CONTAINER*/}
          <div className="grid gap-4 mb-4">
            {/* EMAIL */}
            <label>
              <span htmlFor="email" className="font-semibold label">
                Email
              </span>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full input input-bordered"
              />
            </label>
            {/* PASSWORD*/}
            <label>
              <span htmlFor="password" className="font-semibold label">
                Password
              </span>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full input input-bordered"
              />
            </label>
          </div>
          {/* REMEMBER ME AND FORGOT PASSWORD */}
          <div className="flex flex-wrap items-center justify-between mb-4">
            <div className="gap-2 label">
              <input type="checkbox" defaultChecked className="checkbox" />
              <span className="text-base label-text">Remember me</span>
            </div>
            <a className="underline cursor-pointer" href={link} target="_blank">
              Forgot Password?
            </a>
          </div>

          {/* ACTION BTNS */}
          <div className="flex gap-8 mb-10">
            <button onClick={handleClick} className="btn btn-primary btn-wide ">
              Login
            </button>
            <button onClick={handleClick} className="btn btn-outline btn-wide">
              Sign Up
            </button>
          </div>

          {/* OPTIONAL ACTION BTNS */}
          <div className="text-center">
            <p className="mb-4">Or, login with</p>
            <div className="flex flex-wrap items-center justify-center w-full gap-8">
              <button className="btn btn-outline btn-sm">Facebook</button>
              <button className="btn btn-outline btn-sm">Linkdin</button>
              <button className="btn btn-outline btn-sm">Google</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
