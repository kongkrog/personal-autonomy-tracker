import {
  BsHouse,
  BsClock,
  BsJournalBookmark,
  BsChatDots,
  BsEmojiSmile,
  BsClipboard2Check,
} from "react-icons/bs";

import ProfilePicture from "./ProfilePicture";

export default function Sidebar() {
  return (
    <div className="flex flex-col gao-16 justify-between items-center-safe basis-32 min-h-screen rounded-4xl m-4 bg-purple-500 text-white shadow-lg">
      <div className="mt-12">
        <BsHouse className="text-5xl" />
      </div>
      <div className="flex flex-col items-center gap-16">
        <BsClock className="text-3xl" />
        <BsJournalBookmark className="text-3xl" />
        <BsEmojiSmile className="text-3xl" />
        <BsChatDots className="text-3xl" />
        <BsClipboard2Check className="text-3xl" />
      </div>
      <div className="mb-12">
        <ProfilePicture className="w-12 h-12 rounded-full bg-[url(src/assets/profile_placeholder.png)]" />
      </div>
    </div>
  );
}
