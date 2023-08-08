import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState(repositories);

  return (
    <section className="bg-[#f4f3ee] -mt-40 dark:bg-[#1F1F1F] pb-20 md:pb-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start md:pt-40 mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brown-300 my-10 md:my-20 text-center md:text-left">
            Latest Code
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className="mb-10 md:mb-0 px-6 py-3 rounded-md bg-[#483A33] hover:bg-[#625041] dark:bg-[#00B8AE] dark:hover:bg-[#00A39B] shadow-lg text-xl font-semibold flex items-center md:text-[#F4F3EE] dark:text-[#F3F7F3]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              {/* ... SVG path data */}
            </svg>
            <p className="ml-2">View GitHub</p>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Single github Repo */}

          {repos &&
            repos.map((latestRepo, idx) => (
              <GithubRepoCard latestRepo={latestRepo} key={idx} />
            ))}
        </div>
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="github-repo bg-white dark:bg-[#242424] p-6 rounded-lg shadow-md">
      <h1 className="font-semibold text-xl text-[#483A33] dark:text-[#00CCC2] mb-2">
        {latestRepo.name}
      </h1>
      <p className="text-base font-normal text-[#927563] dark:text-[#EBFFFE] mb-4">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className="font-semibold group flex items-center text-[#483A33] dark:text-[#C2FFFC]"
      >
        <p className="mr-1">View Repository</p>
        <div className="transform group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};
