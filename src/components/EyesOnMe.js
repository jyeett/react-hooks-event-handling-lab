// Code EyesOnMe Component Here
function EyesOnMe() {
    return (
        <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    )
}

function focus() {
    console.log('Good!')
}

function blur () {
    console.log('Hey! Eyes on me!')
}

export default EyesOnMe