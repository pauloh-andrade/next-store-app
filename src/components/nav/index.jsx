import Link from "next/link"

export const Nav = () => {
    return(    
        <header className="bg-slate-800 text-white">
        <h1 className="text-center text-3xl font-extrabold">PRODUTOS</h1>
        <hr className="bg-red-600 border border-red-700"/> 
        <nav className="menu">
          <ul>
            <li>
              <Link href="/produtos/camisas">Camisas</Link>
            </li>
            <li>
              <Link href="/produtos/blusas">Blusas</Link>
            </li>
            <li>
              <Link href="/produtos/tenis">Tênis</Link>
            </li>
            <li>
              <Link href="/produtos/fazenda/loja/laticinios">Queijo</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}
