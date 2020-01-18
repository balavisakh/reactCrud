import React, { Component } from 'react'
import Navbar from '../components/navbar/Navbar'

export default class Home extends Component {
    constructor(){
        super();
        this.state = {datas:[]}
    }

    componentDidMount(){
        var url = "http://dummy.restapiexample.com/api/v1/employees"

        fetch(url,{method:"get"}).then(response=>{
            var jsonData = response.json();
            console.log(jsonData);
        }).then(res=>{
            this.setState({datas: res})
        })
    }
    render() {
        const { datas } = this.state
        console.log(datas);
        return (
            
            <div>
                <Navbar />

              
                {/* <ul>
                {datas.map(allData => (
                <li key={allData.id}>{allData.id}</li>
                ))}
            </ul> */}
            </div>
        )
    }

   
}
