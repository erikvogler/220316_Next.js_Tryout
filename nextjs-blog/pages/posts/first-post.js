import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post, Yay</h1>
      <h2>
        <Link href="/">
          <a>Beam me up, Scotty</a>
        </Link>
      </h2>
    </>
  )
}
