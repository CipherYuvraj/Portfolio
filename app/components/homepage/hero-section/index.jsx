// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 overflow-hidden">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 animate-float opacity-20"
      />

      {/* Particle Background */}
      <div className="absolute inset-0 -z-20">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle absolute animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 relative z-10">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] animate-fade-in">
            <span className="hologram-text">Hello,</span> <br />
            <span className="hologram-text">This is</span> {' '}
            <span className="neon-text animate-neon-pulse">{personalData.name}</span>
            <br />
            <span className="hologram-text">{`I'm a Professional `}</span>
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              {personalData.designation}
            </span>
            <span className="hologram-text">.</span>
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all duration-500 text-neon-blue hover:scale-125 hover:rotate-12 hover:text-neon-purple glow-box rounded-full p-2 hover:animate-bounce-slow"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all duration-500 text-neon-purple hover:scale-125 hover:rotate-12 hover:text-neon-pink glow-box rounded-full p-2 hover:animate-bounce-slow"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all duration-500 text-neon-pink hover:scale-125 hover:rotate-12 hover:text-neon-green glow-box rounded-full p-2 hover:animate-bounce-slow"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all duration-500 text-neon-green hover:scale-125 hover:rotate-12 hover:text-electric glow-box rounded-full p-2 hover:animate-bounce-slow"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all duration-500 text-electric hover:scale-125 hover:rotate-12 hover:text-neon-blue glow-box rounded-full p-2 hover:animate-bounce-slow"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="cyber-button bg-gradient-to-r from-neon-purple to-neon-blue p-[1px] rounded-full transition-all duration-500 hover:from-neon-blue hover:to-neon-purple hover:scale-110 hover:animate-glow">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-cyber-dark rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-300 ease-out md:font-semibold flex items-center gap-1 hover:gap-3 hover:bg-gradient-to-r hover:from-cyber-dark hover:to-cyber-gray">
                <span>Contact me</span>
                <RiContactsFill size={16} className="animate-pulse" />
              </button>
            </Link>

            <Link 
              className="cyber-button flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-neon-pink to-plasma px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-500 ease-out hover:text-white hover:no-underline md:font-semibold hover:scale-110 hover:animate-glow hover:from-plasma hover:to-neon-pink" 
              role="button" 
              target="_blank" 
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} className="animate-bounce" />
            </Link>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 glass-effect glow-box rounded-lg border-0 bg-gradient-to-br from-black/95 to-gray-950/95 hover:animate-hologram transition-all duration-500 backdrop-blur-minimal">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neon-blue to-neon-purple animate-shimmer bg-[length:200%_200%]"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-neon-purple to-transparent animate-shimmer bg-[length:200%_200%]"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400 animate-pulse"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="h-3 w-3 rounded-full bg-green-200 animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-gradient-to-r from-neon-blue to-neon-purple px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-neon-pink animate-neon-pulse">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-neon-pink animate-neon-pulse">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-neon-yellow animate-shimmer">Yuvraj Udaywal</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-neon-blue animate-neon-pulse">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-neon-purple animate-neon-pulse">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-neon-pink animate-neon-pulse">Firebase</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-neon-green animate-neon-pulse">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-electric animate-neon-pulse">Typescript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-plasma animate-neon-pulse">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-aurora animate-neon-pulse">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-neon-yellow animate-neon-pulse">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-neon-blue animate-neon-pulse">Azure</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;