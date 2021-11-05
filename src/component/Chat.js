import ChatInput from './ChatInput';
import React from 'react';
import styled from "styled-components";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import {useSelector} from "react-redux";
import {selectRoomId} from "../feature/appSlice";
import { db } from '../firebase';
import {useCollection,useDocument} from "react-firebase-hooks/firestore";

const ChatContainer=styled.div`
flex:0.7;
flex-grow:1;
overflow-y:scroll;
margin-top:60px;
`
const Header=styled.div`
display:flex;
justify-content:space-between;
padding:20px;
border-bottom:1px solid lightgray;

`
const HeaderLeft=styled.div`
display:flex;
align-items:center;

>h4 {
    display:flex;
    text-transform:lowercase;
    margin-right:10px;
}
>h4 .MuiSvgIcon-root{
    margin-left:10px;
    font-size:10px;

}

`
const HeaderRight=styled.div`
>p{
    display:flex;
    align-items:center;
    font-size:14px;
}
>p> .MuiSvgIcon-root{
    margin-right:5px !important;
    font-size:16px;
}
`

const ChatMessage=styled.div``
function Chat() {
    const roomId=useSelector(selectRoomId);
    const [roomDetails]=useDocument(roomId && db.collection("rooms").doc(roomId));
    const [roomMessages]=useCollection(roomId && db.collection('rooms')
    .doc(roomId).collection('messages').orderBy('timestamp','asc'));
 console.log(roomDetails.data());
    return (
    
        <ChatContainer>
            <>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#Room-name</strong>
                    </h4>
                   <StarBorderOutlinedIcon/>
                </HeaderLeft>

                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>

                </HeaderRight>
            </Header>
            <ChatMessage>

            </ChatMessage>
            <ChatInput channelName={roomDetails?.data().name} channelId={roomId} />       </>
        </ChatContainer>
    )
}

export default Chat
