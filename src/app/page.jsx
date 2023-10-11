import Link from "next/link"

const Home = () => {
  return (
    <>
      <h1> Home </h1>
      <ul>
        <li><Link href="/produtos/tenis">Tenis</Link></li>
        <li><Link href="/produtos/blusas">Blusas</Link></li>
        <li><Link href="/produtos/camisas">Camisas</Link></li>
      </ul>
    </>
  )
}

export default Home