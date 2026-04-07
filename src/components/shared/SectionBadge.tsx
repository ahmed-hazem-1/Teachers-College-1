import type { ReactNode } from 'react';

interface SectionBadgeProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export default function SectionBadge({ icon, label, className }: SectionBadgeProps) {
  return (
    <div
      className={joinClasses(
        'inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white border border-gray-200 shadow-[0_10px_22px_-14px_rgba(0,0,0,0.35)] mb-4 md:mb-6',
        className,
      )}
    >
      <span className="w-7 h-7 rounded-full bg-red flex items-center justify-center text-navy flex-shrink-0">
        {icon}
      </span>
      <span className="text-sm md:text-base font-medium text-navy">{label}</span>
    </div>
  );
}
