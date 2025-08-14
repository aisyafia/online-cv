"use server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";
import { formData } from "@/app/contact/page";
import * as React from "react";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body: formData = await request.json();
    console.log("body", body.firstname);

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
