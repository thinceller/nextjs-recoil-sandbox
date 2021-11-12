import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import useSWR from "swr";
import { useNameState, useSetNameState } from "../lib/recoil";

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Initializer(props) {
  const router = useRouter();
  if (router.pathname === '/no-auth') {
    return <>{props.children}</>
  }

  return <Authorizer>{props.children}</Authorizer>;
}

function Authorizer(props) {
  const router = useRouter();
  const name = useNameState();
  const setName = useSetNameState();
  const { data, error } = useSWR(name ? null : '/api/hello', fetcher)

  useEffect(() => {
    if (name === null && data) {
      setName(data.name);
    }
  }, [name, setName, data]);

  console.log({ name, data })

  if (error) {
    router.replace('/no-auth')
    return <div>error</div>;
  }

  if (name === null) {
    return <div>loading...</div>;
  }

  return <>{props.children}</>;
}

export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Initializer>
        <Component {...pageProps} />
      </Initializer>
    </RecoilRoot>
  );
}
