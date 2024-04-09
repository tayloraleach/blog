import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

export default function ReadMoreButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center space-x-2 rounded-lg bg-accent px-3 py-2 text-center text-sm font-medium no-underline focus:outline-none focus:ring-2">
      <span>Read more</span>
      <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
