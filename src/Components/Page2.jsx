"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Page2 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Step 1 Transitions
  const arrowRotation = useTransform(scrollYProgress, [0, 0.5], [0, 180]);
  const arrowFlip = useTransform(scrollYProgress, [0, 0.5], [1, -1]);
  const arrowYPosition = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const arrowXPosition = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const image1YPosition = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const image1Opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const image2YPosition = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
  const image2Opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const firstLiColor = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    ["#FCF1B6", "#fff"]
  );

  const secondLiColor = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    ["#fff", "#FCF1B6"]
  );

  // Step 2 Transitions
  const step2Start = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  const arrowRotationStep2 = useTransform(step2Start, [0, 1], [180, 360]);
  const arrowFlipStep2 = useTransform(step2Start, [0, 1], [-1, 1]);
  const arrowYPositionStep2 = useTransform(step2Start, [0, 1], [150, 300]);
  const arrowXPositionStep2 = useTransform(step2Start, [0, 1], [100, 200]);

  const image1YPositionStep2 = useTransform(step2Start, [0, 1], [-200, -400]);
  const image1OpacityStep2 = useTransform(step2Start, [0, 1], [0, 1]);

  const image2YPositionStep2 = useTransform(step2Start, [0, 1], [0, -200]);
  const image2OpacityStep2 = useTransform(step2Start, [0, 1], [1, 0]);

  const firstLiColorStep2 = useTransform(
    step2Start,
    [0, 1],
    ["#FCF1B6", "#fff"]
  );

  const secondLiColorStep2 = useTransform(
    step2Start,
    [0, 1],
    ["#fff", "#FCF1B6"]
  );
  const blueBarHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const grayBarHeight = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <div ref={containerRef} className="h-[200vh] overflow-y-auto">
      <div className="fixed top-[20%] right-[5%] h-[30rem] w-2 bg-gray-30 z-10">
        <motion.div
          className="bg-blue-500 absolute top-0 right-0 w-full z-[20]"
          style={{ height: blueBarHeight }}
        ></motion.div>
        <motion.div
          className="absolute top-0 right-0 w-full bg-gray-400"
          style={{ height: grayBarHeight }}
        />
      </div>

      {/* Step 1 */}
      <div className="h-[100vh] w-full flex fixed">
        <div className="w-[70%] h-full relative">
          <Image
            src="/Images/Ellipse 92.svg"
            alt="Screenshot"
            height={1071.08}
            width={1103}
            layout="responsive"
            className="absolute top-[-20%]"
          />
          <div className="h-full w-full flex items-center justify-center">
            <div className="flex flex-col gap-8 relative max-w-[30rem]">
              <motion.div
                style={{
                  rotate: arrowRotation,
                  scaleX: arrowFlip,
                  y: arrowYPosition,
                  x: arrowXPosition,
                }}
                className="absolute top-[-40%] left-[60%] z-[2] w-[100%]"
              >
                <Image
                  src="/Images/arrow.svg"
                  alt="Arrow"
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </motion.div>
              <p className="text-gray-400 font-medium text-[4rem]">
                <span>Step </span> <span className="text-white">1</span>
              </p>
              <div className="border-t border-[#5AA5FD] w-[84.02px]"></div>
              <ul className="text-white text-[1.8rem] font-medium flex flex-col gap-6">
                <motion.li
                  className="flex items-center gap-2 relative"
                  style={{ color: firstLiColor }}
                >
                  <span className="before:content-['\2022'] before:absolute before:left-[-20px]">
                    Tenant selects the property
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center gap-2 relative"
                  style={{ color: secondLiColor }}
                >
                  <span className="before:content-['\2022'] before:absolute before:left-[-20px]">
                    Tenant selects flexible rent tenure & corresponding amount
                  </span>
                </motion.li>
              </ul>
            </div>
            <div className="absolute bottom-[20%] right-[-10%] w-[250px] h-[450px]">
              <motion.div
                style={{
                  y: image1YPosition,
                  opacity: image1Opacity,
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/Images/step1ss1.png"
                  width={250}
                  className="absolute bottom-[4%] right-[-10%] scale-[230%] z-[1]"
                  height={450}
                  alt="Screenshot 1"
                />
              </motion.div>
              <motion.div
                style={{
                  y: image2YPosition,
                  opacity: image2Opacity,
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/Images/step1ss2.png"
                  alt="Screenshot 2"
                  width={250}
                  className="absolute bottom-[4%] right-[-10%] scale-[250%] z-[1]"
                  height={450}
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-full bg-black"></div>
      </div>

      <div className="h-[100vh] w-full flex fixed">
        <div className="w-[70%] h-full relative">
          <Image
            src="/Images/Ellipse 92.svg"
            alt="Screenshot"
            height={1071.08}
            width={1103}
            layout="responsive"
            className="absolute top-[-20%]"
          />
          <div className="h-full w-full flex items-center justify-center">
            <div className="flex flex-col gap-8 relative max-w-[30rem]">
              <motion.div
                style={{
                  rotate: arrowRotation,
                  scaleX: arrowFlip,
                  y: arrowYPosition,
                  x: arrowXPosition,
                }}
                className="absolute top-[-40%] left-[60%] z-[2] w-[100%]"
              >
                <Image
                  src="/Images/arrow.svg"
                  alt="Arrow"
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </motion.div>
              <p className="text-gray-400 font-medium text-[4rem]">
                <span>Step </span> <span className="text-white">1</span>
              </p>
              <div className="border-t border-[#5AA5FD] w-[84.02px]"></div>
              <ul className="text-white text-[1.8rem] font-medium flex flex-col gap-6">
                <motion.li
                  className="flex items-center gap-2 relative"
                  style={{ color: firstLiColor }}
                >
                  <span className="before:content-['\2022'] before:absolute before:left-[-20px]">
                    Tenant selects the property
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center gap-2 relative"
                  style={{ color: secondLiColor }}
                >
                  <span className="before:content-['\2022'] before:absolute before:left-[-20px]">
                    Tenant selects flexible rent tenure & corresponding amount
                  </span>
                </motion.li>
              </ul>
            </div>
            <div className="absolute bottom-[20%] right-[-10%] w-[250px] h-[450px]">
              <motion.div
                style={{
                  y: image1YPosition,
                  opacity: image1Opacity,
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/Images/step1ss1.png"
                  width={250}
                  className="absolute bottom-[4%] right-[-10%] scale-[230%] z-[1]"
                  height={450}
                  alt="Screenshot 1"
                />
              </motion.div>
              <motion.div
                style={{
                  y: image2YPosition,
                  opacity: image2Opacity,
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/Images/step1ss2.png"
                  alt="Screenshot 2"
                  width={250}
                  className="absolute bottom-[4%] right-[-10%] scale-[250%] z-[1]"
                  height={450}
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-full bg-black"></div>
      </div>
    </div>
  );
};

export default Page2;
