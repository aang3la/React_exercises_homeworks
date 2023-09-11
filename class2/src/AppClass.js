//! Every component must start with capital letter because React sees small letters as HTML Tags
import React from "react";
import { PlaceClass } from "./components/PlaceClass";
import { MyClass } from "./components/MyClass";


// we must export the component to use it anywhere
export class AppClass extends React.Component {
    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <PlaceClass />
                <MyClass />
            </div>
        )
    }
};