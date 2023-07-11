"use client";
import { useState } from "react";

import { ImageUploader } from "./component";
import { FileWithPreview } from "./type";

export default function Page() {
  const [file, setFile] = useState<FileWithPreview>();

  return (
    <ImageUploader file={file} onFileChange={setFile} className="w-[1000px]" />
  );
}
