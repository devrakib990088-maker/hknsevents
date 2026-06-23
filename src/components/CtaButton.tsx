import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function CtaButton({ href, children }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 group text-sm sm:text-base"
    >
      <span>{children}</span>
      <ArrowRight
        size={18}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}
