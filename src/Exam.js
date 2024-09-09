import React, {useState} from 'react';
import './Exam.css';
const questions = [
    {
        question:"What is the capital of France?",
        options:["Paris","London","Berlin","Madrid"],
        correctAnswer:"Paris"
    },
    {
        question:"What is the capital of Germany?",
        options:["Paris","London","Berlin","Madrid"],
        correctAnswer:"Berlin"
    },
    {
        question:"What is the capital of Spain?",
        options:["Paris","London","Berlin","Madrid"],
        correctAnswer:"Madrid"
    },
    {
        question:"What is the capital of Italy?",
        options:["Rome","Paris","Berlin","Madrid"],
        correctAnswer:"Rome"
    },
    {
        question:"What is the capital of England?",
        options:["Paris","London","Berlin","Madrid"],
        correctAnswer:"London"
    }
];
const Exam = ()=> {
    const [currentQuestion, setCurrentQuestion]=useState(0);
    const [selectedOptions,setSelectedOpetions]=useState(Array(questions.length));
    const [score,setScore]=useState(null);

    const handleNext = () =>{
        if(currentQuestion<questions.length-1){
            setCurrentQuestion(currentQuestion+1);
        }
    };
    const handlePrevious = () => {
        if(currentQuestion>0){
            setCurrentQuestion(currentQuestion-1);
        }
    };
    const handleOptionSelect = (option) => {
        const newSelectedOptions=[...selectedOptions];
        newSelectedOptions[currentQuestion]=option;
        setSelectedOpetions(newSelectedOptions);
    };
    const calculateScore = () => {
        let newScore=0;
        selectedOptions.forEach((option,index)=>{
            if (option === questions[index].correctAnswer){
                newScore+=1;
            }
        });
        setScore(newScore);
    };
    return (
        <div className="TestContainer">
            <h1>MCQ Test</h1>
            {score === null ? ( 
                <div>
                    <div id="que-options-div">
                        <h2 id="que">{questions[currentQuestion].question}</h2>
                        <ul>
                            {questions[currentQuestion].options.map((option,index)=>(
                                <li key={index}>
                                    <label>
                                        <input type="radio" name="option" value={option} checked={selectedOptions[currentQuestion]===option}
                                            onChange={()=> handleOptionSelect(option)}
                                        />{option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div id="buttonGroup" >
                            <button onClick={handlePrevious} disabled={currentQuestion === 0}> 
                                Previous
                            </button>
                            <button onClick={handleNext} disabled={currentQuestion === questions.length-1}> 
                                Next
                            </button>
                            {currentQuestion === questions.length-1 && (
                                <button onClick={calculateScore}>
                                    Submit
                                </button>
                            )}
                    </div>
                </div>
                
            ):(
                <div>
                    <h2>Your Score: {score}/{questions.length}</h2>
                </div>
            ) }
        </div>
    );

};

export default Exam;