"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

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

  let data;
  try {
    data = await resend.emails.send({
      from: "Personal Website Contact From <onboarding@resend.dev>",
      to: process.env.MY_EMAIL_ADDRESS || "",
      subject: "Message from contact form",
      reply_to: fromEmail as string,
      react: React.createElement(
        ContactFormEmail, 
        { 
          message: message as string, 
          fromEmail: fromEmail as string
        }
      )
    });
    return { data };
  } catch(err: unknown) {
    return { error: getErrorMessage(err) };
  }
  return { data };
};