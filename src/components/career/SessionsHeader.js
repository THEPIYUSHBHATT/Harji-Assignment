import Image from "next/image";

export default function SessionsHeader() {
  return (
    <div className="mb-[24px]">
      <div className="flex items-center gap-[8px] mb-[4px]">
        <Image src="/carrer.svg" alt="Sessions" width={24} height={24} className="w-[24px] h-[24px]" />
        <h1 className="text-[20px] font-bold text-[#1A1A1A]">Sessions</h1>
      </div>
      <p className="text-[14px] text-gray-500 ml-[32px]">
        Track your learning milestones and prepare for the PCM stream selection.
      </p>
    </div>
  );
}
