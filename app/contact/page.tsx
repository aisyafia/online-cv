import { useState } from "react";

interface Card {
  suit: string;
  value: string;
}

const contactPage = () => {
  return (
    <main className="scroll-mt-16 max-w-[50rem] grid grid-cols-2 gap-4 p-4">
      <div>
        <p>This is where you put the form in</p>
      </div>
    </main>
  );
};

export default contactPage;
