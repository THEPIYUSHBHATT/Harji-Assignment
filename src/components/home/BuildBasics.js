'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const INITIAL_TASKS = [
  {
    id: 1,
    title: 'Skills',
    subject: 'Test',
    subjectColor: 'text-purple-600',
    status: 'locked',
  },
  {
    id: 2,
    title: 'Practice Algebra Problems Daily',
    subject: 'Maths',
    subjectColor: 'text-red-500',
    status: 'locked',
  },
  {
    id: 3,
    title: 'Study Motion and Energy Concepts',
    subject: 'Science',
    subjectColor: 'text-[#EA580C]',
    status: 'active',
  },
  {
    id: 4,
    title: 'Solve 20 Maths Question Daily',
    subject: 'Maths',
    subjectColor: 'text-[#0D9488]',
    status: 'completed',
  },
  {
    id: 5,
    title: 'Watch a Science Concept Video',
    subject: 'Exploration',
    subjectColor: 'text-[#10B981]',
    status: 'completed',
  },
  {
    id: 6,
    title: 'Follow a Weekly Study Plan',
    subject: 'Habit',
    subjectColor: 'text-[#DB2777]',
    status: 'completed',
  },
]

export default function BuildBasics() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)

  const toggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id === taskId && task.status !== 'locked') {
          return {
            ...task,
            status: task.status === 'completed' ? 'active' : 'completed',
          }
        }
        return task
      }),
    )
  }

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
                  onClick={() => toggleTask(task.id)}
                  className={cn(
                    'shrink-0',
                    task.status !== 'locked' && 'cursor-pointer',
                  )}
                >
                  {task.status === 'locked' && (
                    <div className="w-[18px] h-[18px] rounded-[4px] bg-gray-200"></div>
                  )}
                  {task.status === 'active' && (
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
                    className={cn(
                      'text-[12px] font-semibold',
                      task.subjectColor,
                    )}
                  >
                    {task.subject}
                  </span>
                </div>
              </div>

              {task.status === 'locked' && (
                <div className="px-[16px] py-[6px] rounded-[12px] bg-[#F1F5F9] text-gray-400 text-[12px] font-medium">
                  Start
                </div>
              )}
              {task.status === 'active' && (
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
