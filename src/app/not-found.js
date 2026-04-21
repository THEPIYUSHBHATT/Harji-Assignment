import Link from "next/link";
import { Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <Wrench className="w-10 h-10 text-primary" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Development Under Process</h2>
      <p className="text-text-secondary max-w-md mb-8">
        This section is currently under development. Please check back later!
      </p>
      <Link 
        href="/" 
        className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
      >
        Return to Dashboard
      </Link>
    </div>
  );
}
