import Image from 'next/image'
import { Activity, TriangleAlert } from 'lucide-react'

export default function MoodActivityTrends() {
  // Simple CSS-based bar chart for the exact look in Figma
  const days = [
    {
      day: 'Mon',
      fill: '100%',
      gradient: 'from-[#E3B3F2] to-[#9159CB]',
      icon: '/monday.svg',
    },
    {
      day: 'Tue',
      fill: '100%',
      gradient: 'from-[#C5E489] to-[#82B95A]',
      icon: '/tue.svg',
    },
    {
      day: 'Wed',
      fill: '100%',
      gradient: 'from-[#FB98CF] to-[#C23587]',
      icon: '/wed.svg',
    },
    {
      day: 'Thu',
      fill: '100%',
      gradient: 'from-[#8FF7F4] to-[#00BEBF]',
      icon: '/thu.svg',
    },
    {
      day: 'Fri',
      fill: '100%',
      gradient: 'from-[#FF9393] to-[#EC4242]',
      icon: '/fri.svg',
    },
    { day: 'Sat', fill: '0%', gradient: '', icon: null },
    { day: 'Sun', fill: '0%', gradient: '', icon: null },
  ]

  return (
    <div className="bg-[#FFFFFF] rounded-[12px] p-[24px] shadow-sm border border-[#EBEBEB] w-full flex flex-col">
      <div className="flex items-center justify-between mb-[4px]">
        <div className="flex items-center gap-[8px]">
          <Image src="/red-beat.svg" alt="Activity" width={20} height={20} />
          <h2 className="font-semibold text-[#1A1A1A] text-[16px]">
            Mood & Activity Trends
          </h2>
        </div>
        <span className="text-[12px] text-[#1A1A1A] font-semibold">
          This Week
        </span>
      </div>
      <p className="text-[12px] text-[#64748B] mb-[24px] max-w-[250px] leading-relaxed">
        Emotional wellbeing & platform engagement based on your daily check-ins.
      </p>

      <div className="flex items-end justify-between mb-[24px] px-[8px]">
        {days.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-[8px]">
            <div className="h-[20px] flex items-center justify-center">
              {d.icon && (
                <Image src={d.icon} alt={d.day} width={20} height={20} />
              )}
            </div>
            <div className="w-[24px] h-[120px] bg-[#F3F6F7] rounded-[4px] relative overflow-hidden flex flex-col justify-end">
              {/* Baseline Overlay (24x24) - anchors the bottom even when empty */}
              <div className="absolute bottom-0 left-0 w-[24px] h-[24px] bg-black/[.08] rounded-b-[4px]"></div>

              {/* Dynamic Gradient Fill (Animates up/down based on fill percentage) */}
              <div
                className={`relative w-full bg-gradient-to-b ${d.gradient} rounded-[4px] transition-all duration-500 ease-in-out hover:opacity-80`}
                style={{ height: d.fill }}
              ></div>
            </div>
            <span className="text-[12px] text-[#64748B] font-medium mt-[4px]">
              {d.day}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-[8px] mt-[4px]">
        <TriangleAlert className="w-[16px] h-[16px] text-[#F59E0B] shrink-0 mt-[2px]" />
        <p className="text-[12px] text-[#1A1A1A] font-medium leading-relaxed">
          Your mood this week suggests increased stress related to your future.
        </p>
      </div>

      <div className="w-full h-[1px] bg-[#EBEBEB] my-[24px]"></div>

      <div className="flex flex-col items-center text-center w-full">
        <div className="bg-[#FDDBFF] rounded-full px-[12px] py-[6px] mb-[6px] h-[28px] flex items-center justify-center">
          <span className="text-[#EC4899] text-[10px] font-semibold">
            Based on mood log
          </span>
        </div>

        <h3 className="text-[#EC4899] text-[14px] font-bold mb-[16px]">
          Recommended for You
        </h3>

        <div className="flex flex-col items-center gap-[6px]">
          <Image
            src="/avatar.svg"
            alt="Mukund Tyagi"
            width={56}
            height={56}
            className="mb-[6px]"
          />

          <h4 className="font-semibold text-[#1A1A1A] text-[14px]">
            Mukund Tyagi
          </h4>
          <p className="text-[12px] text-[#64748B]">
            (Student Wellbeing Therapist)
          </p>

          <div className="flex items-center gap-[4px] text-[12px] mt-[2px]">
            <span className="text-[#F59E0B] text-[14px]">★</span>
            <span className="font-semibold text-[#F59E0B]">4.9</span>
            <span className="text-[#64748B] ml-1">(120+ Sessions)</span>
          </div>
        </div>

        <button className="w-full max-w-[267px] h-[40px] bg-[#EC4899] rounded-[8px] flex items-center justify-center text-white text-[13px] font-medium mt-[20px] hover:opacity-90 transition-opacity shadow-sm cursor-pointer">
          Book a Therapy Session &rarr;
        </button>
      </div>
    </div>
  )
}
