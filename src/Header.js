import React from 'react';

export default function Header({ children }) {
    return (
        //Deixar {children} para poder alter o que aparece
        //no header quando chamar a função em App.js
        <header>
            <h1> {children} </h1>
        </header>
    )
}