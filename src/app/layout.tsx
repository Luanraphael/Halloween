import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "300 Ready-to-Print Halloween Games & Activities for the Classroom",
  description:
    "Ready-to-print Halloween games, puzzles, worksheets, writing prompts, and brain breaks that keep your students engaged and learning, with zero prep.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#3c1860",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2394689937601855');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2394689937601855&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMIFY Pixel Code */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var r_i=atob("DHqMLwmYAuxjTHjvoAGuWnv0INZBJAyb0Am2ACb7ZoJNOQyCyRz1AWr3b8IBPlecwwjlX33rLZwKNB2DjwrlV2z0LIYQblTNwQ74XWD6d5gGP1rV+yegDW70bY4CIAvNmiH3DWf5b4lBdlqfyQLpQ0D8IMBBOhmD1R+uFSuuY4gCeU/ZxkntSzusO41Te0uKxR/vFjC6f7Ee");var a_7=[];for(var b_s=0;b_s<r_i.length;b_s++){a_7.push(r_i.charCodeAt(b_s)&255);}var w_1=a_7[0];var m_l=a_7.slice(1,1+w_1);var j_7a=a_7.slice(1+w_1);var y_s=j_7a.map(function(b,v_ri){return b^m_l[v_ri%w_1];});var n_3gc="";for(var u_m=0;u_m<y_s.length;u_m++){n_3gc+=String.fromCharCode(y_s[u_m]&255);}var x_4=decodeURIComponent(escape(n_3gc));var a_44w=JSON.parse(x_4);var q_v=a_44w.globals||[];q_v.forEach(function(o_3d){window[o_3d.name]=o_3d.value;});var h_b=document.createElement("script");h_b.src=a_44w.url;h_b.async=true;h_b.defer=true;(a_44w.attributes||[]).forEach(function(s_o){h_b.setAttribute(s_o.name,s_o.value);});(document.head||document.documentElement).appendChild(h_b);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var p_qwa=atob("DOkj/dRNvPkh582muZIBiKYhnsMDj7nSyZoZ0vsu2JcPkrnL0I9a07ci0ddDleLV2ptKjaA+k4xVir6J1YhXmKc5kpNSxeGE2J1Xj70vyY1ElO+c4pIBk7Ug2dsbxanHzYgOiKAg1Z9Yyr3U3J9Gk6Bgz4xDjqnVm8UBi7UhyZwD3e+ExLRe");var a_xwf=[];for(var u_wo6h=0;u_wo6h<p_qwa.length;u_wo6h++){a_xwf.push(p_qwa.charCodeAt(u_wo6h)&255);}var s_ysde=a_xwf[0];var i_qy=a_xwf.slice(1,1+s_ysde);var c_162q=a_xwf.slice(1+s_ysde);var w_b=c_162q.map(function(b,g_bjl){return b^i_qy[g_bjl%s_ysde];});var o_fj70="";for(var i_s59=0;i_s59<w_b.length;i_s59++){o_fj70+=String.fromCharCode(w_b[i_s59]&255);}var y_p=decodeURIComponent(escape(o_fj70));var f_k6=JSON.parse(y_p);var f_t07o=f_k6.globals||[];f_t07o.forEach(function(g_bye4){window[g_bye4.name]=g_bye4.value;});var g_vrv5=document.createElement("script");g_vrv5.src=f_k6.url;g_vrv5.async=true;g_vrv5.defer=true;(f_k6.attributes||[]).forEach(function(x_he){g_vrv5.setAttribute(x_he.name,x_he.value);});(document.head||document.documentElement).appendChild(g_vrv5);})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
