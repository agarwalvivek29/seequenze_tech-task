import { Icons } from "./Icons";
import image from './../assets/image.png';
import { useRecoilState } from "recoil";
import { navBarAtom } from "../store";

export default function TopBar(){

    const [isNav, setIsNav] = useRecoilState(navBarAtom);

    return(
        <div className="bg-white h-[58px] flex items-center justify-between">
            <div>
                {isNav ? '' :
                (
                    <div onClick={()=>{
                        setIsNav(!isNav);
                    }}
                    className="p-3 cursor-pointer flex items-center"
                    >
                        
                        <Icons who="Menu" />
                        <img src={image} className="w-16 m-2" />
                    </div>
                )
                }
            </div>
            <div className="m-2 cursor-pointer">
                <Icons who="TopBar" />
            </div>
        </div>
    )
}