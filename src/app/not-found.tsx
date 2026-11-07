import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-40 pb-24 text-center">
      <h1 className="text-4xl font-bold text-white">Page not found</h1>
      <p className="mt-4 text-slate-300">The page you are looking for could not be found.</p>
      <Link href="/" className="inline-block mt-8 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold">Return home</Link>
    </div>
  );
}
