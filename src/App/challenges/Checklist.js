import React from "react";
import { Searchbar } from "./Searchbar";

export const Checklist = () => {

    const numOfChallenges = () => {
        return 8
    }

    return <>
        <div>
            <h4>ALL TASKS</h4>
        </div>
        <div>
            Challenges ({numOfChallenges()})
        </div>
        <div>
            <Searchbar />
        </div>
    </>
}