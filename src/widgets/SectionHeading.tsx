import React, { FC } from 'react'

interface SectionHeaderProps {
  title: string
  subTitle: string
}

const SectionHeading: FC<SectionHeaderProps> = ({ title, subTitle }) => {
  return (
    <div>
      <h2 className="text-[2.2635em] font-black text-center">{title}</h2>
      <p className="text-xl mt-4 text-center text-gray-500">{subTitle}</p>
    </div>
  )
}

export default SectionHeading
