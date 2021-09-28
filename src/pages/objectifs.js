import Footer from '../components/footer';
import Header from '../components/header';

const Objectifs = () => {
    return (
        <main className="Body">
            <Header />
            <div>
                <h1 className="title">Objectifs</h1>
                    <p>
                        • Faire de l'alternance avec une école reconnu par l'Etat, sur une formation <br/> dîplomante niveau 6 et me spécialiser dans l'IA, la blockchain et les jeux <br/> vidéos.
                    </p>
                    <p>
                        • Trouver un emploi auprès d'une entreprise avec un projet enrichissant  et <br/> une équipe compétente.
                    </p>
                    <p>
                        • Gagner en compétences professionnelles et de l'expérience concrète sur <br/> plusieurs années.
                    </p>
                    <p>• Devenir auto-entrepreneur et lancer ma propre Start-Up pour concrétiser <br/> mes idées.</p>
            </div>
            <Footer />
        </main>
    )
}

export default Objectifs;