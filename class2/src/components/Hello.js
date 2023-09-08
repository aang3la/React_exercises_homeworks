// in functional components we don't have import
// react takes care of that out of the box
export const Hello = () => {
    return (
        // inside jsx the html elements must always be in a parent element
        // such as div or fragment (<>)
        <>
            <h1>Hello</h1> 
            <h2>Angela</h2>
        </>
    )
}