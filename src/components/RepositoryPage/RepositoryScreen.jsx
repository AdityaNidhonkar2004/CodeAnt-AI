import React, { useState } from "react";
import Sidebar from "./Sidebar";
import RepositoryList from "./RepositoryList";
import Header from "./Header";


const RepositoryScreen = () => {
  const [showBlackDrop , setShowBlackDrop] = useState(false)
  const repositories = [
    {
      name: "design-system",
      type: "Public",
      language: "React",
      size: "7320 KB",
      updated: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      type: "Private",
      language: "Javascript",
      size: "5871 KB",
      updated: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      type: "Private",
      language: "Python",
      size: "4521 KB",
      updated: "5 days ago",
    },
    {
      name: "mobile-app",
      type: "Public",
      language: "Swift",
      size: "3096 KB",
      updated: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      type: "Private",
      language: "Java",
      size: "6210 KB",
      updated: "6 days ago",
    },
    {
      name: "blog-website",
      type: "Public",
      language: "HTML/CSS",
      size: "1876 KB",
      updated: "4 days ago",
    },
    {
      name: "social-network",
      type: "Private",
      language: "PHP",
      size: "5432 KB",
      updated: "7 days ago",
    },
  ];
  return (    
    <div className="flex font-lato">
      <div className="hidden md:flex"><Sidebar/></div>
      <div className="flex-1 flex flex-col bg-[#FAFBFB]">
        <main className="md:mx-10  md:my-10 border-2 border-[#EAECEC] rounded-xl bg-white">
        <Header showBlackDrop={showBlackDrop} 
        setShowBlackDrop={setShowBlackDrop} />
         <div className={`${showBlackDrop === true ? `brightness-75`:``}`}><RepositoryList repositories={repositories} /></div>
        </main>
      </div>
    </div>
  );
};

export default RepositoryScreen;
