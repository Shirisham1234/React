import React from 'react'
class Movies extends React.Component{
    movie_Name="kgf3"
    actor="yash"
    render(){
        return <div>
            <h1>Movie Component</h1>
            <h2>Movie Name:{this.movie_Name}</h2>
            <h2>Actor:{this.actor}</h2>
        </div>
    }
}
export default Movies