import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  afterAuth(auth, req, evt) {
    console.log(auth);
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};
