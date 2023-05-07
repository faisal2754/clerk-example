import { type AppType } from "next/dist/shared/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{ baseTheme: dark }}
      localization={{
        signUp: {
          start: {
            title: "Sign up for Clerk Example",
            subtitle: "Create an account to get started",
          },
        },
      }}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default MyApp;
