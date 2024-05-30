import style from './Introduction.css'



function Hobbies (){
    return (
        <>
            <p> My Hobbies are eating and sleeping</p>
        </>
    )
}



export default function Introduction({name="Menar", age=18}){
    return (
        <>
            <p className="name">Hello my name is {name}</p>
            <span>I am {age} years old</span>?
        </>
    )
}

export {Hobbies}