import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function SessionList() {
  const sections = [
    {
      id: 'build-basics',
      title: 'Build Basics',
      description:
        "You'll build a strong foundation in foundational math and science principles.",
      status: 'in-progress',
      progress: '60%',
      tasksCompleted: 3,
      totalTasks: 6,
      tasks: [
        {
          title: 'Study Motion and Energy Concepts',
          type: 'Science',
          status: 'locked',
          blurred: true,
        },
        {
          title: 'Study Motion and Energy Concepts',
          type: 'Science',
          status: 'locked',
          blurred: true,
        },
        {
          title: 'Study Motion and Energy Concepts',
          type: 'Science',
          status: 'continue',
          typeColor: 'text-[#EAB308]',
          typeBg: 'bg-[#FEFCE8]',
        },
        {
          title: 'Solve 20 Maths Question Daily',
          type: 'Maths',
          status: 'completed',
          score: '98%',
          typeColor: 'text-[#0D9488]',
          typeBg: 'bg-[#F0FDF4]',
        },
        {
          title: 'Watch a Science Concept Video',
          type: 'Video • 10 Mins',
          status: 'completed',
          typeColor: 'text-[#E11D48]',
          typeBg: 'bg-[#FFF1F2]',
        },
      ],
    },
    {
      id: 'strengthen',
      title: 'Strengthen Concepts',
      description:
        'Dive deeper into advanced topics to prepare for your board exams.',
      status: 'locked',
    },
    {
      id: 'score',
      title: 'Score in Boards',
      description:
        'Achieve target scores in preliminary and final board examinations.',
      status: 'locked',
    },
    {
      id: 'pcm',
      title: 'PCM Stream Selection',
      description:
        'Finalize stream choice based on aptitude and board results.',
      status: 'locked',
    },
  ]

  return (
    <div className="relative">
      <div className="absolute left-[20px] top-[20px] bottom-0 w-[1.5px] flex flex-col">
        {/* Timeline connector */}
        <div className="w-full h-[320px] bg-[#00BEBF]"></div>
        {/* Future segments */}
        <div className="w-full flex-1 bg-[#EBEBEB]"></div>
      </div>

      <div className="flex flex-col gap-[32px] w-full max-w-[692px]">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="relative flex gap-[12px] sm:gap-[24px] items-start"
          >
            <div className="shrink-0 z-10 flex items-center justify-center pt-[4px]">
              <div
                className={cn(
                  'w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full flex items-center justify-center transition-all duration-300',
                  section.status === 'completed' ||
                    section.status === 'in-progress'
                    ? 'bg-[#0891B2] border-[3px] sm:border-[4px] border-[#E9F7E6]'
                    : 'bg-[#F3F4F6] border-[2px] border-[#E5E7EB]',
                )}
              >
                <Image
                  src={
                    section.status === 'completed' ||
                    section.status === 'in-progress'
                      ? '/checked.svg'
                      : '/session-lock.svg'
                  }
                  alt={section.status}
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
                />
              </div>
            </div>

            {/* Milestone Card */}
            <div
              className={cn(
                'flex-1 bg-white rounded-[12px] p-[16px] sm:p-[24px] shadow-sm border transition-all duration-300 min-w-0',
                section.status === 'in-progress'
                  ? 'border-[#00BEBF] ring-1 ring-[#00BEBF]/10'
                  : 'border-[#EBEBEB]',
              )}
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-[12px] sm:gap-0 mb-[4px]">
                <div className="flex flex-col gap-[4px] min-w-0">
                  <h3
                    className={cn(
                      'text-[16px] sm:text-[18px] font-bold truncate',
                      section.status === 'locked'
                        ? 'text-gray-400'
                        : 'text-[#1A1A1A]',
                    )}
                  >
                    {section.title}
                  </h3>
                  <p
                    className={cn(
                      'text-[12px] sm:text-[13px] leading-relaxed max-w-[450px]',
                      section.status === 'locked'
                        ? 'text-gray-300'
                        : 'text-gray-500',
                    )}
                  >
                    {section.description}
                  </p>
                </div>

                <div className="flex items-center gap-[12px] shrink-0">
                  {section.status === 'in-progress' && (
                    <div className="flex items-center gap-[6px] px-[12px] sm:px-[16px] h-[28px] sm:h-[31px] bg-[#E6F6F7] rounded-[20px] border border-[#71828A]/20">
                      <Image
                        src="/progress.svg"
                        alt="Progress"
                        width={12}
                        height={12}
                        className="sm:w-[14px] sm:h-[14px]"
                      />
                      <span className="text-[#00BEBF] text-[9px] sm:text-[10px] font-bold uppercase">
                        In Progress
                      </span>
                    </div>
                  )}
                  {section.status === 'locked' && (
                    <div className="flex items-center gap-[6px] px-[8px] sm:px-[10px] h-[20px] sm:h-[23px] bg-[#F3F4F6] rounded-[12px] text-gray-400 border border-[#EBEBEB]">
                      <Image
                        src="/lock.svg"
                        alt="Locked"
                        width={10}
                        height={10}
                        className="opacity-50 sm:w-[12px] sm:h-[12px]"
                      />
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase">
                        Locked
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Expanded section for active milestone */}
              {section.status === 'in-progress' && (
                <div className="mt-[20px] sm:mt-[24px] flex flex-col gap-[20px]">
                  {/* Progress Bar Area */}
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] sm:text-[12px] font-medium text-[#1A1A1A]">
                        {section.tasksCompleted} of {section.totalTasks} tasks
                        completed
                      </span>
                      <span className="text-[12px] sm:text-[14px] font-bold text-[#00BEBF]">
                        {section.progress}
                      </span>
                    </div>
                    <div className="w-full h-[6px] sm:h-[8px] bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#00BEBF] rounded-full transition-all duration-700"
                        style={{ width: section.progress }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[12px]">
                    {section.tasks.map((task, i) => (
                      <div
                        key={i}
                        className={cn(
                          'relative group flex flex-col sm:flex-row sm:items-center justify-between p-[12px] sm:p-[16px] rounded-[12px] border transition-all duration-300 gap-4 sm:gap-0',
                          task.blurred
                            ? 'border-[#EBEBEB] opacity-50 overflow-hidden'
                            : task.status === 'completed'
                              ? 'border-[#EBEBEB] bg-white'
                              : 'border-[#00BEBF]/30 bg-[#F0FDFA]',
                        )}
                      >
                        {task.blurred && (
                          <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[2px] bg-white/40">
                            <div className="flex flex-col items-center gap-[4px]">
                              <Image
                                src="/lock.svg"
                                alt="Locked"
                                width={16}
                                height={16}
                                className="opacity-40"
                              />
                              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                Locked
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-[12px] sm:gap-[16px]">
                          <div
                            className={cn(
                              'w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-[4px] border-[1.5px] shrink-0 pointer-events-none',
                              task.status === 'completed'
                                ? 'bg-[#22C55E] border-[#22C55E] flex items-center justify-center'
                                : 'border-[#EBEBEB] bg-white',
                            )}
                          >
                            {task.status === 'completed' && (
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 12 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 4L4.5 7.5L11 1"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                          <div className="flex flex-col gap-[4px] min-w-0">
                            <p
                              className={cn(
                                'text-[13px] sm:text-[14px] font-semibold truncate',
                                task.status === 'completed'
                                  ? 'text-gray-400'
                                  : 'text-[#1A1A1A]',
                              )}
                            >
                              {task.title}
                            </p>
                            <span
                              className={cn(
                                'px-[6px] sm:px-[8px] py-[1px] sm:py-[2px] rounded-[4px] text-[9px] sm:text-[10px] font-bold w-fit uppercase tracking-tight',
                                task.typeBg,
                                task.typeColor,
                              )}
                            >
                              {task.type}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-[16px] shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                          {task.score && (
                            <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full border-[1px] border-dotted border-[#00BEBF] bg-white flex flex-col items-center justify-center shrink-0">
                              <span className="text-[12px] sm:text-[14px] font-extrabold text-[#00BEBF] leading-none tracking-tighter">
                                {task.score}
                              </span>
                              <span className="text-[7px] sm:text-[8px] font-bold text-[#00BEBF] uppercase">
                                Score
                              </span>
                            </div>
                          )}

                          {task.status === 'continue' && (
                            <button className="px-[12px] sm:px-[16px] py-[5px] sm:py-[6px] bg-white border border-[#EBEBEB] rounded-[10px] sm:rounded-[12px] text-[#0D9488] text-[11px] sm:text-[12px] font-bold hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
                              Continue
                            </button>
                          )}
                          {task.status === 'completed' && (
                            <span className="text-[11px] sm:text-[12px] font-bold text-gray-400 uppercase">
                              Completed
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
