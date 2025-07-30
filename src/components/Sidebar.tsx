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
    <div className="flex flex-col justify-between items-center-safe basis-32 min-h-screen rounded-4xl bg-purple-500 text-white shadow-lg">
      <div className="mt-12">
        <BsHouse className="text-5xl" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-row flex-nowrap group justify-center">
          <div className="text-3xl hover:bg-white hover:text-purple-500 p-4 rounded-full transition-all">
            <BsClock />
          </div>
          <p className="text-1xl text-white hidden group-hover:inline transition-all duration-700 p-2">
            Peace Time
          </p>
        </div>
        <div className="text-3xl hover:bg-white hover:text-purple-500 p-4 rounded-full transition-all">
          <BsJournalBookmark />
        </div>
        <div className="text-3xl hover:bg-white hover:text-purple-500 p-4 rounded-full transition-all">
          <BsEmojiSmile />
        </div>
        <div className="text-3xl hover:bg-white hover:text-purple-500 p-4 rounded-full transition-all">
          <BsChatDots />
        </div>
        <div className="text-3xl hover:bg-white hover:text-purple-500 p-4 rounded-full transition-all">
          <BsClipboard2Check />
        </div>
      </div>
      <div className="mb-12">
        <ProfilePicture className="w-12 h-12 rounded-full bg-[url(src/assets/profile_placeholder.png)]" />
      </div>
    </div>
  );
}
