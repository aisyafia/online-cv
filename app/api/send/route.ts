"use server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";
import * as React from "react";
import { render } from "@react-email/render";
import { ContactFormData } from "@/lib/formValidation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const html = await render(React.createElement(EmailTemplate, body));

    const { data, error } = await resend.emails.send({
      from: "Web CV Admin <onboarding@resend.dev>",
      to: "redheaded_fia@hotmail.com",
      subject: "New contact form",
      html,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
