import Image from "next/image"

const Home = () => {
  return (
    <>
      <h1> Home </h1>
      <Image src="/store.svg" width={100} height={100} alt="Store icon"/>
    </>
  )
}

export default Home