import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Link className={buttonVariants({ variant: "outline" })} href="/login">
        Login
      </Link>
    </main>
  );
}
