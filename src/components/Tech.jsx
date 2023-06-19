import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      {" "}
      <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
      <div className="p-5 pl-0">

 <p className="text-lg font-bold">Web development :
         
        </p>
   <p>HTML5, CSS3, SASS, TypeScript, Bootstrap</p>

        <p className="text-lg font-bold">
          Programming Languages :
          
        </p>
  <p>JavaScript(ES6)</p>
  

    
       
      
        <p className=" text-lg font-bold">
          Frameworks :
        </p>
        <p>React.js, Angular, Node.js, Tailwind CSS</p>
        <p className=" text-lg font-bold">
          Libraries :
        </p>
        <p>Redux, Express.js, Mongoose</p>
        <p className=" text-lg font-bold">
          Databases :
        </p>
        <p> MongoDB, Firebase, Google Cloud, AWS</p>
        <p className=" text-lg font-bold">
          Tools/ IDE :
        
        </p>
        <p>VS code, NPM, Git, Github, Postman API, Mlab, Docker</p>
        <p className=" text-lg font-bold">
          Hands-on experience :
        </p>
        <p>Next.js, Strapi, Stripe</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
