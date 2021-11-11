import Footer from '../components/footer';
import Header from '../components/header';

const Formations = () => {
    return (
        <main className="Body">
            <Header />
            <div>
                <h1 className="title">Formations</h1>
                <div>
                    <h3 class="course_title">Simplon — Apple Foundation Program (10/2021 - 11/2021) <br/> Montreuil (93) </h3>
                    <div>
                        <ul>
                            <li>Recherche et Collaboration (Miro) </li>
                            <li>Réalisation Interfaces UX (Marvel) </li>
                            <li>Initiation et mini-projets sur Swift (XCode)</li>
                            <li>Initiation Swift UI</li>
                            <li>Réalisation de Projet</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 class="course_title">AFPA — Développeur Web & Web Mobile (11/2020 - 07/2021) <br/> Créteil (94)</h3>
                    <div>
                        <ul>
                            <h4>Front-end :</h4>
                            <li>Maquettage d’une application.</li>
                            <li>Développement d’interfaces utilisateur web statiques et dynamiques.</li> 
                            <li>Développement d’une interface utilisateur avec une solution de gestion de contenu.</li>       
                            {/* <li>React JS</li>
                            <li>MySQL</li>
                            <li>Express JS</li>
                            <li>Node JS</li>
                            <li>Sequelize</li> */}
                        </ul>
                        <ul>
                            <h4>Back-end :</h4>
                            <li>Création et gestion d’une base de données</li>
                            <li>Développement de la partie serveur d’un site web dynamique.</li>
                            <li>Développement d’API.</li>
                            {/* <li>Git / Versioning</li>
                            <li>MySQL WorkBench</li>
                            <li>WordPress</li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Formations;