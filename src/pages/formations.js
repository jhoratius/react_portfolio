import Footer from '../components/footer';
import Header from '../components/header';

const Formations = () => {
    return (
        <main className="Body">
            <Header />
            <div>
                <h1 className="title">Formations</h1>
                <div>
                    <h3>Lycée François Arago — Baccalauréat STI2D (2015) <br/> Villeneuve-Saint-Georges (94) </h3>
                    <div className="exp">
                        <ul className="exp2">
                            <li>Mécanique</li>
                            <li>Électrique</li>
                            <li>Anglais Technologique</li>
                        </ul>
                        <ul  className="exp2">
                            <li>Informatique</li>
                            <li>Mathématiques</li>
                            <li>Énergies Environnement</li> 
                        </ul>
                    </div>
                </div>

                <div>
                    <h3>AFPA — Développeur Web & Web Mobile (2021) <br/> Créteil (94)</h3>
                    <div className="exp">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li> 
                            <li>JavaScript</li>       
                            <li>React JS</li>
                            <li>MySQL</li>
                            <li>Express JS</li>
                            <li>Node JS</li>
                            <li>Sequelize</li>
                        </ul>
                        <ul>
                            <li>Figma</li>
                            <li>Creately</li>
                            <li>Trello</li>
                            <li>Git / Versioning</li>
                            <li>MySQL WorkBench</li>
                            <li>WordPress</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Formations;