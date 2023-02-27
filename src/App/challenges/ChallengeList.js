import React from "react";
import { useNavigate } from "react-router-dom"

export const ChallengeList = () => {

    const navigate = useNavigate()

    const navigateChallenge = () => {
        return navigate("/challenge/debt_free")
    }

    return <>
        <div>
            <button>
                {navigateChallenge()}
            </button>
            {/* <button onChange={"/challenge/debt_free"}>Debt Free</button>
            <button onChange={"/challenge/investments"}>Investments</button>
            <button onChange={"/challenge/savings"}>Savings</button> */}
        </div>
    </>
}