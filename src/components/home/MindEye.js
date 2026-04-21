import Image from 'next/image'
import { cn } from '@/lib/utils'

const MIND_ACTIVITIES = [
  {
    id: 1,
    title: 'Breathing Exercises',
    subtitle: 'Calm and relax',
    duration: '3-5 minutes',
    icon: '/Breathing.svg',
    gradient: 'from-[#C7E9FF] to-[#E4FFFF]',
    textColor: 'text-[#005B9A]',
  },
  {
    id: 2,
    title: 'Focus Exercises',
    subtitle: 'Boost concentration',
    duration: '5-10 minutes',
    icon: '/focus.svg',
    gradient: 'from-[#FFEBB2] to-[#FFF7D6]',
    textColor: 'text-[#9A5100]',
  },
  {
    id: 3,
    title: 'Muscle Relaxation',
    subtitle: 'Release body tension',
    duration: '25-30 minutes',
    icon: '/muscle.svg',
    gradient: 'from-[#E0D4FF] to-[#F1EAFF]',
    textColor: 'text-[#4A209B]',
  },
  {
    id: 4,
    title: 'Study Focus Reset',
    subtitle: 'Sharpen your mind',
    duration: '5 minutes',
    icon: '/study.svg',
    gradient: 'from-[#FFD6EA] to-[#FFE8F3]',
    textColor: 'text-[#9E1B5A]',
  },
]

export default function MindEye() {
  return (
    <div className="bg-[#FFFFFF] rounded-[12px] p-[24px] shadow-sm border border-[#EBEBEB] w-full flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[4px]">
        <div className="flex items-center gap-[8px]">
          <Image
            src="/yellow-heart.svg"
            alt="Mind Gym"
            width={32}
            height={32}
          />
          <h2 className="font-semibold text-[#1A1A1A] text-[16px]">Mind Gym</h2>
        </div>
        <p className="text-[12px] text-[#64748B]">
          Suggests mindfulness and focus activities to keep your mind sharp and
          calm.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {MIND_ACTIVITIES.map((activity) => (
          <div
            key={activity.id}
            className={cn(
              'w-full h-[139px] rounded-[8px] bg-gradient-to-br flex flex-col justify-between p-[10px] cursor-pointer hover:shadow-sm transition-shadow',
              activity.gradient,
            )}
          >
            <div className="flex items-start gap-[12px] px-[6px] pt-[6px]">
              <div className="shrink-0 flex items-center justify-center">
                <Image
                  src={activity.icon}
                  alt={activity.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className={cn('flex flex-col', activity.textColor)}>
                <span className="text-[14px] font-semibold">
                  {activity.title}
                </span>
                <span className="text-[12px] font-medium opacity-80">
                  {activity.subtitle}
                </span>
              </div>
            </div>

            <div className="h-[51px] w-full rounded-[6px] bg-white/30 flex items-center justify-between px-[16px]">
              <div
                className={cn(
                  'flex items-center gap-[8px]',
                  activity.textColor,
                )}
              >
                <Image src="/time.svg" alt="Duration" width={16} height={16} />
                <span className="text-[12px] font-medium">
                  {activity.duration}
                </span>
              </div>
              <button className="w-[68px] h-[27px] flex items-center justify-center gap-[4px] bg-[#FFFFFF] rounded-[30px] text-[#1A1A1A] text-[12px] font-medium hover:bg-gray-50 transition-colors shrink-0 cursor-pointer">
                Start &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
