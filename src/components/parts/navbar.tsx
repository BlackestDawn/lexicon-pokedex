import Link from "next/link";
import data from "@/lib/data/navigation.json";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-4 text-md font-bold">
        {data.menu.map((item) => (
          <li key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}