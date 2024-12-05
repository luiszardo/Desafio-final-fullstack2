import s from '../footer/footer.module.scss'
import logoFacebook from '../../assets/facebook.png'
import logoInstagram from '../../assets/instagram.png'
import logoLinkedin from '../../assets/linkedin.png'
import logoTwitter from '../../assets/twitter.png'
import logoYoutube from '../../assets/youtube.png'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>
        <nav>
            <a href=""><img src={logoFacebook} alt="Imagem da logo do Facebook" /></a>
            <a href=""><img src={logoTwitter} alt="Imagem da logo do Twitter" /></a>
            <a href=""><img src={logoYoutube} alt="Imagem da logo do Youtube" /></a>
            <a href=""><img src={logoLinkedin} alt="Imagem da logo do Linkedin" /></a>
            <a href=""><img src={logoInstagram} alt="Imagem da logo do Instagram" /></a>
        </nav>
      </section>
      <section className={s.copyRight}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
      </section>
    </footer>
  )
}