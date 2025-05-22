import { ExpandableCard } from "@/components/ui/ExpandableCard";
import { useState } from "react";

interface Card {
  suit: string;
  value: string;
}

const contactPage = () => {
  return (
    <main className="scroll-mt-16 max-w-[50rem] grid grid-cols-2 gap-4 p-4">
      <div className="flex justify-center">
        {/* <p>This is where you put the form in</p> */}
        <ExpandableCard />
      </div>
    </main>
  );
};

export default contactPage;
