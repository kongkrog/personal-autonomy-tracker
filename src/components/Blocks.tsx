import { useState } from "react";
import { BsClipboard, BsClockHistory, BsPen, BsTrash } from "react-icons/bs";
import Tag from "./Tag";

interface BlockInterface {
  title?: string;
  content?: string;
  color?: "orange" | "rose" | "pink" | "fuchsia" | "purple";
}

function getDisplayContent(content?: string) {
  return content?.trim() || "Text Placeholder";
}

function getGradientClassname(color: string) {
  switch (color) {
    case "orange":
      return "bg-gradient-to-r from-orange-400 to-orange-300 hover:from-orange-300 hover:to-orange-200 transition-all duration-300";
    case "rose":
      return "bg-gradient-to-r from-rose-500 to-rose-400 hover:from-rose-400 hover:to-rose-300 transition-all duration-300";
    case "pink":
      return "bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 transition-all duration-300";
    case "fuchsia":
      return "bg-gradient-to-r from-fuchsia-700 to-fuchsia-600 hover:from-fuchsia-600 hover:to-fuchsia-500 transition-all duration-300";
    case "purple":
    default:
      return "bg-gradient-to-r from-purple-800 to-purple-700 hover:from-purple-700 hover:to-purple-600 transition-all duration-300";
  }
}

export default function Block({
  title,
  content,
  color = "purple",
}: BlockInterface) {
  const [isExpanded, setIsExpanded] = useState(false);
  const COLOR_CLASSNAME = getGradientClassname(color);

  return (
    <div
      className={`flex flex-col gap-2 min-h-10 p-4 pt-5 shadow-md rounded-2xl text-black hover:scale-105 relative transition-transform duration-300 ease-out`}
    >
      <div
        className={`ribbon-color ${COLOR_CLASSNAME} top-0 left-0 w-full h-2 rounded-t-2xl absolute`}
      ></div>

      <div className="flex flex-row flex-wrap items-center gap-2 text-gray-500">
        <div className="flex items-center gap-2">
          <BsClipboard />
          <p className="text-sm">Note</p>
          <BsClockHistory />
          <p className="text-sm">20/20/2004</p>
        </div>
      </div>

      <h1 className="text-2xl font-semibold">{title}</h1>

      <div className="flex flex-row flex-wrap gap-2">
        <Tag content="Guilt" />
        <Tag content="Immature" />
        <Tag content="Horrible" />
      </div>

      <p className="text-gray-700 text-base tracking-tight line-clamp-3">
        {getDisplayContent(content)}
      </p>

      <div className="flex flex-row flex-wrap gap-2 text-sm">
        <button className="inline-flex flex-row items-center gap-1 px-3 py-2 bg-purple-500 rounded-2xl text-white">
          <BsPen /> Edit
        </button>
        <button className="inline-flex items-center gap-1 px-3 py-2 border-2 border-purple-500 rounded-2xl text-purple-500">
          <BsTrash /> Remove
        </button>
      </div>
    </div>
  );
}
