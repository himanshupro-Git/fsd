import Link from "next/link";
export default function Login(){

    return(
        <div>
            <h1>Login Page</h1>
            <form>
                <label>
                    Email:
                    <input type="email" name="email" required></input>
                </label>
                <label>
                    Password:
                    <input type="Password" name="Password" required></input>
                </label>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? 
                <Link href="/register">register</Link>
            </p>
        </div>
    );
}