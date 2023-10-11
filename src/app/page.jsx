import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <>
      <h1> Home </h1>
      <Image src="/store.svg" width={100} height={100} alt="Store icon"/>
      <ul>
        <li><Link href="/produtos/tenis">Tenis</Link></li>
        <li><Link href="/produtos/blusas">Blusas</Link></li>
        <li><Link href="/produtos/camisas">Camisas</Link></li>
      </ul>
    </>
  )
}

export default Home