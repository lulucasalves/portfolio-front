import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMedium
} from 'react-icons/ai'

import { MdOutlineEmail } from 'react-icons/md'

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
            <AiOutlineMedium />
            <p>lulucasalves</p>
          </div>
          <p className="ctaSocialMedia">Ou me envie um email</p>
          <div className="socialMediaGroup">
            <MdOutlineEmail />
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
