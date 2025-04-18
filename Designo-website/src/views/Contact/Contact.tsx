import Grid from "../../components/Grid"
import LocationList from "../../components/LocationList"
import styles from "./Contact.module.scss"
import buttonStyles from "./../../styles/button.module.scss"
import { FormEvent, ReactNode, useRef, useState } from "react"
import Icon from "../../components/Icon/Icons"

function FormInputWrapper({ children }: { children: ReactNode }) {
    return (
        <div className={styles.formInput}>
            {children}
            <div
                className={`${styles.formInputError} ${styles.formInputErrorEmpty}`}
            >
                Can’t be empty
                <Icon.error />
            </div>
            <div
                className={`${styles.formInputError} ${styles.formInputErrorInvalid}`}
            >
                Invalid input
                <Icon.error />
            </div>
        </div>
    )
}

function Contact() {
    const formRef = useRef<HTMLFormElement>(null)
    const [validated, setValidated] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const form = formRef.current

        if (form && form.checkValidity()) {
            setValidated(false)
            console.log("Since you're looking here, the form did succeed")
        } else {
            setValidated(true)
        }
    }

    return (
        <>
            <Grid.container fullMobile>
                <div className={`${styles.formWrapper} ${Grid.spanRow}`}>
                    <div className={styles.formText}>
                        <h1>Contact Us</h1>
                        <p>
                            Ready to take it to the next level? Let’s talk about
                            your project or idea and find out how we can help
                            your business grow. If you are looking for unique
                            digital experiences that’s relatable to your users,
                            drop us a line.
                        </p>
                    </div>
                    <form
                        noValidate
                        className={`${styles.form} ${validated ? styles.validated : ""}`}
                        action=""
                        ref={formRef}
                        onSubmit={handleSubmit}
                    >
                        <FormInputWrapper>
                            <input type="text" placeholder="Name" required />
                        </FormInputWrapper>
                        <FormInputWrapper>
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                            />
                        </FormInputWrapper>
                        <FormInputWrapper>
                            <input
                                id=""
                                type="tel"
                                name=""
                                placeholder="Phone"
                                required
                            />
                        </FormInputWrapper>
                        <FormInputWrapper>
                            <textarea
                                id=""
                                name=""
                                required
                                placeholder="Your Message"
                                cols={30}
                                rows={5}
                            ></textarea>
                        </FormInputWrapper>
                        <button className={buttonStyles.btnDark} type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </Grid.container>
            <div className={styles.locationsContainer}>
                <Grid.container className={styles.locations}>
                    <LocationList />
                </Grid.container>
                <Icon.backgroundLeaf className={styles.locationsLeaf} />
            </div>
        </>
    )
}

export default Contact
