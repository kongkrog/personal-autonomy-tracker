import Block from "./Blocks";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

export default function ContentSection() {
  return (
    <div className="w-full min-h-screen bg-white shadow-md rounded-2xl p-8 flex flex-col gap-8 items-stretch">
      <div className="flex flex-row gap-4">
        <SearchBar />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
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
  );
}
