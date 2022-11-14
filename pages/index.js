import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div lang="en-US" className="bg-neutral-800">
      <Head>
        <title>El3troNam Studios</title>
        <meta name="description" content="El3ctroNam Studios Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Inter bg-gray-850">
        <section className="min-h-screen">
          <nav className="py-8 px-8 mb-20 flex justify-between bg-gradient-to-b from-black/60 to-white/0">
            <Link href="./">
              <h1
                className="cursor-pointer font-extrabold text-5xl text-white hover:underline"
                href="./index.js"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-hot-pink to-regal-blue">
                  El3troNam{" "}
                </span>
                Studios
              </h1>
            </Link>
            <ul className="flex items-center">
              <li>
                <a className="text-white text-2xl px-4 ml-4 hover:underline">
                  <Link href="/contact">Contact &rarr;</Link>{" "}
                  {/*new way to use <Link> in nextjs 13 https://nextjs.org/blog/next-13#nextlink*/}
                </a>
              </li>
            </ul>
          </nav>

          <div className="px-36">
            <div className="pt-10 lg:pt-36">
              <h2 className="text-8xl font-extrabold text-white">
                &lsquo;ello there!👋
              </h2>
              <h3 className="text-white text-3xl font-semibold">
                We <span className="line-through"> are</span>{" "}
                <span className="text-slate-600/90">
                  do miniscule amounts of tomfoolery
                </span>
              </h3>
            </div>

            <div className="pt-10">
              <Link href="/explore">
                <button
                  type="button"
                  className="transition-all duration-150 ease-linear bg-hot-pink text-white px-7 py-2.5 rounded-md hover:drop-shadow-lg hover:bg-regal-blue hover:scale-105 focus:outline-none focus:ring focus:ring-fuchsia-900"
                >
                  Explore
                </button>
              </Link>
              <Link href="/learn">
                <button
                  type="button"
                  className="px-8 py-3 ml-2 text-gray-400 outline-none hover:underline hover:text-white transition-all duration-75"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
