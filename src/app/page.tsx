"use client";
import { useState } from "react";
import Book from "./component/Book";

export default function Birthday() {
  const [page, setPage] = useState<"cover" | "photos" | "wishes" | "finish">("cover");

  return <Book page={page} setPage={setPage} />;
}
