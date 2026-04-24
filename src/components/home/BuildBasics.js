'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useRoadmap } from '@/context/RoadmapContext'

export default function BuildBasics() {
  const { sections, updateTaskStatus } = useRoadmap()
  const buildBasics = sections.find((section) => section.id === 'build-basics')
  const tasks = buildBasics?.tasks || []

  return (
    <div className="bg-[#FFFFFF] rounded-[12px] p-[24px] shadow-sm border border-[#EBEBEB] w-full flex flex-col">
      <div className="flex items-center gap-[8px] mb-[24px]">
        <Image
          src="/build-basic.svg"
          alt="Build Basics"
          width={20}
          height={20}
        />
        <h2 className="font-semibold text-[#1A1A1A] text-[16px]">
          Build Basics
        </h2>
      </div>

      <div className="flex flex-col gap-[16px]">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="relative p-[16px] rounded-[6px] border border-[#EBEBEB] overflow-hidden"
          >
            <div
              className={cn(
                'flex items-center justify-between transition-all',
                task.status === 'locked' &&
                  'blur-[3px] opacity-60 pointer-events-none select-none',
              )}
            >
              <div className="flex items-center gap-[12px]">
                <div
                  onClick={() => updateTaskStatus('build-basics', task.id)}
                  className={cn(
                    'shrink-0',
                    task.status !== 'locked' && 'cursor-pointer',
                  )}
                >
                  {task.status === 'locked' && (
                    <div className="w-[18px] h-[18px] rounded-[4px] bg-gray-200"></div>
                  )}
                  {(task.status === 'start' || task.status === 'continue') && (
                    <div className="w-[18px] h-[18px] rounded-[4px] border-[2px] border-[#CBD5E1]"></div>
                  )}
                  {task.status === 'completed' && (
                    <div className="w-[18px] h-[18px] rounded-[4px] bg-[#0D9488] flex items-center justify-center">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-[2px]">
                  <span
                    className={cn(
                      'text-[14px] font-medium text-[#1A1A1A] transition-opacity',
                      task.status === 'completed' && 'opacity-60',
                    )}
                  >
                    {task.title}
                  </span>
                  <span
                    className={cn('text-[12px] font-semibold', task.typeColor)}
                  >
                    {task.type}
                  </span>
                </div>
              </div>

              {task.status === 'locked' && (
                <div className="px-[16px] py-[6px] rounded-[12px] bg-[#F1F5F9] text-gray-400 text-[12px] font-medium">
                  Start
                </div>
              )}
              {(task.status === 'start' || task.status === 'continue') && (
                <button className="text-[12px] text-[#0D9488] font-medium border border-[#EDF5F0] rounded-[12px] px-[16px] py-[6px] hover:bg-[#F2FBF5] transition-colors shrink-0 cursor-pointer">
                  Continue
                </button>
              )}
            </div>

            {/* Lock status indicator */}
            {task.status === 'locked' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <Image src="/lock.svg" alt="Locked" width={20} height={20} />
                <span className="text-[12px] text-gray-400 font-medium mt-1">
                  Locked
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
