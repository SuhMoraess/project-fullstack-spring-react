'use client'
import { Template, ImageCard } from '@/components'
import { useState } from 'react'

export default function GaleriaPage() {

    const image1 = 'https://img.freepik.com/fotos-gratis/vista-do-oceano-ondulado-ou-da-agua-do-mar_23-2150870014.jpg'
    const image2 = 'https://thumbs.dreamstime.com/b/skyline-em-ont%C3%A1rio-canad%C3%A1-de-toronto-51975280.jpg'
    const nome1 = "Mar"
    const nome2 = "Canada"

    const [codigoImage, setCodigoImage] = useState<number>(2);
    const [urlImage, setUrlImage] = useState<string>(image2);
    const [nome, setNome] = useState<string>(nome2)

    function mudarImagem() {
        if (codigoImage == 1) {
            setCodigoImage(2);
            setUrlImage(image2)
            setNome(nome2)
        } else {
            setCodigoImage(1)
            setUrlImage(image1)
            setNome(nome1)
        }
    }

    return (
        <Template>
            <button className='bg-gray-500' onClick={mudarImagem}>Clique para mudar</button>
            <section className='grid grid-cols-4 gap-8'>
                <ImageCard nome={nome} tamanho="22MB" dataUpload=" 28/08/2024" src={urlImage} />
                <ImageCard nome={nome} tamanho="22MB" dataUpload=" 28/08/2024" src={urlImage} />
                <ImageCard nome={nome} tamanho="22MB" dataUpload=" 28/08/2024" src={urlImage} />
                <ImageCard nome={nome} tamanho="22MB" dataUpload=" 28/08/2024" src={urlImage} />
                <ImageCard nome={nome} tamanho="22MB" dataUpload=" 28/08/2024" src={urlImage} />
                <ImageCard nome={nome} tamanho="22MB" dataUpload=" 28/08/2024" src={urlImage} />
                <ImageCard nome={nome} tamanho="22MB" dataUpload=" 28/08/2024" src={urlImage} />
                <ImageCard nome={nome} tamanho="22MB" dataUpload=" 28/08/2024" src={urlImage} />
                <ImageCard nome={nome} tamanho="22MB" dataUpload=" 28/08/2024" src={urlImage} />
                <ImageCard nome={nome} tamanho="22MB" dataUpload=" 28/08/2024" src={urlImage} />
            </section>
        </Template>
    )
}