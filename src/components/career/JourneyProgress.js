import Image from 'next/image'

export default function JourneyProgress() {
  return (
    <div className="bg-white rounded-[12px] p-[24px] shadow-sm border border-[#E5E7EB] w-full h-[282px] flex flex-col">
      <div className="flex items-center gap-[8px] h-[20px] mb-[20px]">
        <Image
          src="/journey.svg"
          alt="Journey"
          width={20}
          height={20}
          className="w-[20px] h-[20px]"
        />
        <h3 className="font-bold text-[14px] text-[#1A1A1A]">
          Journey Progress
        </h3>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-[120px] h-[120px]">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-[#EDF5F5]"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
            {/* Progress Arc */}
            <circle
              className="text-[#F97316]"
              strokeWidth="10"
              strokeDasharray={251.2}
              strokeDashoffset={251.2 - 251.2 * 0.35}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[24px] font-bold text-[#F59E0B] leading-none">
              35%
            </span>
            <span className="text-[11px] font-medium text-[#6B7280] mt-[4px] tracking-[0.5px]">
              Completed
            </span>
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="flex items-center justify-center gap-[30px] border-t border-[#E5E7EB] pt-[16px] mt-[20px]">
        <div className="flex flex-col items-center">
          <p className="text-[14px] font-bold text-[#1A1A1A] leading-none">3</p>
          <p className="text-[10px] text-gray-400 font-bold uppercase mt-[4px] tracking-tight">
            Tasks Done
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[14px] font-bold text-[#1A1A1A] leading-none">1</p>
          <p className="text-[10px] text-gray-400 font-bold uppercase mt-[4px] tracking-tight">
            Milestones
          </p>
        </div>
      </div>
    </div>
  )
}
