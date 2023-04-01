import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div>
            <div>
                <h3>What is the difference between props and state?</h3>
                <p><b>Answer:</b>Props are used to pass data from parent to child component.props can pass function, Array,object etc as data. props are read only method which means it can not be modified. On the other hand states are for components internal use only. it can be modified by using setState() method.
                </p>
            </div>
            <div>
                <h3>How does useEffect work?</h3>
                <p><b>Answer:</b> The useEffect works on three steps mountings phase. In this phase when a component ks added to the DOM for the first time useEffect takes two arguments while mounting, a callback function and an optional array of dependencies. Whenever a component's state or props change the component rerenders and the useEffect hook runs again. when a component is about to be removed from the DOM the useEffect hook runs for the last time to perform any cleanups. </p>
            </div>
            <div>
                <h3>Except data loading what else can useEffect do?</h3>
                <p><b>Answer:</b>UseEffect can update the document title, setup eventListener, update the browser history and a lot more side effects</p>
                
            </div>
            <div>
                <h3>How does React work? </h3>
                <p><b>Answer:</b>Reacts uses components that works like function to show data in UI . Components accepts props as parameter. it is possible to use unlimited components</p>
            </div>
        </div>
    );
};

export default Answer;