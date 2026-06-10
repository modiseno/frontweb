# MO Diseño y Arquitectura

Sitio web corporativo de MO Diseño y Arquitectura, empresa colombiana especializada en construcción, arquitectura e ingeniería industrial y civil.

## Características

- Catálogo de servicios (ingeniería integral, diseño, construcción, remodelación, mantenimiento)
- Portafolio de obras realizadas con galería de imágenes
- Formulario de contacto con envío por correo electrónico (Nodemailer)
- Diseño responsivo con Tailwind CSS 4
- Optimizado para SEO
- Despliegue en Vercel

## Tecnologías

- [Astro](https://astro.build/) — Framework web
- [Tailwind CSS](https://tailwindcss.com/) — Estilos
- [Nodemailer](https://nodemailer.com/) — Envío de correos
- [Vercel](https://vercel.com/) — Hosting

## Comandos

| Comando | Acción |
|---------|--------|
| `pnpm install` | Instalar dependencias |
| `pnpm dev` | Iniciar servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Construir sitio para producción |
| `vercel dev` | Preview local del build de Vercel |

## Variables de entorno

Se requiere un archivo `.env` con las credenciales SMTP para el formulario de contacto:

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_EMAIL=
```
