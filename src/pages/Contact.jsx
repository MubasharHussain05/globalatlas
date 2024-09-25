export const Contact=()=>{
    const handleFormSubmit=(formData)=>{
    
        const formInputData=Object.fromEntries(formData.entries())
        console.log(formInputData)

    }
    return(
        <>
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
                <input type="text"
                required
                autoComplete="false"
                placeholder="Enter Your Name"
                name="username"
                className="form-control"
                 />

                <input type="eamil"
                required
                autoComplete="false"
                placeholder="Enter Your Email"
                name="email"
                className="form-control"
                 />

                 <textarea
                  name="message"
                  rows="10"
                   className="form-control"
                   placeholder="Enter Your Meesage"
                   required
                   autoComplete="false"

                   ></textarea>

                   <button type="submit" value="send">Send</button>
            </form>
            </div>
        </section>
        </>
    )
}