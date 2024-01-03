import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "@/libs/nodemailer";

// create next js route for get request

export async function GET(req) {
    return NextResponse.json({ message: "Ođe nemaš što činjet" });
}

export async function POST(req = NextRequest) {

    const body = await req.json();
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `Poruka sa codewilderness.me`,
            text: `
     > Ime: ${body.fullName}
     > Email: ${body.email}
     > ${body.message}
      `,
        });

        return NextResponse.json(
            {
                message: "Poruka poslata uspješno.",
            },
            {
                status: 200,
            }
        );
    } catch (err) {
        console.error("Greška pri slanju poruke!", err);
        return NextResponse.json(
            { message: "Nešto nije kako treba!" },
            { status: 500 }
        );
    }
}