

function Button() {
    const handleClick = () => {
        console.log('OUCH! I am clicked');
    }
        
    // const handleClick2 = (name) => console.log(` ${name} stop clicking me`);
    // let count = 0;

    // const handleClick3 = (name) => {
    //     if (count > 3)
    //     {
    //         count++;
    //         console.log(` ${name} stop clicking me ${count} times/s`);
    //     }
    //     else
    //     {
    //         count++;
    //         console.log(` ${name} stop clicking me`);
    //     }
    // }

    // const handleClick4 = (e) => {
    //     console.log(e);
    // }
    
    const handleClick5 = (e) => e.target.textContent = 'OUCH!';
    
    // return(
    //     <button onClick={(e) => handleClick5(e)}>Click me</button>
    // )

    return(
        <button onDoubleClick={(e) => handleClick5(e)}>Click me</button>
    )
}
export default Button