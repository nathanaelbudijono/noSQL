import jwt from "jsonwebtoken";
import { GetServerSidePropsContext } from "next";

export async function validateUser(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies.token as string;
  if (token) {
    const userToken: any = await new Promise((resolve, reject) => {
      jwt.verify(
        token.substring(1, token.length - 1),
        process.env.NEXT_PUBLIC_TOKEN_SECRET as string,
        {},
        (err, token) => {
          if (err) {
            reject(err);
          }
          resolve(token);
        }
      );
    });
    if (userToken.role === "user") {
      return {
        props: {
          user: userToken,
        },
      };
    } else {
      return {
        redirect: {
          destination: "http://localhost:3000/admin/dashboard",
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}
