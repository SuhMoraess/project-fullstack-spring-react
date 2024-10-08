import React from 'react'

interface TemplateProps {
  children: React.ReactNode
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
  return (
    <div>
      <Header />
      <div className='container mx-auto mt-8 px-4'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}


const Header: React.FC = () => {
  return (
    <header className="bg-cyan-600 text-white py-3">
      <div className="container mx-auto justify-between flex items center px-4">
        <h1 className="text-3xl font-bold">ImageLite</h1>
      </div>
    </header>
  )
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-600 text-white py-4 mt-8">
      <div className=" container mx-auto text-center">
        Desenvolvido por Suhailah Moraes
      </div>
    </footer>
  )
}