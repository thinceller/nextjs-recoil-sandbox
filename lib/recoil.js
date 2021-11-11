import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const nameState = atom({
  key: "nameState",
  default: null
});

export function useNameState() {
  return useRecoilValue(nameState);
}

export function useSetNameState() {
  return useSetRecoilState(nameState);
}
