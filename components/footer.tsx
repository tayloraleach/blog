import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 flex justify-center">
      <div className="space-y-12 pt-16">
        <hr />
        <nav className="space-x-6 text-center text-sm font-medium">
          <Link href="https://github.com/tayloraleach">Github</Link>
          <Link href="https://www.linkedin.com/in/tayloraleach/">LinkedIn</Link>
        </nav>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            <Link href="/">{process.env.NEXT_PUBLIC_SITE_NAME}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
