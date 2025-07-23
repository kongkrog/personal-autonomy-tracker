import { useState } from "react";
import Blocks from "./components/Blocks";
import ContentSection from "./components/ContentSection";
import Dialog from "./components/PopupDialog";
import Sidebar from "./components/Sidebar";
import FloatingButton from "./components/FloatingButton";

export default function mainApp() {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Sidebar></Sidebar>
      <ContentSection></ContentSection>
      <FloatingButton></FloatingButton>
    </div>
  );
}
