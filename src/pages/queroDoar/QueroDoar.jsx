import s from './queroDoar.module.scss'
import IconeLivro from '../../assets/vector.png'
import { useState } from 'react'
import axios from 'axios'


export default function QueroDoar() {

  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [autor, setAutor] = useState("")
  const [image_url, setImage_url] = useState("")

  const capturaTitulo = (e) => {
    setTitulo(e.target.value)
  }

  const capturaCategoria = (e) => {
    setCategoria(e.target.value)
  }

  const capturaAutor = (e) => {
    setAutor(e.target.value)
  }

  const capturaImage_url = (e) => {
    setImage_url(e.target.value)
  }

  const envioDados = async () => {

    const dadosParaEnviar = {
      titulo,
      categoria,
      autor,
      image_url
    }
    await axios.post("https://api-livros-i656.onrender.com/doar", dadosParaEnviar)
  }


  return (
    <section className={s.queroDoarSection}>
      <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <section className={s.cabecalhoForm}>
          <img src={IconeLivro} alt="Icone de um livro aberto" />
          <h2>Informações do Livro</h2>
        </section>
        <input type="text" onChange={capturaTitulo} placeholder='Titulo' required />
        <input type="text" onChange={capturaCategoria} placeholder='Categoria' required />
        <input type="text" onChange={capturaAutor} placeholder='Autor' required />
        <input type="url" onChange={capturaImage_url} placeholder='Link da imagem' required />
        <input type="submit" value="Doar" className={s.buttonDoar} onClick={envioDados} />
      </form>
    </section>
  )
}