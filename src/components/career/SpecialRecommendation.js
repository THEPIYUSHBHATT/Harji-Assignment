import Image from 'next/image'

export default function SpecialRecommendation() {
  return (
    <div
      className="w-full h-[502px] rounded-[8px] border border-[#EBEBEB] p-[24px] flex flex-col items-center gap-[30px] shadow-sm relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, rgba(209, 255, 194, 0.4) 0%, #FFFFFF 20%, #FFFFFF 80%, rgba(209, 255, 194, 0.4) 100%)',
      }}
    >
      <div className="flex items-center gap-[8px] h-[20px] w-full justify-center">
        <Image
          src="/special.svg"
          alt="Special"
          width={20}
          height={20}
          className="w-[20px] h-[20px]"
        />
        <h3 className="font-bold text-[14px] text-[#059669]">
          Special Recommendation
        </h3>
      </div>

      <div className="flex flex-col items-center gap-[6px] text-center w-[318px]">
        <h4 className="text-[18px] font-bold text-[#1A1A1A]">
          Need Help Planning?
        </h4>
        <p className="text-[12px] text-gray-500 leading-tight">
          Discuss your current progress and board preparation strategy.
        </p>
      </div>

      <div className="w-[264px] h-[211px] bg-white rounded-[10px] border border-[#EBEBEB] p-[20px] flex flex-col items-center justify-center gap-[12px] shadow-sm">
        <div className="relative w-[70px] h-[70px]">
          <Image
            src="/avatar.svg"
            alt="Mentor"
            width={70}
            height={70}
            className="rounded-full object-cover"
          />
        </div>
        <div className="text-center">
          <h5 className="text-[14px] font-bold text-[#1A1A1A]">Mukund Tyagi</h5>
          <p className="text-[11px] text-gray-400 font-medium">
            (Academic Planner & Counsellor)
          </p>
          <div className="flex items-center justify-center gap-[4px] mt-[8px]">
            <span className="text-[12px] text-gray-400">Rating</span>
            <span className="text-[12px] font-bold text-[#F59E0B]">★ 4.2</span>
          </div>
        </div>
      </div>

      <button className="w-full h-[40px] bg-[#10B981] text-white rounded-[8px] font-bold text-[14px] flex items-center justify-center gap-[8px] hover:bg-[#059669] transition-colors mt-auto">
        Book a Session
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7H13M13 7L7 1M13 7L7 13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
