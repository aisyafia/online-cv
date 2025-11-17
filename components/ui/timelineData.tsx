// timelineData.tsx
import React from "react";
import { experiencesData } from "@/lib/data";
import Image from "next/image";
import { LinkPreview } from "./link-preview";

export const timelineData = experiencesData.map((exp) => ({
  title: `${exp.year}`,
  content: (
    <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-md p-6 border border-neutral-200 dark:border-neutral-800">
      <h3 className="hidden md:block text-xl md:text-3xl font-bold text-violet-200 dark:text-violet-100 mb-4">
        {exp.title}
      </h3>
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        {exp.imageUrl && (
          <div className="relative w-40 h-20 flex-shrink-1 items-center">
            <Image
              src={exp.imageUrl}
              alt={exp.company}
              className="rounded-md object-contain"
            />
          </div>
        )}
        <div>
          <h4 className="text-xl font-semibold text-violet-300 dark:text-violet-200">
            {exp.company}
          </h4>
          <h5 className="text-sm font-mono text-violet-300 dark:text-violet-200">
            {exp.date}
          </h5>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {exp.location}
          </p>
          {exp.web && (
            <LinkPreview
              url={exp.web}
              className="px-4 py-2 text-xs rounded-full font-medium text-center bg-stone-950  hover:text-violet-400"
            >
              Visit Website
            </LinkPreview>
          )}
        </div>
      </div>

      {exp.intro && (
        <p className="mt-4 text-base text-neutral-700 dark:text-neutral-300">
          {exp.intro}
        </p>
      )}

      {exp.details && exp.details.length > 0 && (
        <ul className="mt-4 text-sm list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
          {exp.details.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  ),
}));
