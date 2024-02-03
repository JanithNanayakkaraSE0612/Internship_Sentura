import {Component} from "react";
import React from "react";
import axios from "axios";

interface UserProps {
    data: any;
}

interface UserState {
    user_id: string;
    fisrtName: string;
    lastName: string;
    email: string;
    address:string;
    phoneNumber: string;
}

export class UserForm extends Component<UserProps, UserState> {

    private api: any;
    private accessToken: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `https://feedc13e9d704cf5b65794112dc3e794.weavy.io/api`});
        this.accessToken = "wys_7RqZlPxycruoitgvY8vfw9amgctP0q1lDe00";
        this.state = {
            user_id: "",
            fisrtName: "",
            lastName: "",
            email: "",
            address:"",
            phoneNumber: ""
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    render() {
        return (
            <div>
                <div className="flex justify-center pt-2 pb-20">
                    <div
                        className="bg-transparent flex-auto w-[80em] h-full mt-14 rounded-lg text-center border-2">
                        <h1 className="text-4xl font-bold text-gray-200 bg-black pt-4 pb-4 rounded-t-lg">User
                            Form</h1>

                        <form className="">
                            <div className="w-11/12 ml-5">

                                <div className="text-start ml-5">
                                    <div className="mt-5">
                                        <label className="text-xs font-bold mr-12">User_ID</label>
                                        <input
                                            className="appearance-none rounded w-4/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="text"
                                            name={"user_id"}
                                            value={this.state.user_id}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                            
                                    <div className="mt-5">
                                        <label className="text-xs font-bold mr-7">Fisrt Name</label>
                                        <input
                                            className="appearance-none rounded w-4/12
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="text"
                                            name={"givenName"}
                                            value={this.state.fisrtName}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold mr-7">Last Name</label>
                                        <input
                                            className="appearance-none rounded w-4/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"middleName"}
                                            value={this.state.lastName}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                   
                                    <div className="mt-5">
                                        <label className="text-xs font-bold mr-14">Email   </label>
                                        <input
                                            className="appearance-none rounded w-4/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300 mr-1"
                                            id="inline-full-name" type="email"
                                            name={"email"}
                                            value={this.state.email}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>
                                  
                                          
                                    <div className="mt-5">
                                        <label className="text-xs font-bold mr-11">Address</label>
                                        <input
                                            className="appearance-none rounded w-4/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"address"}
                                            value={this.state.address}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                  
                                    <div className="mt-5">
                                        <label className="text-xs font-bold mr-1">Phone Number</label>
                                        <input
                                            className="appearance-none rounded w-4/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"phoneNumber"}
                                            value={this.state.phoneNumber}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                    
                                </div>

                                <button
                                    className="shadow bg-blue-400 w-2/12 mr-2 text-white hover:bg-blue-900 font-bold py-2 px-4 rounded
                                text-[16px] mt-5"
                                    type="button" onClick={this.onSaveBtnClick}>
                                    Save
                                </button>

                                <button
                                    className="shadow bg-yellow-400 w-2/12 mr-2 text-white hover:bg-blue-900 font-bold py-2 px-4 rounded
                                text-[16px] mt-5"
                                    type="button" onClick={this.onUpdateClick}>
                                    Update
                                </button>
                                <button
                                    className="shadow bg-red-400 w-2/12 mr-2 text-white hover:bg-blue-900 font-bold py-2 px-4 rounded
                                text-[16px] mt-5"
                                    type="button" onClick={this.onDeleteClick}>
                                    Delete
                                </button>
                                <button
                                    className="shadow bg-green-400 w-2/12  text-white hover:bg-blue-900 font-bold py-2 px-4 rounded
                                text-[16px] mt-5"
                                    type="button" onClick={this.onGetAllUserClick}>
                                    GetAll
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    handleMessageInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private onSaveBtnClick = () => {

        try {
            this.api.post('/post', {
                    user_id: this.state.user_id,
                    email: this.state.email,
                    fisrtName: this.state.fisrtName,
                    lastName: this.state.lastName,
                    address:this.state.address,
                    phoneNumber: this.state.phoneNumber,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.accessToken}`,
                    },
                }
            ).then((res: { data: any }) => {
                console.log(res);
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    private onUpdateClick = () =>{

        try {
            this.api.put('/put', {
                    user_id: this.state.user_id,
                    email: this.state.email,
                    givenName: this.state.fisrtName,
                    middleName: this.state.lastName,
                    phoneNumber: this.state.phoneNumber,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.accessToken}`,
                    },
                }
            ).then((res: { data: any }) => {
                console.log(res);
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error updating data:', error);
        }

    }

    private onDeleteClick = () =>{
        try {
            this.api.delete('/delete', {
                data: {
                    user_id: this.state.user_id,
                    email: this.state.email,
                    givenName: this.state.fisrtName,
                    middleName: this.state.lastName,
                    phoneNumber: this.state.phoneNumber,
                },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.accessToken}`,
                },
            }).then((res: { data: any }) => {
                console.log(res);
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }

    private onGetAllUserClick = async () =>{
       
            try {
                const response = await this.api.get('/get', {
                    params: {
                        user_id: this.state.user_id,
                        email: this.state.email,
                        givenName: this.state.fisrtName,
                        middleName: this.state.lastName,
                        phoneNumber: this.state.phoneNumber,
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.accessToken}`,
                    },
                });
        
                console.log(response.data);
            } catch (error) {
                console.error('Axios Error', error);
            
        }
        
    }

}