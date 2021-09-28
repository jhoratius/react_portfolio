import Footer from '../components/footer';
import Header from '../components/header';

const Competences = () => {
    return (
        <main className="Body">
            <Header />
            <div>
                <h1 class="title"> Compétences </h1>
                <table>
                    <thead>
                        <th colSpan="1">Niveau</th>
                        <th colSpan="7">Languages & Frameworks</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Notions Simples</td>
        
                            <td>Python</td>
                            <td>Angular</td>
                            <td>Vue JS</td>
                            <td>PHP</td>
                            <td>Golang</td>
                            <td>Swift</td>
                            <td>C#</td>
                        </tr>
                        <tr> 
                            <td>Intermédiaire</td>
        
                            <td>CSS</td>
                            <td>Javascript</td>
                            <td>React JS</td>
                            <td>Node JS</td>
                            <td>Express JS</td>
                            <td>Sequelize</td>
                            <td>MySQL</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </main>
    )
}

export default Competences;