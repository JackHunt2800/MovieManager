import React,{Component} from "react";

export default class CreateMovie extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'',
            rating:'',
            type:'',
            rDate:'',
            status:'',
            genre:'',
            mDetails: []
        }

    }

    componentDidMount(){
        const requestOptions={
            method:'GET',
            header:{'Content-Type': 'application/json'}
        }
        fetch('http://localhost:3000/movies',requestOptions)
        .then(res=>{return res.json()})
        .then(data=>{
            this.setState({
                mDetails:data
            })
            console.log(data)
            
        })
    }

    onChangeName=(e)=>{
        e.preventDefault()
        this.setState({
            name:e.target.value
        })

    }

    onChangeRating=(e)=>{
        e.preventDefault()
        this.setState({
            rating:e.target.value
        })
    }

    onChangeType=(e)=>{
        e.preventDefault()
        this.setState({
            type:e.target.value
        })
    }

    onChangeReleaseDate=(e)=>{
        e.preventDefault()
        this.setState({
            rDate:e.target.value
        })

    }

    onChangeStatus=(e)=>{
        e.preventDefault()
        this.setState({
            status:e.target.value
        })

    }

    onChangeGenre=(e)=>{
        e.preventDefault()
        this.setState({
            genre:e.target.value
        })

    }


    onSubmit=()=>{
        const movie={
            name:this.state.name,
            rating:this.state.rating,
            type:this.state.type,
            rDate:this.state.rDate,
            status:this.state.status,
            genre:this.state.genre
        }

        const url='http://localhost:3000/movies'
        const options={
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json;charset=UTF-8'
            },
            body:JSON.stringify(movie)
        }

        fetch(url,options)
        .then(response=>{
            alert("Inserted successfully")
            console.log(response.status)
        }).catch((err)=>{
            console.log(err)
        })

    }

    displayMovies=()=>{}


    render(){
        return (
            <div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label>Enter name of Movie/Tv-series</label>
                            <input type="text" value={this.state.name} onChange={this.onChangeName}></input>
                        </div>
                        <div>
                            <label>Enter rating</label>
                            <input type="text" value={this.state.rating} onChange={this.onChangeRating}></input>
                        </div>
                        <div>
                            <label>Enter Type</label>
                            <input type="text" value={this.state.type} onChange={this.onChangeType}></input>
                        </div>
                        <div>
                            <label>Enter release date</label>
                            <input type="text" value={this.state.rDate} onChange={this.onChangeReleaseDate}></input>
                        </div>
                        <div>
                            <label>Enter watch status</label>
                            <input type="text" value={this.state.status} onChange={this.onChangeStatus}></input>
                        </div>
                        <div>
                            <label>Enter genre</label>
                            <input type="text" value={this.state.genre} onChange={this.onChangeGenre}></input>
                        </div>
                        <cennter><input type="submit" value="submit"></input></cennter>
                    </form>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Type</th>
                                <th>Release Date</th>
                                <th>Status</th>
                                <th>Genre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                this.state.mDetails.map(data=>{
                                    return <tr key={data._id}>
                                        <td>{data.name}</td>
                                        <td>{data.rating}</td>
                                        <td>{data.type}</td>
                                        <td>{data.rDate}</td>
                                        <td>{data.status}</td>
                                        <td>{data.genre}</td>
                                    </tr>
                                })

                                
                                
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
        
    }





}