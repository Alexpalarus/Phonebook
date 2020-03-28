import React from 'react';

export default function About() {
    return (
        <div className="text-light font-weight-bold">
            <h1 className="display-4 ">Hello !</h1>
                <div className="shadow p-3 mb-5 bg-white rounded text-secondary">
                    <p className="lead">Cette application a été créée dans le cadre d'un kata. Sortant d'une formation de Game Developer j'ai souhaité me rediriger dans le web.
                        J'ai dû apprendre à utiliser la librairie React et le framework Symfony 4 en association avec une base de donnée MySQL. L'api est réalisée avec ApiPlatform. Après de très longues heures de travail
                        et de veille sur les différentes techno utilisées.</p> 

                    <blockquote className="blockquote">
                        <p>N'hésitez pas à me faire part de vos retours ! :)</p>
                    </blockquote>
                </div>     
                <div className="pull-right">
                        <a className="font-weight-bold mr-3" href="https://www.linkedin.com/in/alexandra-palarus/"><i className="fab fa-linkedin fa-3x"></i></a>
                        <a className="font-weight-bold text-dark" href="https://github.com/Alexpalarus/"><i class="fab fa-github-square fa-3x"></i></a>
                </div>   
        </div>
    );
}
