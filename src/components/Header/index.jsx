import logo from './logo.png'
import search from './search.png'

export default function Header() {
    return(
        <header>
            <img src = "logo" alt = "Logo"/>
            <div>
                <input type = "text" placeholder = "o que você procura ?"/>
                <img src = "search" alt = "Pesquisar"/>
            </div>
        </header>
    )
}