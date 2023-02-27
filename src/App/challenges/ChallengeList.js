import React from "react";
import { Link } from "react-router-dom"
// import { CreditGrowth } from "./CreditGrowth";
// import { DebtFree } from "./DebtFree"
// import { Investments } from "./Investments";
// import { Savings } from "./Savings"

export const ChallengeList = () => {
    return <>
        <div>
            <Link to="./CreditGrowth">Credit Growth</Link>
            <Link to="DebtFree">Debt Free</Link>
            <Link to="Investments">Investments</Link>
            <Link to="Savings">Savings</Link>
        </div>
    </>
}