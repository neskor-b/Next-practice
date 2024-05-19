import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full absolute text-white z-10">
      <nav className="conatiner relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl hover:underline">Home</Link>
        <div className="space-x-4 text-xl">
          <Link className="hover:underline" href="/performance">Performance</Link>
          <Link className="hover:underline" href="/scale">Scale</Link>
          <Link className="hover:underline" href="/reliability">Reliability</Link>
        </div>
      </nav>
    </header>
  );
}