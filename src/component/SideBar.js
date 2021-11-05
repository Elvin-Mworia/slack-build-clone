import  SidebarOptions from './SidebarOptions';
import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../firebase";


const SidebarContainer=styled.div`
background-color:var(--slack-color);
display:flex;
flex-direction:column;
flex:0.3;
color:white;
border-top:1px solid #49274b;
max-width:260px;
height:100vh;
overflow:scroll;
>hr{
    margin-top:10px;
    margin-bottom:10px;
    border:1px solid #49274b;
}
`
const SidebarHeader=styled.div`
display:flex;
border-bottom:1px solid #49264b;
padding:13px;
margin-top:3rem;

> .MuiSvgIcon-root{
    padding:8px;
    color:#49264b;
    font-size:18px;
    background-color:white;
    border-radius:999px;
}
`
const SidebarInfo=styled.div` 
flex:1;
h2{
    font-size:13px;
    font-weigth:900;
    margin-bottom:5px;
}
>h3{
    display:flex;
    font-size:13px;
    font-weight:400;
    align-items:center;

}
>h1 .MuiSvgIcon{
    font-size:14px;
    margin-top:1px;
    margin-right:2px;
    color:green;

}
`

function SideBar() {
    const [channels,loading,error]=useCollection(db.collection('room'));
   
    return (
     
           <SidebarContainer >
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Angerfist</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        Elvin Mworia
                    </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>

            <SidebarOptions Icon={InsertCommentIcon} title='Threads'/>
            <SidebarOptions Icon={InboxIcon} title='Mentions & Reactions'/>
            <SidebarOptions Icon={DraftsIcon} title='Saved times'/>
            <SidebarOptions Icon={BookmarkBorderIcon} title='Channel Browser'/>
            <SidebarOptions Icon={PeopleAltIcon} title='People & user groups'/>
            <SidebarOptions Icon={AppsIcon} title='Apps'/>
            <SidebarOptions Icon={FileCopyIcon} title='File browser'/>
            <SidebarOptions Icon={ExpandLessIcon} title='Show less'/>
        <hr/>
            <SidebarOptions Icon={ExpandMoreIcon} title='Channel'/>
            <hr/>
            <SidebarOptions Icon={AddIcon} addChannelOption title='Add Channel'   />
            <hr/>

            {
           channels?.docs.map((doc)=>(
               <SidebarOptions key={doc.id} id={doc.id}  title={doc.data().name}/>
           ))
       }
            </SidebarContainer>
      
        
    )
}

export default SideBar
