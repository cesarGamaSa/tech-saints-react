import React, { useState } from "react";

import GoalEntry from "./GoalEntry";
import AddGoal from "./AddGoal";

export default function GoalEntries() {
    const [goals, setGoals] = useState([{
        name: 'Improve React skills',
        description: 'Practice and complete at least a React course in order to gain more knowledge on the subject.',
        startDate: new Date(),
        endDate: new Date(2023, 11, 31),
        isCompleted: false
    }]);

    function addNewGoal(g) {
        setGoals([...goals, g]);
    }

    function handleClick(e, index) {
        if(e.detail === 2) {
            const newState = goals.map((g, i) => {
                if (i === index) {
                    return {...g, isCompleted: true};
                }
                return g;
            });
            setGoals(newState);
        }
    }

    return (
        <div>
            <ul>
                {goals.map((goal, index) =>
                    <li key={index} onClick={(e) => handleClick(e, index)}>
                        <GoalEntry goal={goal} />
                    </li>    
                )}
            </ul>
            <AddGoal addNewGoal={addNewGoal} />
        </div>
    );
}
