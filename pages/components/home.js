import { Main1 } from "../index"

export default function Home(){
    return(
        <>
        <Main1></Main1>
        <div className='about' >
            <div className='img backimg'>
                

            </div>
            <div className='img'>
            {/* Hello,This is

Irayya Hiremath

I am a Software Engineer  I love to design and make new web experiences for people.
I am looking for an opportunity in an esteemed organisation to put in my best efforts and always hunger for learning new things and put those skills into continuous implementation to achieve personal growth and fulfil organisational goals.

I Have done projects using following WebTechnologies */}


                <h1 className="color-white">Hello , This is </h1>
                <h1 className="">Anil I Karikatti</h1>
                <h3 className="line-space">I am a Software Engineer  I love coding , development and make new web experiences for people.
                    I am looking for an opportunity in an esteemed organisation to put in my best efforts and always hunger for learning new things and put those skills into continuous implementation to achieve personal growth and fulfil organisational goals.
                    </h3>
                    <h3 className="margin-top-10">
                    I Have done projects using following WebTechnologies</h3>

                    <div className="tech">
                        <div className="inner-tech padd">html</div>
                        <div className="inner-tech padd">css </div>
                        <div className="inner-tech padd">javascript</div>
                        <div className="inner-tech padd">react js</div>
                        <div className="inner-tech padd">tailwind css</div>
                        <div className="inner-tech padd">next js </div>
                        <div className="inner-tech padd">node js</div>
                        <div className="inner-tech padd">express js</div>
                        <div className="inner-tech padd">aws</div>


                    </div>
            </div>

        </div>

        </>
    )
}