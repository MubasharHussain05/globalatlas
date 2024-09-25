import {MdPlace} from "react-icons/md"
import {IoCallSharp} from 'react-icons/io5'
import {TbMailPlus} from 'react-icons/tb'
import footerContact from '../../API/FooterApi.json'
import { NavLink } from "react-router-dom"
export const Footer=()=>{
    const footerIcon={
        MdPlace:<MdPlace/>,
        IoCallSharp:<IoCallSharp/>,
        TbMailPlus:<TbMailPlus/>
    }
    return(
        <>
        <footer className="footer-section">
            <div className="container grid grid-three-cols">

                {
                   footerContact.map((curData)=>{
                    const {icon,title,details,id}=curData
                    return(
                        <>
                        <div className="footer-contact" key={id}>
                            <div className="icon">{footerIcon[icon]} </div>

                            <div className="footer-contact-text">
                                <p>{title} </p>
                                <p>{details} </p>
                            </div>
                        </div>
                        </>
                    )
                   }) 
                }

            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="grid grid-two-cold">
                        <div className="copyright-text">
                            <p>
                                Copyright &copy; 2024, All Right
                                <NavLink to="https://mhtechdominator.com/">
                                    Mubashar Hussain
                                </NavLink>
                            </p>
                        </div>
                        <div className="footer-menu">
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="https://mhtechdominator.com/" target="_blank">Social</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Facebook</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
        </>
    )
}