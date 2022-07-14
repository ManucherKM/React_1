import classStyle from "./PhotoItem.module.css";

const PhotoItem = ({ photo }) => {
    return (
        <div className="my-3">
            <div className={classStyle.wCard + " card"}>
                <img src={photo.url} class="card-img-top" alt="Photo" />
                <div class="card-body">
                    <h5 class="card-title">{photo.title}</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, rem?</p>
                    <a href="#" class="btn btn-primary">Run</a>
                </div>
            </div>
        </div>
    )
}

export default PhotoItem;