import reactImg from "../../assets/react-core-concepts.png";
import './Header.css'

const reactDescriptions = ["Core", "Crucial", "Fundamental"];

export default function Header() {
    const description = reactDescriptions[getRandomDescription(2)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>);
}

function getRandomDescription(max) {
    return Math.floor(Math.random() * (max + 1));
}