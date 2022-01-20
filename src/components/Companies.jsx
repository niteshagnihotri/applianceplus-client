import React from "react";
import '../App.css';
import lg from '../images/lg.png';
import samsung from '../images/samsung.png';
import hitachi from '../images/hitachi.png';
import haier from '../images/haier.png';
import huawei from '../images/huawei.png';
import siemens from '../images/Siemens.png';
import bluestar from '../images/bluestar.png';
import bosch from '../images/bosch.png';
import Onida from '../images/onida.png';
import ps from '../images/ps.jpeg';
import bpl from '../images/bpl.png';

const Companies = () => {
    return (

        <div className="w-100 flex h-auto items-center pb-10">
            <div className="w-10/12 lg:w-9/12 mx-auto flex flex-col my-12">
                <h2 className="text-center text-2xl sm:text-4xl tracking-wider leading-loose md:leading-0 font-QuickSand font-bold">We Service <span className="text-red-800 font-extrabold text-3xl sm:text-5xl">All Makes & Models
</span></h2><div className='w-48 my-2 py-1 border-b-4 border-b-red-400 sm:mx-auto ' />

                <div className="w-auto flex lg:flex-row py-14 md:my-0 overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100 space-x-10">
                    <img className="companiesimg" src={lg} alt="" />
                    <img className="companiesimg" src={samsung} alt="" />
                    <img className="companiesimg" src={hitachi} alt="" />
                    <img className="companiesimg" src={haier} alt="" />
                    <img className="companiesimg" src={bosch} alt="" />
                    <img className="companiesimg" src={Onida} alt="" />
                    <img className="companiesimg" src={siemens} alt="" />
                    <img className="companiesimg" src={bluestar} alt="" />
                    <img className="companiesimg" src={ps} alt="" />
                    <img className="companiesimg" src={huawei} alt="" />
                    <img className="companiesimg" src={bpl} alt="" />
                </div>
            </div>
        </div>

    )
}
export default Companies;