"use server";

import { asyncDelay } from "@/utils/async-delay";

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await asyncDelay(5000);

  const makeResult = ({ username = "", error = "" }) => ({ username, error });

  if (!(formData instanceof FormData))
    return makeResult({ error: "Tipo de dado inválido" });

  return makeResult({
    username: "",
    error: "lol kkk",
  });
}
