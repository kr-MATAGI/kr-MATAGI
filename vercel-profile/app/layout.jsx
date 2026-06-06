import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://matagi-profile.vercel.app"),
  title: "최재훈 | AI & Data Engineer",
  description:
    "대규모 운영 환경에서 데이터 파이프라인, LLM Agent, 데이터 서비스 자동화 시스템을 구축하는 AI/Data Engineer 프로필",
  openGraph: {
    title: "최재훈 | AI & Data Engineer",
    description:
      "대규모 데이터를 서비스로 연결하는 AI Agent와 데이터 플랫폼 중심 프로필 페이지",
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
