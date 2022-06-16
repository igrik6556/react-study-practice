import React from "react";

import Timer from './components/Timer'
import Form from './components/Form'

class AppNep extends React.Component {
    render() {
        return (
            <>
                <Form />

                <div className="text-center mt-5">
                    <h1>Timer</h1>
                    <Timer />
                </div>
            </>
        )
    }
}

export default AppNep