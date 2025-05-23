import Students from '../Students.jsx'

function App(){
    return(
        <>
            <Students name="Deepak" age={20} isStudent={true}/>
            <Students name="Raghul" age={20} isStudent={true}/>
            <Students name="Sathya" age={19} isStudent={true}/>
            <Students name="Cibi" age={19} isStudent={true}/>
            <Students/>
        </>
    )
}

export default App