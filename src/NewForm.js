import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewForm(){
    const defaultFormData = {
        FirstName :'',
        Age :'',
        JobTitle :0,
        NewsLetter :false,
        Gender :null
    };
    const [FormData, SetFormData] = useState(defaultFormData);

    let [Errors, SetErrors] = useState({});
    const navigate = useNavigate();

    function handleChange(event){
        if(event.target.name == "NewsLetter"){
            const {name, checked} = event.target;
            SetFormData({...FormData,[name] : checked})
        }
        else{
            const {name, value} = event.target;
            SetFormData({...FormData,[name] : value})
        }
            
    }
    function HandleSubmit(event){
        event.preventDefault();

        var ErrorList = ValidateForm();
        console.log(ErrorList);
        if(Object.keys(ErrorList).length === 0){
            // navigate('/');
            SetFormData(defaultFormData);
            alert("Data Saved Successfully");
        }
        else   {
            console.log(ErrorList);
            SetErrors(ErrorList);
        }
        console.log(Errors);
    }

    const HandleKeyPress = (event) => {
        // Check if the pressed key is a number
        if (/\d/.test(event.key)) {
          event.preventDefault();
        }
    };

    const HandleNonNumeric = (event) => {
        // Check if the pressed key is a number
        if (!/[0-9]/.test(event.key)&& // Allows only numbers
        event.key !== 'Backspace' && // Allows backspace
        event.key !== 'Delete' &&    // Allows delete
        event.key !== 'ArrowLeft' && // Allows left arrow key
        event.key !== 'ArrowRight') {
            event.preventDefault();
          }
    };
    function ValidateForm(){
        const errorList={};
        var fname = FormData.FirstName;
        var age = FormData.Age;
        if (fname.length === 0) {
            errorList.FirstName = 'First Name is required.';
        }
        else if (fname.length < 2) {
            errorList.FirstName = 'First Name should have atleast 2 characters';
        }
        if (age.length === 0) {
            errorList.Age = 'Age is required.';
        }
        console.log(FormData.JobTitle);
        if (FormData.JobTitle =="0") {
            errorList.JobTitle = 'Job Title is required.';
        }
        if (FormData.Gender == null) {
            errorList.Gender = 'Gender is required.';
        }
        return errorList;
    }
    return <>
        <form>
            <div>
                <label>
                    First Name *: 
                </label>
                <input type='text' name='FirstName' onKeyDown={HandleKeyPress} onChange={handleChange} value={FormData.FirstName} maxLength="30"></input>
                {
                    Errors.FirstName && (<span>{Errors.FirstName}</span>)  
                }
            </div>
            <div>
                <label>
                    Age *: 
                </label>
                <input type='text' name='Age' onKeyDown={HandleNonNumeric} onChange={handleChange} value={FormData.Age} maxLength="3"></input>
                {
                    Errors.Age && (<span>{Errors.Age}</span>)  
                }
            </div>
            <div>
                <label>
                    Job Title *: 
                </label>
                <select name='JobTitle' value={FormData.JobTitle} onChange={handleChange} >
                    <option value={0}>Select Me</option>
                    <option value={1}>Programmer</option>
                    <option value={2}>Manager</option>
                </select>
                {
                    Errors.JobTitle != "0" && (<span>{Errors.JobTitle}</span>)  
                }
            </div>
            <div>
                <label>
                    Subscribe News letter *: 
                </label>
                <input type='checkbox' name='NewsLetter' checked={FormData.NewsLetter} value={FormData.NewsLetter} onChange={handleChange}></input>
            </div>
            <div>
                <label>
                    Gender *: 
                </label>
                <input type='radio' name='Gender' checked={FormData.Gender}  value={1} onChange={handleChange}></input>Male 
                <input type='radio' name='Gender' checked={FormData.Gender}  value={0} onChange={handleChange}></input>Female 
                {
                    Errors.Gender != null && (<p>{Errors.Gender}</p>)  
                }
            </div>
            <div>
                <input value="Submit" type='button' onClick={HandleSubmit}></input>
                <a href='/EmployeeList'>Back To List</a>
            </div>
        </form>
    
    </>;
}

export default NewForm;