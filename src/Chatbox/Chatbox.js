import './chatbox.css';
import MoneyBotIcon from './icons/moneybot-icon.svg'
import { useState } from 'react';

function ChatBubble(props) {
    return (
        <div className={`chatbox-bubble ${props.talker}`}>
            <div className="chatbox-bubble__icon">
                <div>
                    {
                        (props.talker === 'moneybot') ?
                            <img src={MoneyBotIcon} alt={`${props.talker} avatar`} /> :
                            <img src="https://www.looper.com/img/gallery/wesley-snipes-has-something-to-say-about-the-latest-blade-news/intro-1563907716.jpg" alt={`${props.talker} avatar`} />
                    }
                </div>
            </div>
            <div className="chatbox-bubble__msg">
                <p>{props.children}</p>
            </div>
        </div>
    )
}

function Chatbox() {
    const [dialog, setDialog] = useState([
        <ChatBubble key={1} talker="moneybot">Hello, Blade! I'm MoneyBot. Ask me your finance questions.</ChatBubble>,
        <ChatBubble key={2} talker="user">Hello, Moneybot! How can I XYZ?</ChatBubble>,
        <ChatBubble key={3} talker="moneybot">I can most certainly help with that....</ChatBubble>
    ]);
    const [userInput, setUserInput] = useState("");
    // const [result, setResult] = useState();
    

    async function onSubmit (e) {
        e.preventDefault();

        //Append User Input to dialog
        setDialog(
            [...dialog, <ChatBubble key={dialog.length+1} talker="user">{userInput}</ChatBubble>]
        )

        //Send User Input to OpenAI API 
        try {
            const response = await fetch("/api/generate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ userQuestion: userInput }),
            });
      
            const data = await response.json();
            if (response.status !== 200) {
              throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            //Append response to dialog
            setDialog([...dialog, <ChatBubble key={dialog.length+1} talker="moneybot">{data.result}</ChatBubble>]);
            setUserInput("");
            
          } catch(error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
          }

    }

    return (
        <div className="chatbox">
            <div className="chatbox-dialog">
                {dialog}
            </div>
            <form 
                className="chatbox-prompt"
                onSubmit={onSubmit}
            >
                <input
                    type="text"
                    placeholder="Ask Me Anything"
                    value={userInput}
                    onChange={(e)=> setUserInput(e.target.value)}
                />
                <input type="submit" value="" />
            </form>
        </div>
    );
}

export default Chatbox;
