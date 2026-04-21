import { cn } from "@/lib/utils";

export default function IconButton({ icon: Icon, className, ...props }) {
  return (
    <button
      className={cn(
        "p-2 rounded-full hover:bg-gray-100 transition-colors text-text-secondary hover:text-foreground cursor-pointer",
        className
      )}
      {...props}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}
