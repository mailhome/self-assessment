import { IconContainer } from "@/components/icon-container";
import { Button } from "@/components/ui/button";
import { GoLightBulb } from "react-icons/go";
import { IoWifiSharp } from "react-icons/io5";
import { PiWebcamBold } from "react-icons/pi";
import { TbMicrophoneFilled } from "react-icons/tb";


export default function Home() {
  return (
    <main className="rounded-md bg-white mx-auto w-10/12 py-10 px-10">
      <div className="flex items-start flex-col justify-start gap-y-4 xl:gap-y-8">
        <h1 className="xl:text-3xl">
          System Check
        </h1>
        <p className="text-[0.6rem] xl:text-lg text-muted-foreground leading-4">
          We utilize your camera image to ensure fairness for all participants, and we also employ both your camera and microphone for a video questions where you will be prompted to record a response using your camera or webcam, so it's essential to verify that your camera and microphone are functioning correctly and that you have a stable internet connection. To do this, please position yourself in front of your camera, ensuring that your entire face is clearly visible on the screen. This includes your forehead, eyes, ears, nose, and lips. You can initiate a 5-second recording of yourself by clicking the button below.
        </p>
        <div className="grid grid-cols-2 justify-start gap-x-10 items-center ">
          <div className="rounded-md border border-[#755AE2] h-40 w-72 xl:h-[16rem] xl:w-[32rem] 2xl:h-[20rem] 2xl:w-[36rem]">
          </div>
          <div className="grid grid-rows-2 w-full px-4 items-start justify-start gap-y-6 xl:gap-y-8 2xl:gap-y-12">
            <div className="grid grid-cols-2 items-start justify-start gap-x-6 xl:gap-x-8 2xl:gap-x-20">
              <IconContainer
                label="Webcam"
                icon={PiWebcamBold}
              />
              <IconContainer
                label="Speed"
                icon={IoWifiSharp}
              />
            </div>

            <div className="grid grid-cols-2 items-start justify-start gap-x-6 xl:gap-x-8 2xl:gap-x-20">
              <IconContainer
                label="Gadget mic"
                icon={TbMicrophoneFilled}
              />
              <IconContainer
                label="Lighting"
                icon={GoLightBulb}
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="text-white bg-[#755AE2] text-xs xl:text-lg h-8 xl:h-12 cursor-pointer mt-4 hover:bg-purple-500">
          Take a picture and continue
        </Button>
      </div>
    </main>
  );
}
