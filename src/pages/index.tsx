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
      <main className="flex min-h-screen items-center justify-center gap-12">
        <div>
          <SignUp
            path="/"
            routing="path"
            afterSignInUrl="/home"
            afterSignUpUrl="/home"
            redirectUrl="/home"
            appearance={{
              variables: {
                colorBackground: "#1f2937",
              },
            }}
          />
        </div>
        <div>
          <h1 className="mb-2 text-4xl">Welcome to Clerk Example!</h1>
          <p className="">This app explores clerk.dev</p>
        </div>
      </main>
    </>
  );
};

export default Home;
