import '../../index.css'

function About() {
    return (
        <section id="about" className="relative z-20 w-full h-screem mt-screen">
        <div className="flex justify-center">
          <p className="lg:text-[5pc] text-[4pc] font-bold  text-white mt-[5rem]">About Me</p>
        </div>
        <div className="flex  justify-center h-screen items-center gap-8 mt-[5rem] md:mt-[-10rem]">

          {/* <img
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover"
            src=""
            alt="profile"
            loading="lazy"
          /> */}
          <div className="flex flex-col md:w-1/2 w-[75%] 2xl:w-[47%] lg:mt-0 mt-[3rem] ">
            <ul className="text-white justify-center flex text-[1pc] lg:text-2xl leading-relaxed">
              <li>
                Hi there 👋🏼, I'm{" "}
                <span className="text-[#FFD700]">Nia</span>!
              </li>
              
            </ul>
            
          </div>
        </div>
      </section>
    );
  }
  
export default About;