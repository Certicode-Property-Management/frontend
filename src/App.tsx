import './App.css'
import { LoginForm } from './components/login-form'
import { Navbar1 } from './components/navbar'

function App() {

    return (
        <>
            <Navbar1 />
            <div className="lg:grid grid-rows-1 grid-cols-2 gap-8 w-full px-8 py-16">
                <LoginForm />
                <div className="hidden lg:block">
                    <img className="" src="https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=773"/>
                </div>
            </div>
        </>
    )
}

export default App
