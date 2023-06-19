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
      
      <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
     
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xl">
                Web development
                </th>
             
                <td class="px-6 py-4 text-lg">
                HTML5, CSS3, SASS, TypeScript, Bootstrap
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xl">
                Programming Languages
                </th>
             
                <td class="px-6 py-4 text-lg" >
                JavaScript(ES6)
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xl">
                Frameworks 
                </th>
             
                <td class="px-6 py-4 text-lg">
                React.js, Angular, Node.js, Tailwind CSS
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xl">
                Libraries  
                </th>
             
                <td class="px-6 py-4 text-lg">
                Redux, Express.js, Mongoose
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xl">
                Databases 
                </th>
             
                <td class="px-6 py-4 text-lg">
                MongoDB, Firebase, Google Cloud, AWS
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xl">
                Tools/ IDE 
                </th>
             
                <td class="px-6 py-4 text-lg">
                VS code, NPM, Git, Github, Postman API, Mlab, Docker
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xl">
                Hands-on experience 
                </th>
             
                <td class="px-6 py-4 text-lg">
                Next.js, Strapi, Stripe
                </td>
            </tr>
        </tbody>
    </table>
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
