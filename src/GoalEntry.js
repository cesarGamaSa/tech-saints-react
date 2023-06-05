import React from "react";

import './GoalEntry.css';

export default function GoalEntry(props) {
    let goal = props.goal;

    return (
        <div className="GoalEntry">
            <p>{goal.name}</p>
            <p>Description: {goal.description}</p>
            <p>Start Date: {goal.startDate}</p>
            <p>End Date: {goal.endDate}</p>
        </div>
    );
}
