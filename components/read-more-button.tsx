import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

export default function ReadMoreButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center space-x-2 rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white no-underline hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-800 dark:focus:ring-blue-500">
      <span>Read more</span>
      <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
