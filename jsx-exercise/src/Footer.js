function Footer() {
    const currentDate = new Date().toLocaleDateString();
    return (
        <footer>
            <p>{currentDate} - Nnamdi, Somrit</p>
        </footer>
    );
}

export default Footer;