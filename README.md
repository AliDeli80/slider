# Slider - Clash of Clans Character (React)
Welcome to the Slider repository! This project showcases the Slider character from Clash of Clans implemented using React with functional components. The application utilizes React's `useState` and `useEffect` hooks to manage state and side effects efficiently.  

## Introduction 
Slider is a dynamic character in Clash of Clans known for [brief description of the Slider character and its role in the game]. This repository provides a React implementation to demonstrate how to create and manage character data using hooks and a JSON server.  
 

## Features 
- **Functional Components**: Built with modern React functional components for a clean codebase.  
- **State Management**: Utilizes `useState` for managing the character's attributes.  
- **Side Effects**: Implements `useEffect` to handle side effects such as fetching data from a JSON server.  
- **JSON Server**: Simulates an API to provide character data and enables feature interaction.  
- **Interactive UI**: Displays character details and interactive features.

## Technologies 
This project uses the following technologies:  

- **React**: A JavaScript library for building user interfaces.  
- **Hooks**: Utilizes React's `useState` and `useEffect` for managing state and side effects.  
- **JSON Server**: A simple way to create a RESTful API using a JSON file as a data source.  
- **CSS**: For styling the application.

## Installation  
To set up this project locally, follow these steps:  

1. Clone the repository:  
```bash  
git clone https://github.com/AliDeli80/slider.git
```
2. Navigate to the project directory:
```bash
cd slider
```
3. Install the project dependencies:
```bash
npm install
```
4. Install JSON Server globally (if not already installed):
```bash
npm install -g json-server
```
5. Start the JSON Server (this assumes you have a db.json file configured):
```bash
json-server --watch db.json
```
6. Start the React development server:
```bash
npm start
```
7. Open your browser and go to http://localhost:3000 to view the application.

## Example Code
Here’s a brief example demonstrating how to fetch character data from the JSON server:
```javascript
export default function Slider() {

    const [heroes, setHeroes] = useState([])
    const [courser, setCourser] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3001/heroes')
            .then(response => response.json())
            .then(heroes => setHeroes(heroes))
    }, [])
function handleNext() {
        const current = courser + 1 < heroes.length ? courser + 1 : 0;

        setCourser(current);
    }

    function handlePrev() {
        const current = courser - 1 < 0 ? (heroes.length - 1) : courser - 1;

        setCourser(current);
    }

    return (
        <div className="slide-container">

            <div className="wrapper">
                {!heroes.length ?
                    <div>Loading...!</div> :
                    <>
                        <Arrow direction={'prev'} handleClick={handlePrev} />
                        <Card hero={heroes[courser]} />
                        <Arrow direction={'next'} handleClick={handleNext} />
                    </>
                }
            </div>

        </div>
    )
}
```

## Running the JSON Server
To set up the JSON server, ensure you have a `db.json` file in the root directory of your project. Here’s a sample structure for `db.json`:
```json
{
    "heroes": [{
        "id": 1,
        "name": "barbarian",
        "level": "Level 4",
        "description": "The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction.He has Killer yellow horseshoe mustache.",
        "units": [{
                "state": 20,
                "value": "training"
            },
            {
                "state": 16,
                "value": "speed"
            },
            {
                "state": 150,
                "value": "cost"
            }
        ],
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png"
    }
```
This will create a RESTful endpoint at `http://localhost:3000/slider` where your React app can fetch the Slider character's data.

## Contribution
Contributions are welcome! If you’d like to contribute to this project:

Fork the project
Create your feature branch (`git checkout -b feature/AmazingFeature`)
Commit your changes (`git commit -m 'Add some AmazingFeature'`)
Push to the branch (`git push origin feature/AmazingFeature`)
Open a pull request

## License
This project is licensed under the [MIT License](LICENSE).
