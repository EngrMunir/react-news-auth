import { BsGoogle } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';

import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <BsGoogle></BsGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-4">Find Us on</h2>
                <a href="" className='p-4 flex text-lg items-center border rounded-t-lg'>
                    <ImFacebook className='mr-3'></ImFacebook>
                    <span>Facebook</span>
                </a>
                <a href="" className='p-4 flex text-lg items-center border-x '>
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Instagram</span>
                </a>
                <a href="" className='p-4 flex text-lg items-center border rounded-b-lg'>
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
            </div>
            {/* q-zone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q-zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;