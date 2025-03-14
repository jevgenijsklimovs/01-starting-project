import {CORE_CONCEPTS} from './data.js';
import Header from './components/header/Header';
import CoreConcept from './components/CoreConcept';

function App() {
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
            </main>
        </div>);
}

export default App;
