import { Logo } from "./logo"
import { MaxWidthContainer } from "./max-width-container"
import { Button } from "./ui/button"
import { CiAlarmOn } from "react-icons/ci";

export const Header = () => {

    const assessmentTime = 28.50
    return (
        <header className="py-6 bg-white border-b border-[#755AE2]">
            <MaxWidthContainer>
                <div className="w-full flex justify-between flex-row">
                    <Logo />
                    <div className="">
                        <Button className="h-8 xl:h-12 px-4 text-purple-600 bg-purple-200">
                            <div className="flex flex-row justify-center items-center gap-1 xl:gap-2">
                                <CiAlarmOn className="text-[#755AE2] size-4 xl:size-8" />
                                <p className="text-[#755AE2] text-xs xl:text-lg">
                                    {assessmentTime}
                                </p>
                                <p className="text-[#755AE2] text-xs xl:text-lg">
                                    time remains
                                </p>
                            </div>
                        </Button>
                    </div>
                </div>

            </MaxWidthContainer>
        </header>
    )

}