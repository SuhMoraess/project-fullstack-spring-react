import { PrimeiroComponent, ArrowFunction } from '../components/PrimeiroComponente'

export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <PrimeiroComponent
        mensagem='Testando o props do componente, enviando mensagem.' 
        mensagemButton='Mensagem Button. Clique aqui.'
        />
           <PrimeiroComponent
        mensagem='Mensagem do Segundo Componente.' 
        mensagemButton='Clique aqui.'
        />
      <ArrowFunction />
    </>
  )
}
