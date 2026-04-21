import Image from 'next/image'

export default function QuickLearningResources() {
  const resources = [
    {
      title: 'Motion & Energy Explained in 10 Minutes',
      subtitle: 'Channel: Khan Academy',
      icon: '/youtube.svg',
      actionIcon: '/export.svg',
      iconBg: 'bg-[#FF0000]/10',
    },
    {
      title: 'Motion & Energy Pdf',
      subtitle: 'NCERT',
      icon: '/pdf.svg',
      actionIcon: '/download.svg',
      iconBg: 'bg-[#FF0000]/10',
    },
  ]

  return (
    <div className="bg-white rounded-[12px] p-[25px] shadow-sm border border-[#E5E7EB] w-full h-[252px] flex flex-col">
      <div className="flex items-center gap-[8px] h-[20px] mb-[20px]">
        <Image
          src="/quiz.svg"
          alt="Resources"
          width={20}
          height={20}
          className="w-[20px] h-[20px]"
        />
        <h3 className="font-bold text-[14px] text-[#1A1A1A]">
          Quick Learning Resources
        </h3>
      </div>

      <div className="flex flex-col gap-[12px]">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="flex items-center gap-[12px] p-[12px] w-full max-w-[306px] h-[82px] rounded-[8px] border border-[#F3F4F6] bg-[#F9F9FB] hover:border-gray-200 transition-all cursor-pointer group mx-auto"
          >
            <div
              className={`w-[32px] h-[32px] rounded-[6px] ${resource.iconBg} flex items-center justify-center shrink-0`}
            >
              <Image src={resource.icon} alt="Icon" width={20} height={20} />
            </div>

            <div className="flex-1 flex flex-col gap-[4px] min-w-0">
              <h4 className="text-[13px] font-bold text-[#1A1A1A] leading-tight line-clamp-2">
                {resource.title}
              </h4>
              <p className="text-[11px] text-gray-400">{resource.subtitle}</p>
            </div>

            <div className="shrink-0 ml-auto">
              <Image
                src={resource.actionIcon}
                alt="Action"
                width={16}
                height={16}
                className="opacity-40 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
