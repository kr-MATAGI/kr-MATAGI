import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://matagi-profile.vercel.app"),
  title: "최재훈 | AI/Data Engineer",
  description:
    "Cafe24 데이터 자동화, HotSeller 백엔드, NAVIS-AMS 내비게이션과 한국어 NLP 연구를 소개하는 최재훈의 개발자 포트폴리오",
  openGraph: {
    title: "최재훈 | AI/Data Engineer",
    description:
      "데이터 파이프라인, AI Agent, 대량 작업 처리, 자동차 HMI와 한국어 NLP 연구 포트폴리오",
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
