import '../../index.css'

function About() {
    return (
        <section id="about"  className="relative z-20 w-full h-screem mt-screen">
        <div className="flex justify-center">
          <p className="lg:text-[5pc] text-[4pc] font-bold  text-white mt-[5rem]">About Me</p>
        </div>
        <div className="flex  justify-center h-screen items-center gap-8 mt-[5rem] md:mt-[-10rem]">
      {/* add profile pic */}
          {/* <img
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover"
            src=""
            alt="profile"
            loading="lazy"
          /> */}

          {/* add you intro */}
          <div className="flex flex-col  w-[75%] 2xl:w-[57%] lg:mt-0 mt-[3rem] ">
            <p className="text-white justify-center flex text-[1pc] lg:text-2xl leading-relaxed">
            Hello! I'm Nia Alvarado, a junior majoring in mechanical engineering at Oregon State University, with a specialization in computation. My fascination with the mysteries of space exploration has been a lifelong passion. Engineering is not just a field of study for me; it's my greatest life passion.

My academic focus lies in mechanical engineering, and I have a particular interest in computation. While my early experiences include contributing to small-scale rocketry projects, the bulk of my practical knowledge comes from my nearly two-year stint at the Bonneville Power Administration. I've been part of the Pathways Internship Program, where I've gained valuable insights into energy efficiency engineering.

Working with the Bonneville Power Administration has been a fulfilling experience, allowing me to apply the skills I've honed in the classroom to real-world scenarios. I'm particularly excited about the intersection of engineering and energy efficiency, and my current role has been instrumental in expanding my expertise in this area.

As I look ahead, I am eager to continue my academic journey, further developing my skills and knowledge. I am also keen on forging connections with like-minded individuals who share my enthusiasm for engineering and space exploration. I'm excited about the opportunities for growth and learning that lie ahead in my career.
            </p>
            
          </div>
        </div>
      </section>
    );
  }
  
export default About;