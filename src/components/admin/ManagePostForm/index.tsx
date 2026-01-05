"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkDownEditor } from "@/components/MarkDownEditor";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState("");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-4">
        <ImageUploader />

        <InputText labelText="Nome" placeholder="Insira seu nome" />
        <InputText labelText="Sobrenome" placeholder="Insira seu sobrenome" />
        <InputText
          disabled
          labelText="Sobrenome"
          placeholder="Insira seu sobrenome"
        />

        <MarkDownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />

        <InputCheckbox labelText="teste" />

        <InputText
          readOnly
          labelText="Sobrenome"
          placeholder="Insira seu sobrenome"
        />
      </div>

      <div className="mt-4">
        <Button type="submit" size="md" className="w-full">
          Enviar
        </Button>
      </div>
    </form>
  );
}
