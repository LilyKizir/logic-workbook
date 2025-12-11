import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionList from './QuestionList';
import LP from '../logic-penguin/load';

const ELP = () => {

    // Then in your component, you just tell it where to draw:
    useEffect(() => {
        LP.embed({
            parentid: 'my-proof-container', // The ID of your div
            problemtype: 'derivation-hardegree',
            problem: { prems: ['P->Q', 'P'], conc: 'Q' } // Example problem
        });
    }, []);


    return (
        <>
            <div id="my-proof-container"></div>
        </>
    );
};

export default ELP;