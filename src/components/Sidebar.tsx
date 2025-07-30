import {
  BsHouse,
  BsClock,
  BsJournalBookmark,
  BsChatDots,
  BsEmojiSmile,
  BsClipboard2Check,
} from "react-icons/bs";

import ProfilePicture from "./ProfilePicture";
import SidebarIcon from "./SidebarIcon";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between items-center-safe basis-32 min-h-screen rounded-full bg-purple-500 text-white shadow-md">
      <div className="mt-12">
        <BsHouse className="text-5xl" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <SidebarIcon>
          <BsClock />
        </SidebarIcon>
        <SidebarIcon>
          <BsJournalBookmark />
        </SidebarIcon>
        <SidebarIcon>
          <BsEmojiSmile />
        </SidebarIcon>
        <SidebarIcon>
          <BsChatDots />
        </SidebarIcon>
        <SidebarIcon>
          <BsClipboard2Check />
        </SidebarIcon>
      </div>
      <div className="mb-12">
        <ProfilePicture className="w-12 h-12 rounded-full bg-[url(src/assets/profile_placeholder.png)]" />
      </div>
    </div>
  );
}
