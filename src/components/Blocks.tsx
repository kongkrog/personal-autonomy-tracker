import { useState } from "react";
import { BsClipboard } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import Tag from "./Tag";

interface BlockInterface {
  title?: string;
  content?: string;
  color?: "blue" | "orange" | "green" | "teal";
}

function getDisplayContent(content?: string) {
  return content?.trim() || "Text Placeholder";
}

function setColorClassname(color: string) {
  switch (color) {
    case "blue":
      return "bg-blue-500";
    case "teal":
      return "bg-teal-500";
    case "orange":
      return "bg-orange-600";
    case "green":
      return "bg-green-600";
    default:
      return "bg-purple-500";
  }
}

export default function Block({ title, content, color }: BlockInterface) {
  const [isExpanded, setIsExpanded] = useState(false);
  const COLOR_CLASSNAME = setColorClassname(color || "");

  return (
    <div
      className={`flex flex-col gap-2 min-h-10 p-4 shadow-xl rounded-3xl text-white ${COLOR_CLASSNAME}`}
    >
      <div className="flex flex-row items-center gap-2 text-gray-100">
        <div className="flex items-center gap-1">
          <Tag content="Note" color={color}>
            <BsClipboard />
          </Tag>
        </div>
        <div className="flex items-center gap-1">
          <Tag content="20/20/2024" color={color}>
            <BsClockHistory />
          </Tag>
        </div>
      </div>
      <h1 className="text-3xl font-bold font-serif">{title}</h1>
      <div className="flex flex-row gap-1">
        <Tag content="Guilt-tripping" color={color} />
        <Tag content="Emotionally-immature" color={color} />
        <Tag content="Horrible" color={color} />
      </div>
      <p className="text-gray-100 tracking-tight">
        {getDisplayContent(content)}
      </p>
    </div>
  );
}
