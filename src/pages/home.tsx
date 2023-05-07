import { useUser, useClerk } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center gap-12">
        {user && <div>Hi {user.fullName}</div>}
        <button onClick={handleSignOut}>Sign Out</button>
      </main>
    </>
  );
};

export default Home;
