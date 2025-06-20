// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="glass-effect glow-box relative rounded-lg border border-gray-700/60 bg-gradient-to-br from-black to-gray-950 w-full hover:scale-105 transition-all duration-500 hover:animate-hologram group shadow-2xl backdrop-blur-minimal">
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-neon-pink to-neon-purple animate-shimmer bg-[length:200%_200%]"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-neon-purple to-transparent animate-shimmer bg-[length:200%_200%]"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative bg-gray-950/95">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-600 animate-pulse shadow-md shadow-red-600/50"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-600 animate-pulse shadow-md shadow-orange-600/50" style={{animationDelay: '0.2s'}}></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-600 animate-pulse shadow-md shadow-green-600/50" style={{animationDelay: '0.4s'}}></div>
        </div>
        <p className="text-center ml-3 text-gray-100 text-base lg:text-xl font-bold group-hover:text-neon-purple transition-all duration-300">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[3px] border-gradient-to-r from-neon-blue to-neon-purple px-4 lg:px-8 py-4 lg:py-8 bg-black/95">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-neon-pink font-bold">const</span>
            <span className="mr-2 text-gray-100 font-bold">project</span>
            <span className="mr-2 text-neon-pink font-bold">=</span>
            <span className="text-gray-300">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-gray-100 font-bold">name:</span>
            <span className="text-gray-300">{`'`}</span>
            <span className="text-neon-yellow font-bold">{project.name}</span>
            <span className="text-gray-300">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-gray-100 font-bold">tools:</span>
            <span className="text-gray-300">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-neon-blue hover:text-neon-purple transition-colors duration-300 font-bold">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-gray-300">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-300">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-gray-100 font-bold">myRole:</span>
            <span className="text-neon-green font-bold">{project.role}</span>
            <span className="text-gray-300">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-gray-100 font-bold">Description:</span>
            <span className="text-cyan-400 font-medium">{' ' + project.description}</span>
            <span className="text-gray-300">,</span>
          </div>
          <div><span className="text-gray-300">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;