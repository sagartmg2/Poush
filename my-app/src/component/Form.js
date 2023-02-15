
/*  Form component  */
// function Form(props) {
function Form({ title }) {
    // console.log("prosp", props)

    // if (props.title == "login") {
    // if (title == "login") {
    //     return <>
    //         <h1>{title}</h1><form>
    //             <div>
    //                 <label>email</label>
    //                 <input />
    //             </div>
    //             <div>
    //                 <label>passwrd</label>
    //                 <input />
    //             </div>
    //         </form>
    //     </>
    // }
    return <>
        <h1>{title}</h1><form>
            <div>
                <label>email</label>
                <input />
            </div>
            <div>
                <label>passwrd</label>
                <input />
            </div>
            {/* {
                if(title == "singup"){

                }
            } */}

            {/* {
                title == "signup"
                    ?
                    <>
                        <div >
                            <label>phone</label>
                            <input />
                        </div>
                        <div>
                            <label>role</label>
                            <input />
                        </div>
                        <div>
                            <label>Agree terms and conditions</label>
                        </div>
                    </>
                    :
                    null
            } */}
            {/* {
                title == "signup"
                    &&
                    <>
                        <div >
                            <label>phone</label>
                            <input />
                        </div>
                        <div>
                            <label>role</label>
                            <input />
                        </div>
                        <div>
                            <label>Agree terms and conditions</label>
                        </div>
                    </>
            } */}

            <div className={`${title != "signup" ? "hidden" : ""}`}>
                <div >
                    <label>phone</label>
                    <input />
                </div>
                <div>
                    <label>role</label>
                    <input />
                </div>
                <div>
                    <label>Agree terms and conditions</label>
                </div>
            </div>
        </form>
    </>
}

export function SingupForm() {
    return <>
        <h1>Signup</h1><form>
            <div>
                <label>email</label>
                <input />
            </div>
            <div>
                <label>passwrd</label>
                <input />
            </div>
        </form>
    </>
}


export default Form