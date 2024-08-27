'use client'

export function PrimeiroComponent(){
    function handleClick() {
        alert("Cliquei no botão!")
    }
    return (
        <div>
            Meu Primeiro componente!

            <button onClick={handleClick}> Clique aqui</button>
        </div>
    )
}

export const ArrowFunction = () => {
    return (
        <h2>Arrow Function </h2>
    )

}