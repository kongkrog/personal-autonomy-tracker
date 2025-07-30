interface TagInterface {
  content: string;
  color?: "blue" | "orange" | "green" | "teal";
  children?: React.ReactNode;
}

function setColorClassname(color: string) {
  switch (color) {
    case "blue":
      return "text-blue-500 bg-blue-100";
    case "teal":
      return "text-teal-700 bg-teal-100";
    case "orange":
      return "text-orange-700 bg-orange-100";
    case "green":
      return "text-green-700 bg-green-100";
    default:
      return "text-purple-500 bg-purple-100";
  }
}

export default function Tag({ content, color, children }: TagInterface) {
  const COLOR_CLASSNAME = setColorClassname(color || "");
  return (
    <div
      className={`whitespace-nowrap flex flex-row justify-center items-center p-0.5 ps-2 pe-2 rounded-2xl text-sm border-1 border-gray-500 text-gray-500 hover:border-purple-500 hover:text-purple-500 transition-all`}
    >
      {children}
      {content}
    </div>
  );
}
