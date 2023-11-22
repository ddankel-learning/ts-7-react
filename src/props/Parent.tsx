import { Child, ChildAsFC } from "./Child";

const handleClick = () => console.log("clicked!");

const Parent = () => {
  return (
    <>
      <Child color="green" onClick={handleClick}>
        Green
      </Child>
      <ChildAsFC color="blue" onClick={handleClick}>
        Blue
      </ChildAsFC>
    </>
  );
};

export default Parent;
