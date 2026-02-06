import './Footer.css'
export default function Footer(props){
    return(
        <footer>
            <p className='foot'>{props.year} {props.company}</p>

        </footer>
    )
}