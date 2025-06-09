import type { StatusDotPros } from './types';
import './statusDot.sass';

function StatusDot({ label, statusDotStyle }: StatusDotPros) {
    return (
        <div className="statusDot__container">
            <div className={`statusDot statusDot--${statusDotStyle}`} />
            <span>{label}</span>
        </div>
    );
}

export default StatusDot;
