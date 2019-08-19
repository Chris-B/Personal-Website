import React, { Component } from 'react';
import Language from './Individual';

class LanguageLayout extends Component {

    renderFolioLang(name, thumbnail, link) {
        return <Language tName={name} tThumb={thumbnail} tUri={link} tClass="FolioLang"/>;
    }

    render() {
        return (
            <div id="FolioLanguages">
                { this.renderFolioLang("Java", "java-logo", "https://www.java.com/en/") }
                { this.renderFolioLang("Python", "Python-logo", "https://www.python.org/") }
                { this.renderFolioLang(".NET", "csharp-logo", "https://dotnet.microsoft.com/") }
            </div>
        );
    }

}