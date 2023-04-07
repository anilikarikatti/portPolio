import { Main1 } from "../index"
import Link from "next/link"

import { useEffect } from "react";
import AOS from 'aos'

import 'aos/dist/aos.css';
import Head from "next/head";
export default function Home(){

    useEffect(() => {
    
        AOS.init({
          duration : 3000
        });    
        AOS.refresh();
      }, [])
    return(
        <>
        {/* <Main1></Main1> */}
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Dancing+Script:wght@400;500;600;700&family=Oswald&family=Passions+Conflict&family=Poppins:wght@300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&family=Satisfy&display=swap" rel="stylesheet"></link>

        </Head>
        
        <div className='about flex sm:flex-row  flex-col sm:h-screen h-fit background overflow' >
            <div className='  backimg bg-cover sm:ml-0 ml-8 rounded bghover sm:h-[600px] h-[300px] w-[300px] sm:w-[1000px] sm:mt-[50] mt-[20px] '>
                

            </div>
            <div className='sm:h-full sm:w-full  '>
            

                <h1 className="text-black sm:mt-28 mt-8 sm:ml-20 ml-44 sm:text-7xl name" data-aos="flip-down"> I am </h1>
                <p className="sm:text-8xl text-xl sm:ml-20 ml-36 text-black texthover name " data-aos="flip-left">Anil  Karikatti</p>
                <p className="sm:text-xl text-xl sm:ml-20 mt-4 ml-28 text-black capitalize" data-aos="flip-up">full-stack developer</p>
                
                <h3 className="line-space sm:mt-10 mt-3 sm:ml-40 ml-6 text-black  capitalize" data-aos="flip-up">I am a Software Engineer  I love coding , development and make new web experiences for people.</h3>
                <h3 className="text-black line-space  sm:ml-40 ml-6 capitalize " data-aos="flip-up">
                    I am looking for an opportunity in an esteemed organisation to put in my best efforts and always hunger for learning new things and put those skills into continuous implementation to achieve personal growth and fulfill organisational goals.</h3>


                 <div className="links flex">
                    <div className="h-20 w-20  bg-red-400 text-center l1 resume" ><a href="https://anilikarikatti.github.io/resume/"><p className="data" >resume</p></a></div>
                    <div className=" h-20 w-20  bg-green-400 l1 text-center project" ><Link href="/components/project2"><p className="data">projects</p></Link></div>
                    <div className="h-20 w-20  bg-orange-400 text-center l1 contacts" ><Link href="/components/contact"><p className="data" >contact</p></Link></div>

                </div>

                    
            </div>


           
        </div>

        

        </>
    )
}