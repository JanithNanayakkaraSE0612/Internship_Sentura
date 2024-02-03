import {Component} from "react";
import axios from "axios";


interface UserProps {
    data:any;
}

interface UserState {
    user_id: string;
    email: string;
    givenName: string;
    middleName: string;
    name: string;
    familyName: string;
    nickName: string;
    phoneNumber: string;
    comment: string;
    picture: string;
}

export class UserForm extends Component<UserProps,UserState> {

    private api : any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `https://87bf6c8a4f5442b68f1c8915bd1d3f42.weavy.io/`});
        this.state = {
            user_id: "",
            email: "",
            givenName: "",

            middleName: "",
            name: "",
            familyName: "",
            nickName: "",
            phoneNumber: "",
            comment: "",
            picture: ""
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }
    render() {
        return (
            <div>
                <div className="flex justify-center pt-2 pb-20">
                    <div
                        className="bg-gray-100 w-[25em] h-full mt-14 rounded-lg text-center border-2">
                        <h1 className="text-4xl font-bold text-gray-200 bg-blue-400 pt-4 pb-4 rounded-t-lg">User Form</h1>

                        <form className="">
                            <div className="w-11/12 ml-5">

                                <div className="text-start ml-5">
                                    <div className="mt-5">
                                        <label className="text-xs font-bold">User_ID</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="text"
                                            name={"user_id"}
                                            value={this.state.user_id}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Email</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"email"}
                                            value={this.state.email}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>


                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Given Name</label>
                                        <input
                                            className="appearance-none rounded w-11/12
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-password" type="text"
                                            name={"givenName"}
                                            value={this.state.givenName}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Middle Name</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"middleName"}
                                            value={this.state.middleName}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Name</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"name"}
                                            value={this.state.name}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Family Name</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"familyName"}
                                            value={this.state.familyName}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Nick Name</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"nickName"}
                                            value={this.state.nickName}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Phone Number</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"phoneNumber"}
                                            value={this.state.phoneNumber}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Comment</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"comment"}
                                            value={this.state.comment}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Picture</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="file"
                                            name={"picture"}
                                            value={this.state.picture}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                </div>

                                <button
                                    className="shadow bg-blue-400 w-11/12 text-white hover:bg-blue-900 font-bold py-2 px-4 rounded
                                text-[16px] mt-5"
                                    type="button" onClick={this.onSaveBtnClick}>
                                    Save
                                </button>

                                <button
                                    className="shadow bg-blue-400 w-11/12 text-white hover:bg-blue-900 font-bold py-2 px-4 rounded
                                text-[16px] mt-5"
                                    type="button" /*onClick={this.checkAdmin}*/>
                                    Update
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
                givenName: this.state.givenName,
                middleName: this.state.middleName,
                name: this.state.name,
                familyName: this.state.familyName,
                nickName: this.state.nickName,
                phoneNumber: this.state.phoneNumber,
                comment: this.state.comment,
                picture: this.state.picture

            }).then((res: { data: any}) => {
                console.log(res);
            }).catch((error: any)=> {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }


}