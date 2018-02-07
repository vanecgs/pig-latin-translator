import React from 'react'
import { Field, reduxForm } from 'redux-form'

let TranslationForm = props => {
    const { handleSubmit } = props;

    return <form onSubmit={handleSubmit}>
        <div className="field">
            <Field name="tranlationText" component="input" type="text" />
            <button type="submit">Translate</button>
        </div>
    </form>
}

TranslationForm = reduxForm({
    form: 'translation'
})(TranslationForm)

export default TranslationForm