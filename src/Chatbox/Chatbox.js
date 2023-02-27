import './chatbox.css';
import MoneyBotIcon from './icons/moneybot-icon.svg'
import { useState } from 'react';
import fetchData from '../pages/api/generate';

function ChatBubble(props) {
    const formattedResponse = props.children.replace(/\n/g, '<br>');
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
                <p dangerouslySetInnerHTML={{ __html: formattedResponse }} />
            </div>
        </div>
    )
}

function Chatbox() {
    const [dialogList, setDialogList] = useState([
        {
            'talker': "moneybot",
            'text': "Hello, Blade! I'm MoneyBot. Ask me your finance questions."
        },
        {
            'talker': 'user',
            'text': 'Hello, Moneybot! How can I XYZ?'
        },
        {
            "talker": "moneybot",
            "text": "I can most certainly help with that...."
        },
        // {
        //     'talker':'user',
        //     'text':'How can i improve my credit score'
        // },
        // {
        //     "talker": "moneybot",
        //     "text": "\n\n1. Pay your bills on time. \n2. Reduce the amount of debt you owe. \n3. Dispute any errors on your credit report. \n4. Limit new credit inquiries. \n5. Use a secured credit card or become an authorized user on another person’s credit card. \n6. Make payments twice a month instead of once a month. \n7. Become an authorized user on an older credit card with a long and positive payment history. \n8. Take out a small loan and pay it off on time. \n9. Pay down credit card balances to less than 30% of the credit limit. \n10. Monitor your credit report regularly to ensure accuracy."
        // }
    ]);
    const [userInput, setUserInput] = useState("");

    async function onSubmit(e) {
        e.preventDefault();

        setDialogList(
            [...dialogList, { "talker": "user", "text": userInput }]
        )
        const response = await fetchData(userInput);
        const data = await response;
        setUserInput("");
        setDialogList(prevState => [...prevState, { "talker": "moneybot", "text": data.choices[0].text }]);
    }

    console.log(dialogList)
    return (
        <div className="chatbox">
            <div className="chatbox-dialog">
                {
                    dialogList.map((d, index) => {
                        return <ChatBubble key={index} talker={d.talker}>{d.text}</ChatBubble>
                    })
                }
            </div>
            <form
                className="chatbox-prompt"
                onSubmit={onSubmit}
            >
                <input
                    type="text"
                    placeholder="Ask Me Anything"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <input type="submit" value="" />
            </form>
        </div>
    );
}

export default Chatbox;
