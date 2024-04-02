// "use client";

import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type Props = {
  message: string;
  fromEmail: string;
};

export default function ContactFormEmail({ message, fromEmail }: Props) {
  return (
    <Html>
      <Head />
      <Preview>
        New message from your personal portfolio website.
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border-black-custom my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from your portfolio website's contact form.
              </Heading>
              <Text>
                {message}
              </Text>
              <Hr />
              <Text>
                The sender's email is: {fromEmail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
