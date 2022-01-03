import React from 'react'
import Header from '../components/account/Header'
import Footer from '../components/account/Footer'

const AccountLayout = (props) => {
    return (
        <div>
            <div className=" font-sans">

                <Header {...props} />

                <main>
                    {props.children}

                </main>
                <div>
                    <Footer {...props} />

                </div>
            </div>
        </div>
    )
}

export default AccountLayout
