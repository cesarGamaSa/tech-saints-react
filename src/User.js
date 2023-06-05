import React from "react";

export default function User(props) {
    return (
        <div>
            <h1>{ props.user.name }</h1>
            <p>Capability: { props.user.capability }</p>
            <p>Team: { props.user.team }</p>
        </div>
    );
}
