"use client";

import { Bell, Search, MessageSquare, Menu } from "lucide-react";
import IconButton from "../ui/IconButton";

export default function TopBar() {
  const toggleSidebar = () => {
    window.dispatchEvent(new Event("toggle-sidebar"));
  };

  return (
    <header className="h-20 bg-background border-b border-gray-100 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-gray-500 hover:bg-gray-50 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search internships, certifications, consultants..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
          />
        </div>
      </div>
      </div>

      <div className="flex items-center gap-4 ml-4">
        <div className="flex items-center gap-1 border-r border-gray-200 pr-4">
          <IconButton icon={Bell} />
          <IconButton icon={MessageSquare} />
        </div>
        <button className="bg-foreground text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm cursor-pointer">
          Upgrade Plan
        </button>
      </div>
    </header>
  );
}
