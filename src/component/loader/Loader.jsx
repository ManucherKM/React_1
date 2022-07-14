import classStyle from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={classStyle.wrapper}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;