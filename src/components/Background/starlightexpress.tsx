import { FC } from "react"
import Image from "next/image"

export const StarlightexpressPreview: FC = () => {
  return (
    <div className="absolute left-0 top-0 -z-[2] h-full w-full">
      <Image src="/assets/starlightexpress.png" width={2388} height={1668} alt={""} />
    </div>
  )
}

const Starlightexpress: FC = () => {
  return (
    <div className="absolute top-[0px] left-0 -z-[2] h-[1886px] w-[2700px] ">
      <Image src="/assets/starlightexpress.png" width={2388} height={1768} alt={""} />
    </div>
  )
}

export default Starlightexpress
