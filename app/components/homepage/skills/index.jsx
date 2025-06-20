// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
      <div className="w-[150px] h-[150px] bg-gradient-to-r from-neon-blue to-neon-purple rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-30 animate-pulse-slow"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent w-full animate-shimmer bg-[length:200%_200%]" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-neon-blue"></span>
          <span className="glass-effect glow-box w-fit text-white p-2 px-5 text-xl rounded-md font-bold neon-text animate-neon-pulse">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-neon-purple"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.2] cursor-pointer hover:animate-float"
              key={id}>
              <div className="h-full w-full rounded-lg glass-effect glow-box bg-gradient-to-br from-black/90 to-gray-950/90 shadow-none shadow-gray-50 group-hover:border-neon-blue group-hover:shadow-neon-blue group-hover:shadow-lg transition-all duration-500 hover:rotate-3 hover:animate-hologram backdrop-blur-minimal">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neon-purple to-transparent group-hover:via-neon-blue transition-all duration-500" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10 group-hover:animate-bounce-slow transition-all duration-300">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg group-hover:animate-glow filter group-hover:brightness-125 group-hover:drop-shadow-lg transition-all duration-300"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg group-hover:text-neon-blue group-hover:animate-neon-pulse transition-all duration-300 font-medium">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;