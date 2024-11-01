import { ReactNode } from "react"

type Props = {
    children: ReactNode,
}
export const MaxWidthContainer = ({
    children
}: Props) => {
    return (
        <div className="container 2xl:max-w-[1800px] mx-auto px-4 md:px-5">
            {children}
        </div>
    )
}