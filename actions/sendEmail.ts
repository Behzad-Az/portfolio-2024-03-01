"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async(formData: FormData) => {
  const fromEmail = formData.get("fromEmail");
  const message = formData.get("message");

  if (!validateString(fromEmail, 6, 100)) {
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 6, 5000)) {
    return { error: "Invalid message" };
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.MY_EMAIL_ADDRESS || "",
    subject: "Message from contact form",
    reply_to: fromEmail as string,
    text: message as string
  });
  
};