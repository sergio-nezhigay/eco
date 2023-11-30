import React from "react";

function Test() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 p-4 md:grid-cols-2 ">
      <div className="block bg-gray-200 p-4 md:order-2" id="a">
        <p>Block A content</p>
      </div>
      <div
        className="col-span-2 block bg-gray-200 p-4 md:order-1 md:col-span-1 md:row-span-2"
        id="b"
      >
        <p>Block B content</p>
      </div>
      <div className="block bg-gray-200 p-4 md:order-3" id="c">
        <p>Block C content</p>
      </div>
    </div>
  );
}

export default Test;
