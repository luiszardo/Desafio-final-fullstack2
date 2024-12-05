import s from './inicio.module.scss'
import imagemPessoas from '../../assets/pessoas.png'
import imagemLeitura from '../../assets/leitura.png'
import imagemMao from '../../assets/mao.png'
import imagemBlanca from '../../assets/mao.png'
export default function Inicio() {
  return (
    <main>
      <section className={s.primeiraSessaoInicio}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={s.porqueQueroDoar}>
        <h2>Por que devo doar?</h2>
        <section className={s.containerCards}>
          <section>
            <img src={imagemPessoas} alt="Imagem uma roda de doação" />
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </section>
          <section>
            <img src={imagemLeitura} alt="Imagem de uma pessoa lendo" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>
          <section>
            <img src={imagemMao} alt="Imagem de uma mão mostrando uma união de pessoas" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>
          <section>
            <img src={imagemBlanca} alt="Imagem ilustrando uma balança igualdade" />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </section>
        </section>
      </section>
    </main>
  )
}