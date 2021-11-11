import Link from "next/link";
import { useNameState } from "../lib/recoil";

export default function IndexPage() {
  const name = useNameState();
  return (
    <>
      <div>
        Hello World.{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>{name}</div>
    </>
  );
}
