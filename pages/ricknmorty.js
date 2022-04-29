import Layout from "../components/layout";

export default function RickNMorty({characterData}) {
    return (
        <Layout>
            <main className="container">
                <div className="col-12 mt-5">
                    <div className="row justify-content-center">
                        {characterData.results.map((character, key) => (
                            <div key={key} className="card col-4 shadow p-3 mb-5 mx-2" style={{width: '18rem'}}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className="card-img-top" src={character.image} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <p className="card-text">{character.type}</p>
                                </div>
                                <a href={character.url} className="btn btn-primary">Go To Detail</a>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await fetch("https://rickandmortyapi.com/api/character")
    const characterData = await data.json()
    return {
        props: {
            characterData
        }
    }
}