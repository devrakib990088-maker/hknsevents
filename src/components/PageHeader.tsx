import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2 to-dark" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-primary-light transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-primary-light">{breadcrumb}</span>
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
