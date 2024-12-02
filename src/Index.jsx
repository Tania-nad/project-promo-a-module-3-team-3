import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import App from './components/App';

function Index() {
    return (
        <Routes>
            {/* Define Routes for Homepage and App */}
            <Route path="/" element={<Landing />} />
            <Route path="/app" element={<App />} />
        </Routes>
    );
}

export default Index;
