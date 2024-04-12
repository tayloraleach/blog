import React from 'react';

export default function ErrorText({ children }: { children: string }) {
  return (
    <p className="text-red-500 bg-black px-4 py-3 font-mono tracking-tight rounded-lg">
      {children}
    </p>
  );
}
