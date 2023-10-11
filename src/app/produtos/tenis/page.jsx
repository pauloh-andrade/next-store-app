import Image from "next/image"
import Link from "next/link"

const Tenis = () => {
    return (
        <div>
            <h1>Tênis</h1>
            <Image src="/tesla-coil.webp" width={300} height={300} alt="Tenis tesla coil"/>
            <div>
                <strong>Descrição:</strong>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse hic vero voluptatibus. Et repellendus quasi tenetur, enim fugiat explicabo dolores voluptas! Autem sequi deserunt eveniet maxime harum impedit expedita nostrum?
                </p>
                <Link href="/">Voltar...</Link>
            </div>
        </div>
    )
}

export default Tenis