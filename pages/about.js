import Link from "next/link";
import { useNameState } from "../lib/recoil";

export default function AboutPage() {
  const name = useNameState();
  return (
    <>
      <div>
        About us. <Link href="/">Home</Link>
      </div>
      <div>{name}</div>
    </>
  );
}
