import Footer from '../components/footer';
import Header from '../components/header';

const Experiences = () => {
    return (
        <main className="Body">
            <Header />
            <div>
                <h1 class="title"> Expériences </h1>

                <h3 className="title3">AFPA, Créteil 94 - (2020 / 2021) Développeur Web / Application </h3>
                <table cellSpacing="5px" cellPadding="0">
                    <thead colspan="2">
                        <th>
                            Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité
                        </th>
                        <th>
                            Développer la partie back-end d'une application web ou web mobile en intégrant les recommandations de sécurité
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Maquetter une application</td>
                            <td>Créer une base de données</td>
                        </tr>
                        <tr>
                            <td>Réaliser une interface utilisateur web statique et adaptable</td>
                            <td>Développer les composants d'accès aux données</td>
                        </tr>
                        <tr>
                            <td>Développer une interface utilisateur web et dynamique</td>
                            <td>Développer la partie back-end d'une application web ou web mobile</td>
                        </tr>
                        <tr>
                            <td>Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce</td>
                            <td>Elaborer et mettre en oeuvre des composants dans une application de gestion de contenu ou e-commerce</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3 className="title3">Ikea, Villiers-Sur-Marne 94 Manutentionnaire </h3>
                <ul className="exp2_list">
                    <li>
                        Travailler au sein d'une équipe sur la préparation de commandes
                    </li>
                    <li>
                        Monter des meubles sous la direction de la Bonne Trouvaille
                    </li>
                    <li>
                        Renseigner et aider les clients dans la partie Libre-Service du magasin
                    </li>
                    <li>
                        Faire l'inventaire des arrivages du magasin dans l'entrepôt
                    </li>
                    <li>
                        Faire l'emballage de commandes pour des entreprises externes
                    </li>
                </ul>
            </div>
            <Footer />
        </main>
    )
}

export default Experiences;