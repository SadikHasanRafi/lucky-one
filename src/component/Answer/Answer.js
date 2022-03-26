import React from 'react';


//Answer of given questions 


const Answer = () => {
    return (
        <div>
            <h3>How does react work</h3>
            <p><b>Answer : </b>React is a UI library made by facebook to build UI of a website.It is a component based framework and each component returns an element which is one kind of HTML element. Here the return element looks like HTML element but these are not actually HTML elements. These are know as JSX or javascript XML. In react all element are known as component which return some HTML elements. These component written as XML formate. In these XML attributes are used as property of JSX. The component recive that attribute as props.</p>
            <br />
            <h3>What is difference between states and props ?</h3>
            <p><b>Answer : </b> In react XML attributes are recivied as props. These are read-only means it can read value only. Outside that XML attribute these props are not allowed to modify its value. On the other hand state are used to get change of any element or value in code. It capture changes of any element or value automatically how every its value can be modified by this.setState keyword. If anything changes then this state capture that change and re-render that specific portion.</p>
        </div>
    );
};

export default Answer;