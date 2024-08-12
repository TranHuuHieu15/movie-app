import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/Banner'

function App() {
    return (
        <>
            <Router>
                <Header />
                <Banner />
            </Router>
        </>
    )
}

export default App
