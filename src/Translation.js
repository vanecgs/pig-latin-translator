import React from 'react';
import { connect } from 'react-redux';
import TranslationForm from './TranslationForm';

class Translation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            translationText: 'Welcome to Pig Latin translator, enter some text and hit translate'
        };
    }
    
    translate = text => {
        //Split text
        let translation = text.split(' ');

        for(var i = 0; i < translation.length; i++) {
            if(/[aeiou]/.test(translation[i].charAt(translation[i] - 1))) {
                //If first letter starts with a vowel, add 'way' to the end of the word
                translation[i] += 'way';
            }
            else {
                let consonantWord = translation[i],
                    j = 1;

                //Find the first vowel
                while(!/[aeiou]/.test(consonantWord.charAt(j))) {
                    j++;
                }

                //Move chars up to the first vowel at the end of the string and add 'ay'
                translation[i] = consonantWord.substring(j) + consonantWord.substring(0, j) + 'ay';
            }
        }

        //Join the text back together and return
        return translation.join(' ');
    }

    submit = values => {
        this.setState({ translationText: this.translate(values.tranlationText) });
    }
    
    render() {
        return (
            <div>
                <h2>Pig Latin Translator</h2>
                <TranslationForm onSubmit={this.submit} />
                <p className="result">{this.state.translationText}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        translationText: state.translationText
    };
}

export default connect(mapStateToProps)(Translation);