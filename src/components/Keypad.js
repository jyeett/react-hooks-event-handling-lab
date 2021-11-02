// Code Keypad Component Here
function Keypad() {
    return (
        <>
            <input type='password' onChange={enterPassword}></input>
        </>
    )
}

function enterPassword() {
    console.log('Entering password...')
}

export default Keypad
