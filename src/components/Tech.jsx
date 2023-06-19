import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {" "}
 
<motion.div 
 
 variants={textVariant()}

>
      <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
      </motion.div>

      
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
      <div >
      <motion.div 
 
 variants={textVariant()}

>
      <h2 className={`${styles.sectionHeadText}`}>Education</h2>
  

      <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
     
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xl">
                   VIT University, Vellore
                   B.Tech - EEE (6.74 / 10 CGPA)
                </th>
             
                <td class="px-6 py-4 text-lg">
             2012 - 2017 
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xl">
                  12th Grade 
                  HSC (91.5%)
                </th>
             
                <td class="px-6 py-4 text-lg" >
                 2010 - 2012 
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xl">
                10th Grade 
                  SSC (92.6%)
                </th>
             
                <td class="px-6 py-4 text-lg">
                2008 - 2010
                </td>
            </tr>
        </tbody>
    </table>
</div>
</motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
