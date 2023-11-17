import React from "react";
import { getStartPhrase, getEndPhrase } from "./Phrases";
import './Phrases.css';

class PhraseController extends React.Component {
    render () {
        return (
            <q className="phrase">
                {getStartPhrase()}, {getEndPhrase()}
            </q>
        )
    }
}
export default PhraseController;
