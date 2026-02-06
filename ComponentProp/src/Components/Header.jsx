import './Header.css'
export default function Header(props){
    return(

        <header>
            <h1 className='title'>{props.title}</h1>
        </header>
    )
}