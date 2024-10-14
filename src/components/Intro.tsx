import { Menu, LastLine } from "./others/Utils";
import Typewriter from "typewriter-effect";
export const Intro = () => {
  return (
    <div className="w-screen md:h-screen h-screen max-h-[1200px] p-4">
      <div className="custom-div relative">
        <div className="text-orange-400 grid grid-cols-1 md:grid-cols-2 px-2 md:px-24 ">
          <div className="text-2xl md:text-4xl font-bold mt-8 md:mt-24">
            MOHAMMED DANISH
            <div className="mt-4 text-xl flex space-x-2">
              <div>I&#39;m a</div>
              <div>
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "Frontend Developer",
                      "Backend Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div className="mt-4 text-xl">I build full stack applications</div>

            <div className="mt-8 md:mt-48 text-xl w-fit">
                <a href="https://drive.google.com/file/d/1K-0PYEHr0C3TYW_M2iPI0S2kEBEQQvaA/view" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <div>RESUME</div>
                    <div><img src="arrow.svg" alt="" width={25}/></div> 
                </a>
                <div>
                <a href="https://danishsalmani.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <div>PORTFOLIO</div>
                    <div><img src="arrow.svg" alt="" width={25}/></div> 
                </a>
                </div>
            </div>
          </div>
          <div className="mt-6 font-bold">
            <div>
              <span className="bg-black text-sm md:text-base">
                I'm a passionate and dedicated developer. My expertise lies in
                the MERN stack, TypeScript, and PostgreSQL. With a strong
                foundation in these technologies, I have successfully built
                several full-stack projects, showcasing my ability to develop
                robust and scalable web applications.
              </span>
            </div>
            <div className="hidden md:block">
              <span className="bg-black text-sm md:text-base">
                I thrive on solving complex problems and continuously improving
                my skills. My journey in web development has equipped me with
                the knowledge and experience to create efficient and
                user-friendly solutions. I am always eager to learn new
                technologies and take on challenging projects.
              </span>
            </div>
            <div className="hidden md:block">
              <span className="bg-black text-sm md:text-base">
                Whether it's developing dynamic front-end interfaces or
                designing efficient back-end architectures, I bring a meticulous
                and innovative approach to my work. I am committed to delivering
                high-quality code and collaborating effectively with teams to
                achieve project goals.
              </span>
            </div>
          </div>
        </div>
        <div>
          <Menu />
          <LastLine pgno="1" />
          <div className="img-right">
            <img src="tva-logo-red.png" alt="" className="w-32 md:w-36" />
          </div>
        </div>
      </div>
    </div>
  );
};
