import React from "react";
import { Searchbar } from "./Searchbar";
import { ChallengeList } from "./ChallengeList";


export const Checklist = () => {

    const numOfChallenges = () => {
        return 4
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
        <div>
            <ChallengeList />
        </div>
    </>
}