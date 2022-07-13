//Стили комнопонета
import classStyle from "./Navbar.module.css";

//Компоненты
import Index from "../index/Index";
import Posts from "../posts/Posts";
import Photo from "../photos/Photo";
import Comments from "../comments/Comments";
import Users from "../users/Users"

// Для натстройки роутингов
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className={classStyle.myBg + " navbar navbar-expand-lg navbar-dark"}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <svg width="35px" height="35px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                            <title>Gravatar</title>
                            <g>
                                <path d="M102.397328,25.589038 L102.397328,115.183854 C102.397328,129.31629 113.853931,140.772892 127.986366,140.772892 C142.118802,140.772892 153.575404,129.31629 153.575404,115.183854 L153.575404,55.5772289 C185.840093,66.9522866 206.691447,98.2960968 204.714788,132.450085 C202.738129,166.604073 178.410064,195.333128 145.048529,202.910074 C111.686995,210.48702 77.3360287,195.084925 60.8004157,165.135374 C44.2648028,135.185824 49.5315621,97.9101662 73.7175063,73.7142537 C83.5451364,63.6808645 83.4618678,47.6053324 73.5308253,37.6742899 C63.5997827,27.7432473 47.5242507,27.6599788 37.4908615,37.4876089 C-5.68734932,80.6652912 -12.3516695,148.331227 21.5736226,199.102722 C55.4989148,249.874217 120.564878,269.61029 176.978891,246.240881 C233.392904,222.871472 265.442421,162.905477 253.526805,103.016511 C241.61119,43.1275451 189.049204,-0.00399450723 127.986366,2.84217094e-14 C113.853931,2.84217094e-14 102.397328,11.4566026 102.397328,25.589038 Z" fill="#4678EB"></path>
                            </g>
                        </svg>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/photo">Фотографии</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/posts">Посты</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/users">Пользователи</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/comments">Комментарии</Link>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Найти</button>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Index />}></Route>
                <Route path="/photo" element={<Photo />}></Route>
                <Route path="/posts" element={<Posts />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/comments" element={<Comments />}></Route>
            </Routes>
        </div>
    )
}

export default Navbar;