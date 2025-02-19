import React from 'react';
import {experiences} from "@/data";
import Image from "next/image";

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
            <div className="flex flex-col items-center mx-lg:mt-10">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                    {experiences.map(({id, img, name, nameImg}) => (
                        <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                            <Image src={img} alt={name} className="md:w-10 w-5" width={500} height={300}/>
                            <Image src={nameImg} alt={name} className="md:w-24 w-20" width={500} height={300}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;