import user from '../media/user.png'
import conection from '../media/conection.png'
import office from '../media/office.png'

import './styles.css'

function Home () {

    return (

        <>
            
            <section class="bg-black overflow-hidden text-white">

                <div class="absolute inset-0">
                    <div class="stars"></div>
                </div>

                <div class="relative z-10 container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div class="grid gap-16 items-center">
                            <div>
                                <h1 class="text-6xl font-extrabold leading-tight">AI-Powered <br />Media Agency <br /><span class="text-cyan-400">Delivering Performance</span><br />Excellence in LATAM</h1>
                                <p class="mt-8 text-gray-400 text-lg max-w-xl">Fusionamos tecnología de IA con estrategias de resultados para acelerar el crecimiento de marcas líderes en los mercados de Latinoamérica.</p>
                                <div class="flex gap-5 mt-10">
                                    <div class="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 w-44">
                                        <div className="grid md:grid-cols-2">
                                            <img className='icon-small' src={user} alt="" />
                                            <h3 class="text-4xl font-bold text-cyan-400">+60</h3>   
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-400 mt-2 uppercase tracking-widest">PROFESIONALES</p>
                                        </div>
                                    </div>
                                    <div class="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 w-44">
                                        <div className="grid md:grid-cols-2">
                                            <img className='icon-small' src={conection} alt="" />
                                            <h3 class="text-4xl font-bold text-cyan-400">7</h3>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-400 mt-2 uppercase tracking-widest">PRINCIPALES MERCADOS EN LATAM</p>
                                        </div>
                                    </div>
                                    <div class="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 w-44">
                                        <div className="grid md:grid-cols-2">
                                            <img className='icon-small' src={office} alt="" />
                                            <h3 class="text-4xl font-bold text-cyan-400">4</h3>  
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-400 mt-2 uppercase tracking-widest">OFICINAS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative flex items-center justify-center'>
                            <div class="relative w-[500px] h-[500px] rounded-[40px] border border-gray-800 bg-[#0d0d0d]/80 backdrop-blur-sm shadow-2xl overflow-hidden">
                                <div class="absolute inset-0 bg-cyan-400/5"></div>
                                <div class="absolute top-10 right-10 w-10 h-10 border-4 border-blue-400 rounded-full"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="relative w-44 h-44">
                                        <div class="absolute inset-0 bg-cyan-400 rounded-[30px] rotate-45"></div>
                                        <div class="absolute inset-[30%] bg-[#0d0d0d] rounded-xl"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>    

            <section className='bg-black border-tb-grey text-white'>
                <div className="container mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 border-grey rounded-lg">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section>

        </>
    )

} export default Home;