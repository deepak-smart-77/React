function Button() {
//   const handleClick = (name) => console.log(`Hello ${name} you clicked me`);
    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count+=1;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`stop clicking me`);
    //     }
    // }
const handleClick = (e) => e.target.textContent = "pheww"

  return <button onDoubleClick={(e) => handleClick(e)}>click me</button>;
}
export default Button;
