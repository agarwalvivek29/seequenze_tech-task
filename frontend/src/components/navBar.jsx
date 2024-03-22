import { useRecoilState, useSetRecoilState } from 'recoil';
import image from './../assets/image.png';
import { Icons } from './Icons';
import { navBarAtom } from '../store';

export default function NavBar(){
    
    const [isNav, setIsNav] = useRecoilState(navBarAtom);

    return(
        <div className='max-h-screen h-screen overflow-y-auto w-[400px] flex flex-col items-center justify-between'>
            <div>
                <div className='p-4 m-2 border-b flex justify-center'>
                    <img src={image} className='w-[76.11px] h-[27px]'/>
                </div>
                <div className='border-b'>
                    <div className='p-4 hover:text-black px-16 cursor-pointer'>
                        <Icons who='MyProjects' />
                    </div>
                    <div className='p-4 hover:text-black px-16 cursor-pointer'>
                        <Icons who='Btn2' />
                    </div>
                </div>
                <div className='border-b'>
                    <div className='p-4 hover:text-black px-16 cursor-pointer'>
                        <Icons who='Btn3' />
                    </div>
                    <div className='p-4 hover:text-black px-16 cursor-pointer'>
                        <Icons who='Btn4' />
                    </div>
                </div>
            </div>
            <div>
                <div className='p-4 hover:text-black px-16 cursor-pointer'>
                    <Icons who='HelpNSupport' />
                </div>
                <div className='p-4 hover:text-black px-16 cursor-pointer'>
                    <Icons who='Feedback' />
                </div>
                <div className='p-4 hover:text-black px-16 cursor-pointer' onClick={()=>{
                    setIsNav(!isNav)
                }}>
                    <Icons who='Collapse' />
                </div>
            </div>
        </div>
    )
}