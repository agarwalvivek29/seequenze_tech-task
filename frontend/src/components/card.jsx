import { useRecoilState, useRecoilStoreID, useRecoilValue, useSetRecoilState } from "recoil";
import { Icons } from "./Icons";
import { addCardAtom, contextMenuAtom, dataAtom } from "../store";

export function AddCard(){

    const setAddCard = useSetRecoilState(addCardAtom);

    return(
        <div className="w-[404px] h-[265px] border rounded-md flex flex-col justify-center items-center bg-white m-2 "
        onClick={()=>{
            setAddCard(true)
        }}
        >
            <div className="w-[360px] h-[180px] rounded-md bg-[#FA782F66] bg-opacity-40 flex flex-col justify-center items-center">
                <Icons />
            </div>
            <div className="m-1 text-[16px]">
                Create a new project
            </div>
            <div className="text-[12px]">
                or try a sample project
            </div>
        </div>
    )
}

export function ViewCard({details}){

    const [context,setContext] = useRecoilState(contextMenuAtom);

    function handleclick(e){
        e.preventDefault();
        setContext({
            visible : true,
            position : {
                x : e.clientX,
                y : e.clientY
            },
            id: details.id
        })
    }

    return(
        <div id={details.id} className="w-[404px] h-[265px] border rounded-md flex flex-col justify-center items-center bg-white m-2" onContextMenu={handleclick}>
            {details.download_url!=='' ? <img src={details.download_url} className="w-full h-full p-2" /> : <Icons who="camera" />}
        </div>
    )
}

export default function CardArray(){

    const data = useRecoilValue(dataAtom);

    return(
        <div className="m-7 max-h-[calc(100vh-90px)] overflow-y-auto">
            <div className="text-[40px]">
                My Projects
            </div>
            <div className="flex flex-wrap">
                {
                    data.map((ele)=>{
                        return(
                            <ViewCard details={ele} key={ele.id}/>
                        )
                    })
                }
                <AddCard />
            </div>
        </div>
    )
}

export function ContextMenu(){
    const [context,setContext] = useRecoilState(contextMenuAtom);
    const [data,setData] = useRecoilState(dataAtom);

    function deleteCard(){
        const newData = data.filter((obj)=>obj.id!==context.id)
        setData(newData);
    }

    return(
        context.visible === true && <div className="absolute "
        style={{
            top : context.position.y,
            left : context.position.x
        }}
        >
            <button className="bg-white p-3 rounded-md" onClick={()=>{
                deleteCard(context.id);
            }}>
                Delete
            </button>
        </div>
    )
}