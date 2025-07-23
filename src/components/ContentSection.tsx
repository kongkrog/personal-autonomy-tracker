import Block from "./Blocks";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

export default function ContentSection() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white shadow-lg rounded-4xl p-6 gap-4">
      <div className="flex flex-row gap-4">
        <SearchBar />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
      <Block
        title="This is a title"
        content="Insert content here, this is a long sentences describing what happened and what I want to do."
        color="green"
      ></Block>
      <Block
        title="This is a title"
        content="Insert content here, this is a long sentences describing what happened and what I want to do."
        color="blue"
      ></Block>
      <Block
        title="This is a title"
        content="Insert content here, this is a long sentences describing what happened and what I want to do."
        color="teal"
      ></Block>
      <Block
        title="This is a title"
        content="Insert content here, this is a long sentences describing what happened and what I want to do."
        color="orange"
      ></Block>
    </div>
  );
}
