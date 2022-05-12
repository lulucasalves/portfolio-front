import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineBehance,
  AiOutlineMedium,
  AiOutlineDribbble
} from 'react-icons/ai'

export function Contact() {
  return (
    <div className="contacts">
      <div className="contactDiv">
        <div className="textSection">
          <h2>Contato</h2>
          <p className="ctaSocialMedia">Me siga nas redes sociais!</p>
          <div className="socialMediaGroup">
            <AiOutlineGithub />
            <p>lulucasalves</p>
          </div>
          <div className="socialMediaGroup">
            <AiFillLinkedin />
            <p>Lucas Alves</p>
          </div>
          <div className="socialMediaGroup">
            <AiOutlineBehance />
            <p>lulucasalves</p>
          </div>
          <div className="socialMediaGroup">
            <AiOutlineMedium />
            <p>lulucasalves</p>
          </div>
          <div className="socialMediaGroup">
            <AiOutlineDribbble />
            <p>lulucasalves</p>
          </div>
          <p className="ctaSocialMedia">Ou me envie um email</p>
          <div className="socialMediaGroup">
            <AiOutlineDribbble />
            <p>lucas.alves.supus@oulook.com</p>
          </div>
        </div>
        <div className="formSection">
          <input />
          <input />
          <input />
        </div>
      </div>
    </div>
  )
}
