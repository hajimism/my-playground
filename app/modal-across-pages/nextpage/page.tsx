import Link from "next/link";

import { H1 } from "@/components/ui/Typography";

import { Modal } from "./modal";

export default function Page() {
  return (
    <div>
      <H1 className="mb-4">案件詳細ページ</H1>
      <Link href="/modal-across-pages/">前のページに戻る</Link>
      <Modal />
    </div>
  );
}
