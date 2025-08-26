import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)]">
      <div className="max-w-4xl items-center mx-auto py-4">
        <h1 className="font-jersey text-8xl text-center">Missing location!</h1>
        <p className="text-lg text-center">Don&apos;t worry, we can find what you were looking for.</p>
        <div className="text-center py-2">
          <Link
            href="/"
            className="px-2 py-1 rounded-full text-white bg-gradient-to-r from-orange-400 to-red-400"
          >
            How about starting again from here
          </Link>
        </div>
      </div>
    </div>
  );
}
