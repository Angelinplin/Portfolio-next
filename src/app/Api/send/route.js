import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/Email-temp";
import { NextResponse } from "next/server";


const resend = new Resend('re_dTC9zbE2_4rP6eWSm21yQywGbBK3noPWu')

export async function POST(){
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
          to: ['tzuruangel2602@gmail.com'],
          subject: 'Hello world',
          react: EmailTemplate({ firstName: 'John' }),
        })
        console.log(data)
    
        return NextResponse.json({message: "Email sent"}, {
            status: 200
        })
    } catch (error) {
        return  NextResponse.json({message: "Error"}, {
            status: 500
        })
    }
   
}