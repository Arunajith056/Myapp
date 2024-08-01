"use client";

import { PlaceholdersAndVanishInput } from "./ui/search";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Matering Web Design",
    "Angular js Development",
    "Ecommerce Website",
    "UI / UX Desgn",
    "How to Get a Job in WillWare",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[10rem] flex flex-col justify-center  items-center px-4">
      
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
