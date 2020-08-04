import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="" alt="" />
                <div>
                    <strong>Domingos Júnior</strong>
                    <span>Software Engineer</span>
                </div>
            </header>

            <p>
                Lopsum
        <br />
        Lopsum 2
      </p>
            <footer>
                <p>Preço/Hora
          <strong>
                        R$ 599,99
          </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
            Entrar em contato
        </button>
            </footer>
        </article>

    );
}

export default TeacherItem;