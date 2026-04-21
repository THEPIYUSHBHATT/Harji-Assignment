"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Map,
  Activity,
  HeartPulse,
  ShoppingBag,
  Sparkles,
  CreditCard,
  Wallet,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Career Roadmap", href: "/career-roadmap", icon: Map },
  { name: "Session", href: "/session", icon: Activity },
  { name: "Monitor Wellness", href: "/monitor", icon: HeartPulse },
  { name: "Consultant Marketplace", href: "/marketplace", icon: ShoppingBag },
  { name: "ConsultOpen AI", href: "/ai", icon: Sparkles },
];

const BOTTOM_ITEMS = [
  { name: "Subscription", href: "/subscription", icon: CreditCard },
  { name: "Wallet & Payments", href: "/wallet", icon: Wallet },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggle-sidebar", handleToggle);
    return () => window.removeEventListener("toggle-sidebar", handleToggle);
  }, []);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const NavLink = ({ item }) => {
    const isActive = pathname === item.href;
    const Icon = item.icon;

    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium",
          isActive
            ? "bg-primary text-white"
            : "text-text-secondary hover:bg-gray-50 hover:text-foreground"
        )}
      >
        <Icon className="w-5 h-5" />
        {item.name}
      </Link>
    );
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={cn(
        "bg-sidebar border-r border-gray-100 flex flex-col h-screen shrink-0 fixed left-0 top-0 z-50 transition-transform duration-300 w-64",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6 border-b border-gray-100 mb-6 flex items-center justify-between">
          <Link href="/" className="flex items-center" style={{ gap: '6.61px', width: '151px', height: '27.57px' }}>
            <Image 
              src="/consult-logo.svg" 
              alt="ConsultOpen Icon" 
              width={29} 
              height={28} 
              priority
              style={{ width: '28.66px', height: '27.57px' }}
            />
            <span className="text-xl font-bold text-foreground">ConsultOpen</span>
          </Link>
          <button 
            className="lg:hidden p-2 text-gray-500 hover:bg-gray-50 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pb-4">
        <div className="space-y-1 mb-8">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </div>

        <div className="space-y-1">
          {BOTTOM_ITEMS.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium text-text-secondary hover:bg-red-50 hover:text-red-600 mt-2 cursor-pointer">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      <div className="p-4 border-t border-gray-100 mt-auto">
        <div className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors group">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
              <Image 
                src="/Student Avatar.svg" 
                alt="Alex Miller" 
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-0.5">
              <p className="text-[13px] font-semibold text-[#1E293B] leading-none">Alex Miller</p>
              <div>
                <span className="inline-flex items-center justify-center w-[39.14px] h-[16px] bg-[#F59E0B]/10 text-[#F59E0B] text-[8px] font-bold uppercase rounded-[14px]">
                  ELITE
                </span>
              </div>
            </div>
          </div>
          <button className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity p-1">
             <Image
              src="/three-dot.svg"
              alt="Three Dots"
              width={4}
              height={16}
             />
          </button>
        </div>
      </div>
    </aside>
    </>
  );
}
