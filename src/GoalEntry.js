import React from "react";

import './GoalEntry.css';

export default function GoalEntry(props) {
    let goal = props.goal;

    function deleteGoal() {
        props.deleteGoal();
    }

    return (
        <div className="GoalEntry">
            <p className="first-line">
                <span>{goal.name}</span>
                <span onClick={deleteGoal}>X</span>
            </p>
            <p>Description: {goal.description}</p>
            <p>Start Date: {goal.startDate.toLocaleString()}</p>
            <p>End Date: {goal.endDate.toLocaleString()}</p>
            <p>Completed: {String(goal.isCompleted)}</p>
        </div>
    );
}
