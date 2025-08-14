import * as React from "react";
import type { formData } from "@/app/contact/page";
import { Html, Body, Text } from "@react-email/components";

export default function EmailTemplate(props: formData) {
  const { firstname, lastname, email, reason, message } = props;
  return (
    <Html>
      <Body>
        <h2>Someone has reach out to you!</h2>
        <Text>
          Name: {firstname} {lastname}
        </Text>
        <Text>Email: {email}</Text>
        <Text>For the following reason:</Text>
        {reason.map((r) => (
          <Text key={r}>{r}</Text>
        ))}
        <Text>Message: {message}</Text>
      </Body>
    </Html>
  );
}
