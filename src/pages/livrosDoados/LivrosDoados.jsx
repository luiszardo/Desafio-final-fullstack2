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
    <section className={s.livrosDoadosSection}>
      <h1>Livros Doados</h1>
      <section className={s.containerCards}>
        {livros.map((item) => (
          <section>
            <img src={item.image_url} alt={item.titulo} />
            <div>
              <h3>{item.titulo}</h3>
              <p>{item.categoria}</p>
              <p>{item.autor}</p>
            </div>
          </section>
        ))}
      </section>
    </section>
  )
}