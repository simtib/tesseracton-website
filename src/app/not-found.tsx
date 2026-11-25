import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-40 pb-24 text-center">
      <h1 className="type-display text-ink">Page not found</h1>
      <p className="mt-4 text-secondary">The page you are looking for could not be found.</p>
      <Link href="/" className="control control-primary inline-block mt-8 px-6 py-3  font-semibold">Return home</Link>
    </div>
  );
}
