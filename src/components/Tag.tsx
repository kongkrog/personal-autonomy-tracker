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
      className={`${COLOR_CLASSNAME} flex flex-row justify-center items-center border-0 px-3 py-1 font-semibold p-1.5 rounded-xl text-sm`}
    >
      {children}
      {content}
    </div>
  );
}
