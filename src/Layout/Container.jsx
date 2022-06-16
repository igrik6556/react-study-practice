const Container = ({classes, children}) => {
    const additionalClasses = classes ? `container ${classes}` : 'container py-5'
    return (
        <div className={additionalClasses}>
            {children}
        </div>
    )
}

export default Container