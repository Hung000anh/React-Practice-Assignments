// import styles from './Button.module.css' //module

function Button()
{
    const styles = {
            button: { //Inline styles
                backgroundColor: 'blue',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }
        }
    return (
        
        // <button className={styles.button}>
        <button style={styles.button}>
            Click Me
        </button>
    )
} 

export default Button