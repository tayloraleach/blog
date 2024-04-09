import React from 'react';
import Link from 'next/link';

type TagData = {
  data: string[]; // TODO: Link to tag page
};

export default function Tags({ data }: TagData) {
  if (data.length === 0) return null;
  return (
    <div className="flex gap-2">
      {data.map((tag) => (
        <Link
          href="/"
          className="no-underline border rounded text-xs py-1 px-2 transition-colors hover:border-gray-500">
          {tag}
        </Link>
      ))}
    </div>
  );
}
