export default function GreetingSection() {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <h1 className="text-[22px] font-bold text-primary">Good morning, Alex! 👋</h1>
      <div className="bg-gradient-to-r from-[#E6F7F5] via-[#F9FFF9] to-[#EDFBE9] border-l-[4px] border-l-primary border-t border-r border-b border-[#EBEBEB] px-[20px] py-[16px] rounded-[6px] w-full flex flex-col justify-center min-h-[82px] shadow-sm">
        <p className="text-[15px] font-medium text-[#0E1A2B] italic">"The future belongs to those who believe in the beauty of their dreams."</p>
        <p className="text-[12px] text-primary mt-1">— Eleanor Roosevelt</p>
      </div>
    </div>
  );
}

