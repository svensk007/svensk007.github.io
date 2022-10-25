import Head from "next/head";

export default function Home() {
  return (
    <div lang="en-US" className="bg-neutral-800">
      <Head>
        <title>Contact</title>
        <meta name="description" content="El3ctroNam Studios Portfolio"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Inter bg-gray-850">
        <section className="min-h-screen">
          <nav className="py-8 px-8 mb-20 flex justify-between bg-gradient-to-b from-black/60 to-white/0">
            <h1
              className="cursor-pointer font-extrabold text-5xl text-white hover:underline"
              href="./index.js"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-hot-pink to-regal-blue">
                El3troNam{" "}
              </span>
              Studios
            </h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="text-white text-2xl px-4 ml-4 hover:underline"
                  href="./contact"
                >
                  &larr; Back
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
