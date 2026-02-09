export default function userCard(user){
    return(
        <div>
            <h3>user name:{user.name}</h3>
            <p>Role:{user.role}</p>
            <p>Country:{user.country}</p>
        </div>
    );
}