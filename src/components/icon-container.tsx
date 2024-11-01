import { IconType } from "react-icons"

type Props = {
    icon: IconType;
    label: string;
}

export const IconContainer = ({
    icon: Icon,
    label,
}: Props) => {
    return (
        <div className="relative h-16 w-16 xl:h-28 xl:w-28 2xl:h-32 2xl:w-32  bg-[#F5F3FF] rounded-lg ">
            <div className="flex items-center flex-col justify-center gap-y-2 xl:gap-y-2 py-3 xl:py-4">
                <div className="h-8 w-8 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20 rounded-full bg- flex items-center justify-center flex-col bg-purple-200">
                    <Icon
                        className="size-4 xl:size-7 2xl:size-8 text-[#755AE2]" />
                </div>
                <p className="items-center text-[0.5rem] xl:text-[0.8rem] 2xl:text-md justify-center flex pb-2 xl:-top-10">
                    {label}
                </p>
                <span className="h-[10px] w-[10px] xl:h-[20px] xl:w-[20px] rounded-full absolute top-1 xl:left-[88px] 2xl:left-[100px] left-12 bg-[#755AE2]"></span>
            </div>
        </div>
    )
} 