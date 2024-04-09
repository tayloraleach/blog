import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface Props {
  children: ReactNode;
  className?: string;
}

export function Card({ children }: Props) {
  return <div className="rounded-lg border bg-card text-card-foreground shadow-sm">{children}</div>;
}

function CardHeader({ className, children }: Props) {
  return <div className={cn('flex flex-col space-y-1.5 p-6', className)}>{children}</div>;
}

function CardTitle({ className, children }: Props) {
  return (
    <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)}>
      {children}
    </h3>
  );
}

function CardDescription({ className, children }: Props) {
  return <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>;
}

function CardContent({ children }: { children: ReactNode }) {
  return <div className="p-6 pt-0">{children}</div>;
}

function CardFooter({ className, children }: Props) {
  return <div className={cn('flex items-center p-6 pt-0', className)}>{children}</div>;
}

export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
