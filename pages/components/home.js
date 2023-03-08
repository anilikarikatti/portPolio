import { Main1 } from "../index"
import Link from "next/link"
export default function Home(){
    return(
        <>
        {/* <Main1></Main1> */}
        
        <div className='about flex sm:flex-row  flex-col sm:h-screen h-fit bg-white overflow' >
            <div className='  backimg bg-cover sm:ml-0 ml-10 rounded bghover'>
                

            </div>
            <div className='sm:h-full sm:w-full  '>
            

                <h1 className="text-black sm:mt-28 mt-8 sm:ml-20 ml-44 sm:text-7xl name"> I am </h1>
                <p className="sm:text-8xl text-xl sm:ml-20 ml-40 text-black texthover name ">Anil  Karikatti</p>
                <p className="sm:text-xl text-xl sm:ml-20 mt-4 ml-40 text-black capitalize">full-stack developer</p>
                
                <h3 className="line-space sm:mt-10 mt-3 sm:ml-40 ml-10 text-black  capitalize">I am a Software Engineer  I love coding , development and make new web experiences for people.</h3>
                <h3 className="text-black line-space  sm:ml-40 ml-10 capitalize ">
                    I am looking for an opportunity in an esteemed organisation to put in my best efforts and always hunger for learning new things and put those skills into continuous implementation to achieve personal growth and fulfill organisational goals.</h3>


                 <div className="links flex">
                    <div className="h-20 w-20  bg-red-200 text-center l1 resume"><a href="https://anilikarikatti.github.io/resume/"><p className="data">resume</p></a></div>
                    <div className=" h-20 w-20  bg-green-200 l1 text-center project"><Link href="/components/projects1"><p className="data">projects</p></Link></div>
                    <div className="h-20 w-20  bg-orange-200 text-center l1 contacts"><Link href="/components/about"><p className="data">about</p></Link></div>

                </div>

                    
            </div>


           
        </div>

        

        </>
    )
}