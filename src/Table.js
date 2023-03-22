const Table = () => {
    const users = [
                    {name:'გიგა', lastname:'შამათავა', email:'shamatava.giga@atsu.edu.ge'},
                    {name:'გიორგი', lastname:'კოტორეიშვილი', email:'kotoreishvili.giorgi@atsu.edu.ge'},
                    {name:'თამარი', lastname:'ტყეშელაშვილი', email:'tkeshelasvhili.tamari@atsu.edu.ge'}
                ];
    return ( 
            <table className="users">
                <tr><th>სახელი</th><th>გვარი</th><th>email</th></tr>
                {users.map((user)=>{
                    return <tr><td>{user.name}</td> <td>{user.lastname}</td> <td>{user.email}</td></tr>
                })}
            </table>
     );
}
 
export default Table;