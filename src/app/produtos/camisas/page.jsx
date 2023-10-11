import Image from "next/image";
import Link from "next/link";

const Camisas = () => {
    return (
        <div>
        <h1>Camisas</h1>
        <Image src="/camisa-vans.jpg" width={300} height={300} alt="Camisa Vans"/>
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

export default Camisas;