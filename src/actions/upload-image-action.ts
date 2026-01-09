"use server";

import { IMAGE_SERVER_URL, IMAGE_UPLOADER_DIR } from "@/lib/constants";
import { asyncDelay } from "@/utils/async-delay";
import { mkdir, writeFile } from "fs/promises";
import { extname, resolve } from "path";

type UploadImageAction = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData
): Promise<UploadImageAction> {

  await asyncDelay(1000)

  const makeResult = ({ url = "", error = "" }) => ({ url, error });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: "Imagem inválida1" });
  }

  const file = formData.get("file");

  if (!(file instanceof File)) {
    return makeResult({ error: "Arquivo inválido" });
  }

  console.log(file);

  if (!file.type.startsWith("image/")) {
    return makeResult({ error: "Imagem inválida2" });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  console.log(uniqueImageName);

  const uploadDir = IMAGE_UPLOADER_DIR;
  const uploadFullPath = resolve(process.cwd(), "public", uploadDir);
  await mkdir(uploadFullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  const fileFullPath = resolve(uploadFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);

  const url = `${IMAGE_SERVER_URL}/${uniqueImageName}`;

  return makeResult({ url });
}
