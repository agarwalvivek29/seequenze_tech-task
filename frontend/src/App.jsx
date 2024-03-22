import { useState } from 'react'
import axios from 'axios';
import './App.css'
import { useEffect } from 'react';
import Loader from './components/loader';
import TopBar from './components/topBar';
import NavBar from './components/navBar';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { addCardAtom, contextMenuAtom, dataAtom, navBarAtom } from './store';
import CardArray, { ContextMenu } from './components/card';
import PopAddCard from './components/AddCard';

function App() {
    const [loading, setLoading] = useState(true);
    const setData = useSetRecoilState(dataAtom);
    const isNavBar = useRecoilValue(navBarAtom);

    const addCard = useRecoilValue(addCardAtom);

    const [context,setContext] = useRecoilState(contextMenuAtom);

    useEffect(()=>{
        async function init(){
            const res = await axios.get('https://picsum.photos/v2/list?page=1&limit=6');
            console.log(res.data);
            setData(res.data);
            setLoading(false);
        }
        init();
    },[]);

    return(
        loading ? <Loader /> :
        (
            <div className='flex h-screen max-w-screen overflow-x-hidden' onClick={()=>{
                if(context.visible){
                    setContext({
                        visible : false
                    })
                }
            }}>
                <ContextMenu />
                {addCard && <PopAddCard />}
                {isNavBar ? <NavBar /> : ''}
                <div className='bg-[#F8F8F8] h-full w-full'>
                    <TopBar />
                    <CardArray />
                </div>
            </div>
        )
    )
}

export default App;