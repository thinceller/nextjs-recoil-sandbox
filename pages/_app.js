import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { useNameState, useSetNameState } from "../lib/recoil";

function Initializer() {
  const name = useNameState();
  const setName = useSetNameState();

  useEffect(() => {
    if (name === null) {
      setName("Akira");
    }
  }, [name, setName]);

  return null;
}

export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Initializer />
    </RecoilRoot>
  );
}
