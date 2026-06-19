import type { APIRoute } from "astro";
import * as nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();

        const nombre = data.get("nombre")?.toString().trim();
        const apellido = data.get("apellido")?.toString().trim();
        const telefono = data.get("telefono")?.toString().trim();
        const email = data.get("email")?.toString().trim();
        const mensaje = data.get("mensaje")?.toString().trim();

        if (!nombre || !apellido || !telefono || !email || !mensaje) {
            return new Response(
                JSON.stringify({ success: false, message: "Todos los campos son obligatorios." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const transporter = nodemailer.createTransport({
            host: import.meta.env.SMTP_HOST,
            port: Number(import.meta.env.SMTP_PORT),
            secure: Number(import.meta.env.SMTP_PORT) === 465,
            auth: {
                user: import.meta.env.SMTP_USER,
                pass: import.meta.env.SMTP_PASS,
            },
        });

        const htmlBody = `
            <h2>Nueva solicitud de asesoría técnica</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
                <tr><td style="padding:8px;font-weight:bold;">Nombre:</td><td style="padding:8px;">${nombre} ${apellido}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Teléfono:</td><td style="padding:8px;">${telefono}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${email}</td></tr>
                <tr><td style="padding:8px;font-weight:bold;">Mensaje:</td><td style="padding:8px;">${mensaje}</td></tr>
            </table>
        `;

        await transporter.sendMail({
            from: `"MO WEB" <${ import.meta.env.SMTP_USER }>`,
            to: import.meta.env.CONTACT_EMAIL,
            subject: `Nueva solicitud de asesoría - ${ nombre } ${ apellido }`,
            html: htmlBody,
            replyTo: email,
        });

        return new Response(
            JSON.stringify({ success: true, message: "Mensaje enviado correctamente." }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error( "Error al enviar el correo:", error );
        return new Response(
            JSON.stringify({ success: false, message: "Error al enviar el mensaje. Intenta de nuevo." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
};
