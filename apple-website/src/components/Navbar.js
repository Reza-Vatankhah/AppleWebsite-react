import React from 'react'
import styles from './Navbar.module.css';
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag, BsApple } from "react-icons/bs";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li><a href="#"><BsApple /></a></li>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">TV & Home</a></li>
                    <li><a href="#">Only on Apple</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#"><AiOutlineSearch /></a></li>
                    <li><a href="#"><BsBag /></a></li>
                </ul>
            </div>
        </header>
    );
};


export default Navbar;