import React, {useRef} from "react";

export default function AddGoal(props) {
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const endDateRef = useRef(null);

    function addNewGoal(g) {
        props.addNewGoal(g);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        addNewGoal({
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            startDate: new Date(),
            endDate: endDateRef.current.value,
            isCompleted: false
        });

        nameRef.current.value = '';
        descriptionRef.current.value = '';
        endDateRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                ref={nameRef}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                id="description"
                ref={descriptionRef}
                />
            </div>
            <div>
                <label htmlFor="endDate">End Date:</label>
                <input
                type="date"
                id="endDate"
                ref={endDateRef}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
