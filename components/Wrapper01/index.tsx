import classNames from 'classnames';
import "./styles.scss";

export default function Wrapper({ children, className, style }) {
    return (
        <div className={`wrapper01 ${className}`} style={style}>
            {children}
        </div>
    );
}
