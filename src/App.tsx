import { useState } from "react";
import Blocks from "./components/Blocks";
import ContentSection from "./components/ContentSection";
import Dialog from "./components/PopupDialog";
import Sidebar from "./components/Sidebar";
import FloatingButton from "./components/FloatingButton";

export default function mainApp() {
  return (
    <>
      <div className="flex flex-row gap-8 items-center p-8">
        <Sidebar></Sidebar>
        <ContentSection></ContentSection>
      </div>
      <FloatingButton></FloatingButton>
    </>
  );
}
