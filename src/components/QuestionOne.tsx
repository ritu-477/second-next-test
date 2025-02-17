"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./common/Heading";
import Description from "./common/Decription";

gsap.registerPlugin(ScrollTrigger);

type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
  number: string;
};

const slides: Slide[] = [
  {
    id: 1,
    number: "/assets/images/webp/number-one.webp",
    title: "AI Chatbots don’t create enterprise-grade apps",
    description:
      "Business applications demand ongoing maintenance to address new vulnerabilities, ensure reliability, and deliver updates or bug fixes. With AdaptsAI's advanced context awareness, maintenance becomes effortless—minimizing code ramp-up time, streamlining troubleshooting, and simplifying enhancements for maximum efficiency.",
    image: "/assets/images/webp/image-first.webp",
  },
  {
    id: 2,
    number: "/assets/images/webp/number-one.webp",
    title: "Modernization Doesn’t Have to Mean Failure",
    description:
      "AdaptsAI ensures IP protection by generating custom, original code with no direct replication of copyrighted material. Our LLM engine delivers unique, optimized solutions while maintaining high quality. Users can trust their codebases are free from IP risks, enabling secure, responsible AI innovation.",
    image: "/assets/images/webp/image-second.webp",
  },
  {
    id: 3,
    number: "/assets/images/webp/number-one.webp",
    title: "Protected from Legal Risks and IP liability",
    description:
      "AdaptsAI ensures IP protection by generating custom, original code with no direct replication of copyrighted material. Our LLM engine delivers unique, optimized solutions while maintaining high quality. Users can trust their codebases are free from IP risks, enabling secure, responsible AI innovation.",
    image: "/assets/images/webp/image-third.webp",
  },
  {
    id: 4,
    number: "/assets/images/webp/number-one.webp",
    title: "AI generated apps need maintenance too!",
    description:
      "Business applications demand ongoing maintenance to address new vulnerabilities, ensure reliability, and deliver updates or bug fixes. With AdaptsAI's advanced context awareness, maintenance becomes effortless—minimizing code ramp-up time, streamlining troubleshooting, and simplifying enhancements for maximum efficiency.",
    image: "/assets/images/webp/image-fourth.webp",
  },
];

const Hero = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 3000; // Duration for the slide change

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    // Animate slider using GSAP
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        xPercent: -100 * currentIndex,
        duration: 1.2,
        ease: "power2.out",
      });
    }

    // Animate progress bar
    if (progressBarRef.current) {
      gsap.fromTo(
        progressBarRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: slideDuration / 1000,
          ease: "linear",
        }
      );
    }
  }, [currentIndex]);

  return (
    <div className="bg-custom-black max-xl:py-12 min-h-[1014px] flex justify-center flex-col items-center overflow-hidden relative">
      <div className="max-w-[1172px] px-4 mx-auto">
        <Image
          src="/assets/images/webp/blue-layer.webp"
          alt="shadow"
          width={199}
          height={199}
          className="absolute top-10 right-0"
        />
      </div>
      <Heading
        title="Transforming Secure, Modern "
        highlightedText="Development "
        titleTwo="with AdaptsAI"
        customClass="text-center max-w-[830px] mx-auto max-xl:px-4"
      />

      <div className="relative w-full overflow-hidden max-w-[1140px]">
        <div className="absolute xl:top-[8%] top-[5%] left-0 w-full h-1 bg-gray-700">
          <div ref={progressBarRef} className="h-full bg-blue-500"></div>
        </div>
        <div
          ref={sliderRef}
          className="flex transition-transform ease-out duration-700"
        >
          {slides.map((slide) => (
            <div key={slide.id} className="flex-shrink-0 w-full flex xl:flex-row flex-col items-center gap-8 lg:pt-[60px] pt-12 px-4">
              <div className="max-w-[461px] w-full">
                <Image
                  src={slide.number}
                  alt="number"
                  width={297}
                  height={182}
                  className="mb-6 max-lg:max-w-[100px] max-md:max-w-[50px] pointer-events-none"
                />
                <h4 className="font-bold max-xl:text-center text-custom-xl text-white max-lg:text-2xl">
                  {slide.title}
                </h4>
                <Description customClass="max-xl:text-center" title={slide.description} />
              </div>
              <Image
                src={slide.image}
                alt="slider image"
                width={614}
                height={417}
                className="shadow-lg rounded-xl w-full max-sm:max-w-[300px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
