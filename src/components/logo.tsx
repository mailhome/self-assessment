import Image from "next/image"
import LogoImage from "@/assets/logo.svg"


export const Logo = () => {
    return (
        <div className="flex justify-start items-center gap-2">
            <div className="relative h-9 w-9 xl:h-14 xl:w-14">
                <Image
                    src={LogoImage}
                    alt="Logo"
                    fill
                    className="absolute" />
            </div>
            <div className="flex flex-col items-start justify-start">
                <p className="text-sm xl:text-2xl">
                    Frontend Developer
                </p>
                <p className="text-xs xl:text-base text-muted-foreground">
                    Self Assessment
                </p>
            </div>
        </div>
    )
}
