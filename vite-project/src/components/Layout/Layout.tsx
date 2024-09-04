import { Form } from "../../containers/Form/Form";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import './Layout.scss'

export function Layout() {
    return (
        <div className="Layout">
            <Header/>
            <Sidebar/>
            <Form/>
        </div>
    )
}