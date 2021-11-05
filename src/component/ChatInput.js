import React,{useState} from 'react';
import styled from "styled-components";
import firebase from "firebase";
import {db} from "../firebase";

const ChatInputContainer=styled.div`
border-radius:20px;

>form{
    position:relative;
    display:flex;
    justifi-content:center;

}
> form>input{
    position:fixed;
    bottom:30px;
    width:60%;
    border:1px solid gray;
    border-radius:3px;
    padding:24px;
    outline:none;
    

}
>form>button{
    display:none !important;
}
`

function ChatInput({channelName,channelId}) {
    const [input,setInput]=useState("");
    const sendMessage=(e)=>{
        e.preventDefault();

        if(!channelId){
            return false;
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        user:'Angerfist',
        userImage:"https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-1/c0.7.200.200a/p200x200/157405249_1371682423166831_5605038568088782550_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=BK71i9YuURkAX96I3x9&_nc_ht=scontent-mba1-1.xx&tp=27&oh=d23d5359c36bec7d55e584c6f0e91a63&oe=609C0F92",

        });
        setInput("");

    };
    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message #{c                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 annelName}`}/>
                <button  type="submit" onClick={sendMessage}>
                    SEND
                </button>

            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;
