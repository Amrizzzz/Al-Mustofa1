'use client'


import React, { ChangeEvent } from "react";

interface ModuleState {
    name: string;
    age: number | string;
    gender: string;
    description: string;
    show: boolean;
}

class Module extends React.Component<{}, ModuleState> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            age: "",
            gender: "",
            description: "",
            show: false

        }
    }

    handleClick(): void {
        this.setState({ show: true })
    }

    handleDelete(): void {
        this.setState({ show: false, name: "", age: "", gender: "", description: "" })
    }

    componentDidMount(): void {
        // this.state.
    }

    render() {
        return (
            <div>
                <div className="block">
                    <div style={{ display: "block" }}>
                        <label>Nama </label>
                        <input type="text" placeholder="masukkan nama" id="nama" onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div style={{ display: "block" }}>
                        <label>Usia </label>
                        <input type="test" placeholder="masukkan usia" id="usia" onChange={(e) => this.setState({ age: e.target.value })} />
                    </div>
                    <div style={{ display: "block" }}>
                        <label>Gender </label>
                        <input type="test" placeholder="masukkan gender" id="gender" onChange={(e) => this.setState({ gender: e.target.value })} />
                    </div>
                    <div style={{ display: "block" }}>
                        <label>alamat </label>
                        <textarea name="message"
                            id="message"
                            rows={4}
                            onChange={(e) => this.setState({ description: e.target.value })}
                            defaultValue={''}></textarea>
                    </div>


                    <div style={{ display: "block" }}>
                        <button onClick={() => this.handleClick()} > Tampilkan</button>
                    </div>
                </div>
                <br />
                {this.state.show === true ? (<div>
                    <h5>nama : {this.state.name}</h5>
                    <h5>usia : {this.state.age}</h5>
                    <h5>gender : {this.state.gender}</h5>
                    <h5>alamat : {this.state.description}</h5>
                    <br />
                    <button onClick={() => this.handleDelete()} > Hapus</button>
                </div>) : (<></>)}
            </div>
        )
    }
}

export default Module;