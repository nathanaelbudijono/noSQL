import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function tokenMiddleware(handler: any) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.url && req.url.startsWith("/api/auth/")) {
      const token = req?.cookies?.token as string;
      if (!token) {
        return res.status(401).json({ error: "Unauthorized: Token not found" });
      }
      try {
        if (req.url.startsWith("/api/auth/")) {
          jwt.verify(
            token.substring(1, token.length - 1),
            process.env.NEXT_PUBLIC_TOKEN_SECRET as string
          );

          return handler(req, res);
        } else {
          return res.status(401).json({ error: "Unauthorized: Invalid token" });
        }
      } catch (err) {
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
      }
    } else if (req.url && req.url.startsWith("/api/public/")) {
      return handler(req, res);
    }
  };
}
