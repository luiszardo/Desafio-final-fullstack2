import Livro from '../../assets/livro.png'
import s from './livros.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function LivroDoados() {


  const [livros, setLivros] = useState([])



  const puxarLivros = async () => {
    const resposta = await axios.get("https://api-livros-i656.onrender.com/livros")
    setLivros(resposta.data)
  }

  useEffect(() => {
    puxarLivros()
  }, [])

  console.log(livros)

  return (
    <section className={s.livroDoados}>
      <h1>Livros Doados</h1>
      <section className={s.livros}>
        <img src={Livro} alt="Capa do livro O Protagonista" />
        <p>O protagonista</p>
        <p>Susanne Andrade</p>
        <p>Ficção</p>
      </section>
    </section>
  )
}