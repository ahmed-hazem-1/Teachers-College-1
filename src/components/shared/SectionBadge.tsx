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
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm mb-6',
        className,
      )}
    >
      {icon}
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  );
}
