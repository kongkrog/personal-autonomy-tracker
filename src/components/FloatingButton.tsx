import { BsClipboard2Plus } from "react-icons/bs";

export default function FloatingButton() {
  return (
    <div className="flex justify-center items-center size-16 rounded-full bg-purple-500 absolute bottom-10 right-10 shadow-lg">
      <BsClipboard2Plus className="text-3xl text-white" />
    </div>
  );
}
