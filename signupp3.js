function SignUp(){
    const [year, setYear] = React.useState('');

    function handle(){
        console.log('year:', year);
    }

    return (
        <>
        <select value={year} onChange={e => setYear(e.target.value)}>
        <option>Freshman</option>
        <option>Sophmore</option>
        <option>Junior</option>
        <option>Senior</option>
        </select>
        <div>Name</div>
        <input type="text" id="name">
        <div>Email</div>
        <input type="text" id="email">
        <div>Password</div>
        <input type="text" id="password">
        <div>
            <input type="checkbox" id="checkbox">Remember Me
        </div>
        <button onClick={handle}>Submit</button>
        </>
    )
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)