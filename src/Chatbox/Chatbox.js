import './chatbox.css';
import MoneyBotIcon from './icons/moneybot-icon.svg'

function ChatBubble(props) {
    return (
        <div className={`chatbox-bubble ${props.talker}`}>
            <div className="chatbox-bubble__icon">
                <div>
                    {
                        (props.talker === 'moneybot') ?
                            <img src={MoneyBotIcon} alt={`${props.talker} avatar`} /> :
                            <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-03/220317-Cynthia-Talla-ew-321p-4bc199.jpg" alt={`${props.talker} avatar`} />
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
    return (
        <div className="chatbox">
            <div className="chatbox-dialog">
                <ChatBubble talker="moneybot">Hello, Blade! I'm MoneyBot. Ask me your finance questions.</ChatBubble>
                <ChatBubble talker="user">Hello, Moneybot! How can I XYZ?</ChatBubble>
                <ChatBubble talker="moneybot">I can most certainly help with that....</ChatBubble>
            </div>
            <div className="chatbox-prompt">
                <input
                    type="text"
                    placeholder='Ask Me Anything'
                />
                <button></button>
            </div>
        </div>
    );
}

export default Chatbox;
