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

    return (
        <div>
            <ul>
                {goals.map((goal, index) =>
                    <li key={index}><GoalEntry goal={goal} /></li>    
                )}
            </ul>
            <AddGoal addNewGoal={addNewGoal} />
        </div>
    );
}
