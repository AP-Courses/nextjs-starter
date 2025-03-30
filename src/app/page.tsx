import Link from "next/link";
import flagsmith from "@/app/utils/flagsmith";

export const revalidate = 0;

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <p>New text</p>
      </div>
      <Link href="/about">About</Link>
      {flags.isFeatureEnabled("search") && <input placeholder="search" />}
    </main>
  );
}
