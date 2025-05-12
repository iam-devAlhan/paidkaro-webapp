import styles from "../landing/css/footer.module.css"

export default function Footer() {
    return (
        <>
            <div className={styles.container}>
                <h1>LOGO</h1>
                <div className="container text-center mt-3">
                    <div className="row">
                        <div className={`col ${styles["footer-list"]}`}>
                            <h4>Any Queries?</h4>
                            <ul>
                                <li>Report a Problem</li>
                                <li>Write a Review</li>
                                <li>Rate this App</li>
                            </ul>
                        </div>
                      
                        <div className={`col ${styles["footer-list"]}`}>
                            <h4>For Clients</h4>
                            <ul>
                                <li>How to find freelancers</li>
                                <li>How to contact organization</li>
                                <li>How to send payments</li>
                            </ul>
                        </div>
                    
                        
                        <div className={`col ${styles["footer-list"]}`}>
                            <h4>For Freelancers</h4>
                            <ul>
                                <li>How to find clients</li>
                                <li>How to post your work</li>
                                <li>How to get rated on projects</li>
                                <li>How to receive payments</li>
                            </ul>
                        </div>
                        <div className={`col ${styles["footer-list"]}`}>
                            <h4>For Organizations</h4>
                            <ul>
                                <li>How to add employees</li>
                                <li>How to post your work</li>
                                <li>How to get rated on projects</li>
                                <li>How to receive payments</li>
                                <li>How to manage employees</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>            
        </>
    )
}