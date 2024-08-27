'use client'

interface PrimeiroComponentProps {
    mensagem: string;    
    mensagemButton: string
}

export const  PrimeiroComponent:React.FC<PrimeiroComponentProps> = (props: PrimeiroComponentProps) => {

    function handleClick() {
        alert(props.mensagemButton)
    }

    return (
        <div>
            {props.mensagem}

            <button onClick={handleClick}> Clique aqui</button>
        </div>
    )
}

export const ArrowFunction = () => {
    return (
        <h2>Arrow Function </h2>
    )

}