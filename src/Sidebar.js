import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import { SearchOutlined } from "@material-ui/icons"
import SidebarChat from './SidebarChat';
import db from "./firebase";
import { useStateValue } from './StateProvider';
import MenuIcon from '@material-ui/icons/Menu';

function Sidebar() {

    const hideClassOne =["sidebar__search"]
    const hideClassTwo =["sidebar__chats"]

    const [click,setClick] = useState(false)

    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    // to get user from datalayer for using photo 

    useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
            setRooms(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
                //   creating our own object of id and data
            }))
            ) // we are returning unsubscribe 
        )
        return () => {
            unsubscribe();
            // it wil detach above real time listner after we done using it
        }
    }, [])

    if(click) {
        hideClassOne.push("hide")
        hideClassTwo.push("hidetwo")
    }

    const handleClick =()=> setClick(!click);


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
                <div className="sidebar__headerRight">

                    <IconButton>
                        <DonutLargeIcon />

                    </IconButton>
                    <IconButton>
                        <ChatIcon />

                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />

                    </IconButton>

                    <IconButton>
                        <div className="burgerHide"  onclick={handleClick}>
                        <MenuIcon   />
                        </div>
                    </IconButton>
                </div>
            </div>
            <div className={hideClassOne.join(" ")} >
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="search or start a new search type=" text />
                </div>
            </div>
            <div className={hideClassTwo.join(" ")} >
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}

            </div>
        </div>
    )
}

export default Sidebar



// import React, {useState,useEffect} from 'react';
// import './Sidebar.css';
// import {Avatar, IconButton} from "@material-ui/core";
// import DonutLargeIcon from "@material-ui/icons/DonutLarge";
// import ChatIcon from "@material-ui/icons/Chat";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import {SearchOutlined} from "@material-ui/icons";
// import SidebarChat from "./SidebarChat";
// import db from './firebase';
// import { useStateValue } from './StateProvider';

// function Sidebar(props) {

//     const [rooms, setRooms] = useState([]);
//     const [{user},dispatch] = useStateValue();

//     useEffect(() => {
//         const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
//             setRooms(snapshot.docs.map(doc => (
//                 {
//                     id: doc.id,
//                     data: doc.data()
//                 }
//             )

//             ))
//         ));

//         return () => {
//             unsubscribe();
//         }
//     },[]); 

//     return (
//         <div className="sidebar">
//             <div className="sidebar_header">
//                 <Avatar src={user?.photoURL}/>
//                 <div className="sidebar_headerRight">
//                     <IconButton>
//                         <DonutLargeIcon/>
//                     </IconButton>
//                     <IconButton>
//                         <ChatIcon/>
//                     </IconButton>
//                     <IconButton>
//                         <MoreVertIcon/>
//                     </IconButton>

//                 </div>
//             </div>
//             <div className="sidebar_search">
//                 <div className="sidebar_searchContainer">
//                     <SearchOutlined />
//                     <input type="text" placeholder="Search or start new chat"/>
//                 </div>
//             </div>
//             <div className="sidebar_chats">
//                 <SidebarChat addNewChat/>
//                 {rooms.map(room=> (
//                     <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Sidebar;

// import React, { useEffect, useState } from 'react'
// import './Sidebar.css'
// import { Avatar, IconButton } from "@material-ui/core"
// import DonutLargeIcon from '@material-ui/icons/DonutLarge';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import ChatIcon from '@material-ui/icons/Chat';
// import { SearchOutlined } from "@material-ui/icons"
// import SidebarChat from './SidebarChat';
// import db from "./firebase";
// import { useStateValue } from './StateProvider';
// import MenuIcon from '@material-ui/icons/Menu';

// function Sidebar({ show, click }) {

//     const hideClassOne = ["sidebar__search"]
//     const hideClassTwo = ["sidebar__chats"]

//     const [sideToogle, setSideToogle] = useState(false)

//     const [rooms, setRooms] = useState([]);
//     const [{ user }, dispatch] = useStateValue();
//     // to get user from datalayer for using photo 

//     useEffect(() => {
//         const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
//             setRooms(snapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 data: doc.data(),
//                 //   creating our own object of id and data
//             }))
//             ) // we are returning unsubscribe 
//         )
//         return () => {
//             unsubscribe();
//             // it wil detach above real time listner after we done using it
//         }
//     }, [])

//     function click (){
//         burger= document.querySelector('.burger')
//         search= document.querySelector('.sidebar__serach')
//         chats= document.querySelector('.sidebar__chats')
        
//         burger.addEventListener('click', ()=>{
//             search.classList.toggle('hide');
//             chats.classList.toggle('hide');
//         })
//     }



//     return (
//         <div className="sidebar">
//             <div className="sidebar__header">
//                 <Avatar src={user?.photoURL} />
//                 <div className="sidebar__headerRight">

//                     <IconButton>
//                         <DonutLargeIcon />

//                     </IconButton>
//                     <IconButton>
//                         <ChatIcon />

//                     </IconButton>
//                     <IconButton>
//                         <MoreVertIcon />

//                     </IconButton>

//                     <div class="burger" onClick={click}>
//                         <div class="line"></div>
//                         <div class="line"></div>
//                         <div class="line"></div>
//                     </div>
//                 </div>
//             </div>
//             <div className="sidebar__search hide" >
//                 <div className="sidebar__searchContainer">
//                     <SearchOutlined />
//                     <input placeholder="search or start a new search type=" text />
//                 </div>
//             </div>
//             <div className="sidebar__chats hide" >
//                 <SidebarChat addNewChat />
//                 {rooms.map(room => (
//                     <SidebarChat key={room.id} id={room.id} name={room.data.name} />
//                 ))}

//             </div>
//         </div>
//     )
// }

// export default Sidebar
