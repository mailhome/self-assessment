import { MaxWidthContainer } from "./max-width-container"

export const Footer = () => {
    return (
        <footer className="bottom-0 mt-10 py-4 px-10">
            <MaxWidthContainer>
                <p className="text-muted-foreground text-xs xl:text-base">Powered By <span className=" text-purple-900">Getlinked.AI</span></p>
            </MaxWidthContainer>
        </footer>
    )

}