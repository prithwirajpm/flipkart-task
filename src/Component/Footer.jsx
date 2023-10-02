import React from 'react'
import './Footer.css';
import Mail from './Mail';

function Footer() {
    return (
        <>
            <div className="bg-white w-100 text-dark">
                <div className='row p-5'>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img
                                    alt=""
                                    src="https://o.remove.bg/downloads/d7ff90ce-f65a-476f-af0e-0935f56cd513/Screenshot__54_-removebg-preview.png"
                                    width="150"
                                    height="100"
                                    className=""
                                />
                            </div>
                            <p className='text-dark' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis neque id quia eum pariatur? Suscipit nam temporibus reprehenderit deserunt. Repudiandae itaque rerum tenetur magni veniam impedit quasi consectetur ea dignissimos?</p>
                            <div className="pe-1 d-flex justify-content-center align-items-center">
                                <Mail />
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <div>
                            <h6>RESOURCES</h6>
                            <div className='d-flex flex-column'>
                                <a href='#' className='pt-1 text-decoration-none text-dark'>Application</a>
                                <a href='#' className='pt-1 text-decoration-none text-dark'>Documentation</a>
                                <a href='#' className='pt-1 text-decoration-none text-dark'>Systems</a>
                                <a href='#' className='pt-1 text-decoration-none text-dark'>FAQ</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <div>
                            <h6>PRICING</h6>
                            <div className='d-flex flex-column'>
                                <a href='#' className='pt-1 text-decoration-none text-dark'>Overview</a>
                                <a href='#' className='pt-1 text-decoration-none text-dark'>Permium Plans</a>
                                <a href='#' className='pt-1 text-decoration-none text-dark'>Affiliate Programs</a>
                                <a href='#' className='pt-1 text-decoration-none text-dark'>Promotions</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <div>
                            <h6>SOCIAL</h6>
                            <div className='d-flex flex-column'>
                                <a href='#' className='pt-1 text-decoration-none text-dark'>Facebook</a>
                                <a href='#' className='pt-1 text-decoration-none text-dark'>Twitter</a>
                                <a href='#' className='pt-1 text-decoration-none text-dark'>Instagram</a>
                                <a href='#' className='pt-1 text-decoration-none text-dark'>Linkedin</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className='pb-2 text-center'>
                <p>Copyright @ 2023 E-Shopping. Build with React</p>
                </div>
            </div>
        </>
    )
}

export default Footer