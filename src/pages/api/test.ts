import { NextApiRequest, NextApiResponse } from "next";
import type { UserWebhookEvent } from "@clerk/clerk-sdk-node";

import { prisma } from "@/server/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const event = req.body as UserWebhookEvent;

  if (event.type === "user.created") {
    await prisma.user.create({
      data: {
        clerkId: event.data.id,
        firstName: event.data.first_name,
        lastName: event.data.last_name,
        email: event.data.email_addresses[0]?.email_address,
        phone: event.data.phone_numbers[0]?.phone_number,
      },
    });
  }

  res.status(200).json({ text: "Hello" });
};

export default handler;
