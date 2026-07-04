import Link from "next/link";
import "./globals.css";

/**
 * Global 404 for unmatched URLs. The App Router renders the ROOT not-found for
 * unmatched paths (nested not-found only catches explicit notFound() calls), and
 * this file has no locale context — so it is branded and bilingual by design.
 */
export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#0e1420] px-6 text-center text-white antialiased">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b8860b]">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold md:text-3xl">
          Page not found
          <span className="mt-1 block text-lg font-normal text-white/70">
            Không tìm thấy trang
          </span>
        </h1>
        <p className="mt-4 max-w-md text-sm text-white/60">
          The page you are looking for doesn&apos;t exist or was moved. / Trang bạn
          tìm không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="mt-8 flex gap-6 text-sm font-semibold">
          <Link className="text-[#b8860b] underline-offset-4 hover:underline" href="/en">
            Back to home
          </Link>
          <Link className="text-[#b8860b] underline-offset-4 hover:underline" href="/vi">
            Về trang chủ
          </Link>
        </div>
      </body>
    </html>
  );
}
