import { React, useState } from "react";
import '../ChatGPT/chat.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
const API_KEY = "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";

// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = {
    "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
};

function Chat() {
    const [messages, setMessages] = useState([
        {
            message: "Hello, I'm ChatGPT! Ask me anything!",
            sentTime: "just now",
            sender: "ChatGPT"
        }
    ]);

    const [isTyping, setIsTyping] = useState(false);
    // const [isMainContainerVisible, setIsMainContainerVisible] = useState(true);

    const handleSend = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
        };

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
    };

    async function processMessageToChatGPT(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
                role = "assistant";
            } else {
                role = "user";
            }
            return { role: role, content: messageObject.message }
        });

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiRequestBody)
            }).then((data) => {
                return data.json();
            }).then((data) => {
                console.log(data);
                setMessages([...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "ChatGPT"
                }]);
                setIsTyping(false);
            });
    }


    return (

        <div style={{ position: "relative", height: "600px", width: "700px", margin: "0 auto", marginTop: "4%", marginBottom: "4%" }}>
            <div className="tt">Aller, commençons la discussion avec <span className="gg">ChatGPT !</span></div>

            <MainContainer>
                <ChatContainer>
                    <MessageList
                        scrollBehavior="smooth"
                        typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                    >
                        {messages.map((message, i) => {
                            console.log(message)
                            return <Message key={i} model={message} />
                        })}
                    </MessageList>
                    <MessageInput placeholder="Type message here" onSend={handleSend} />
                </ChatContainer>
            </MainContainer>
        </div>
    );
}

export default Chat;