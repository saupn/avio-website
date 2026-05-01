import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-neutral-800">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          404
        </p>
        <h1 className="font-heading mt-4 text-2xl font-bold md:text-3xl">Page not found</h1>
        <p className="mt-3 max-w-md text-sm text-neutral-600">
          The page you are looking for does not exist or was moved.
        </p>
        <Link
          className="mt-8 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          href="/en"
        >
          Go to English home
        </Link>
      </body>
    </html>
  );
}
