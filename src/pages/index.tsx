import { type NextPage } from "next";
import Head from "next/head";
import { SignUp } from "@clerk/nextjs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clerk Example</title>
        <meta name="description" content="Clerk example app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div>hi</div>
        <div>
          <SignUp path="/" routing="path" signInUrl="/sign-in" />
        </div>
      </main>
    </>
  );
};

export default Home;
