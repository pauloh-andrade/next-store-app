import Link from "next/link"

export const Nav = () => {
    return(
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/produtos/tenis">Tenis</Link></li>
            <li><Link href="/produtos/blusas">Blusas</Link></li>
            <li><Link href="/produtos/camisas">Camisas</Link></li>
        </ul> 
    )
}
