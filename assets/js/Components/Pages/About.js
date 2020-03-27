import React from 'react';

export default function About() {
    return (
        <div className="text-light font-weight-bold">
            <h1>Hello !</h1>
            <p>Cette application a été créée dans le cadre d'un kata. Sortant d'une formation de Game Developer j'ai souhaité me rediriger dans le web.
                J'ai dû apprendre à utiliser React, Php Symfony & MySQL en partant de rien pour réaliser cette application. Après de très longues heures de travail
                et de veille sur les différentes techno utilisées j'ai réussi à fournir cette appli en 3 semaines.</p> 
            <p>N'hésitez pas à me faire part de vos retours ! :)</p>
            <div className="pull-right">
                <a className="font-weight-bold" href="https://www.linkedin.com/in/alexandra-palarus/">Mon LinkedIn</a>
            </div>
        </div>
    )
}
