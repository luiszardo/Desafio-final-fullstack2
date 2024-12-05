import s from './queroDoar.module.scss'
import IconeLivro from '../../assets/vector.png'


export default function QueroDoar() {
  return (
    <section className={s.queroDoarSection}>
      <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
      <form action="">
        <section className={s.cabecalhoForm}>
          <img src={IconeLivro} alt="Icone de um livro aberto" />
          <h2>Informações do Livro</h2>
        </section>
        <input type="text" name="" id="" placeholder='Titulo' />
        <input type="text" name="" id="" placeholder='Categoria' />
        <input type="text" name="" id="" placeholder='Autor' />
        <input type="text" name="" id="" placeholder='Link da imagem' />
        <input type="submit" value="Doar" className={s.buttonDoar} />
      </form>
    </section>
  )
}