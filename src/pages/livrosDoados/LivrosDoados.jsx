import Livro from '../../assets/livro.png'
import s from './livros.module.scss'
export default function LivroDoados() {
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