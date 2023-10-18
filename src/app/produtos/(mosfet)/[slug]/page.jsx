import Image from "next/image";
import Link from "next/link";
import React from "react"

const ProdutoSlug = ({params}) => {
    return (
        <h1>Produto: {params.slug}</h1>
    )
}

export default ProdutoSlug;