import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center text-center px-6">
      <p className="font-italiana text-8xl text-rose mb-4">404</p>
      <h1 className="font-italiana text-4xl text-text-dark mb-4">Page Not Found</h1>
      <p className="font-cormorant italic text-xl text-text-mid mb-8 max-w-md">
        This invite link may be invalid or expired. Please check the link shared with you.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 rounded-full text-white font-jost text-xs tracking-widest uppercase hover:scale-105 transition-all"
        style={{ background: 'linear-gradient(135deg,#C4607A,#C9964A)' }}
      >
        Go Home
      </Link>
    </div>
  )
}
