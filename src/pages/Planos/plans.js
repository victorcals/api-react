import React from 'react';
import "./JinPlanos.css";


const valores = [{

    "nome": "Basico",
    "valor": "0U$",
    "disponivel": "1",
    "Propagandas": "Propagandas a cada 10 minutos",

},
{
    "nome": "Medio",
    "valor": "5U$",
    "disponivel": "10",
    "Propagandas": "1 Propaganda por filme",

},
{
    "nome": " Pro",
    "valor": "25U$",
    "disponivel": "Ilimitado",
    "Propagandas": "Sem Propagandas",
}
]


function Planos() {
    return (

        <div className="container text-center">
            <div className="row">
                {valores.map((val, i) => (


                    <div className="col" key={i}>
                        <div>

                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">{val.nome}</h2><br></br>

                                <h5> Valor mensal {val.valor}</h5><br></br>

                                <h5>filmes disponíveis diariamente  {val.disponivel}</h5><br></br>

                                <h5>  {val.Propagandas} </h5><br></br>

                                <a href={`/contratar/${val.nome}`}><br></br><br></br>

                                    <div className="btn btn-dark">
                                        Detalhes  </div>
                                </a>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Planos;