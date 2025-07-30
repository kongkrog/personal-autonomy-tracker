import Block from "./Blocks";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import { BsTrash } from "react-icons/bs";

export default function ContentSection() {
  return (
    <div className="h-screen flex flex-col p-8 gap-4 shadow-md rounded-2xl">
      <p className="inline-block text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
        Notes
      </p>
      <div className="flex flow-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-stretch">
          <SearchBar />
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>
        <button className="flex flex-row gap-1 items-center content-between text-white rounded-2xl bg-purple-500 px-3 py-2">
          <BsTrash /> Trash
        </button>
      </div>
      <div className="flex-1 bg-white flex flex-col items-stretch overflow-visible overflow-y-auto p-2">
        <div className="bg-white grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          <Block
            title="This is a title"
            content="Insert content here, this is a long sentences describing what happened and what I want to do."
            color="rose"
          ></Block>
          <Block
            title="This is a title"
            content="Insert content here, this is a long sentences describing what happened and what I want to do."
            color="orange"
          ></Block>
          <Block
            title="This is a title"
            content="Insert content here, this is a long sentences describing what happened and what I want to do."
            color="pink"
          ></Block>
          <Block
            title="This is a title"
            content="Insert content here, this is a long sentences describing what happened and what I want to do."
            color="fuchsia"
          ></Block>
          <Block
            title="YOU ARE TAKING TOO LONG"
            content="TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG"
            color="orange"
          ></Block>
          <Block
            title="YOU ARE TAKING TOO LONG"
            content="TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG"
            color="orange"
          ></Block>
          <Block
            title="YOU ARE TAKING TOO LONG"
            content="TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG"
            color="orange"
          ></Block>
          <Block
            title="YOU ARE TAKING TOO LONG"
            content="TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG TOO LONG"
            color="orange"
          ></Block>
        </div>
      </div>
    </div>
  );
}
