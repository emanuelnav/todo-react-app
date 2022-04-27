import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <footer>
            <span>
                Made by EN <i class="bi bi-laptop"></i>
            </span>
            <span> | <a href="https://github.com/emanuelnav/todo-react-app" target={"_blank"}>Source Code <i class="bi bi-code-slash"></i></a></span>
        </footer>
    );
}

export { Footer };