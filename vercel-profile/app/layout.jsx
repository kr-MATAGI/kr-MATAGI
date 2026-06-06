import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://matagi-profile.vercel.app"),
  title: "최재훈 | AI & Data Engineer",
  description:
    "Cafe24 이커머스 도메인에서 LLM Agent, Databricks 데이터 파이프라인, GSC/SEO 자동화, VoC 분석을 구축하는 AI/Data Engineer 프로필",
  openGraph: {
    title: "최재훈 | AI & Data Engineer",
    description:
      "AI Agent와 데이터 파이프라인으로 이커머스 운영 자동화를 구축하는 프로필 페이지",
    type: "website",
    images: ["/profile.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
