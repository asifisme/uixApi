import React, { useRef } from "react";

const PostMardem = () => {
  
  const divRef = useRef<HTMLDivElement>(null);
  
  const handleClick = () => {
    const title = divRef.current?.getAttribute("title"); 
    alert(title);
  }

  return (
    <div>
      <div ref={divRef} title="This is a title...">This is a.....</div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default PostMardem;
