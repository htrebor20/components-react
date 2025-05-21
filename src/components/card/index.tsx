import type { CardProps } from './types';
import './card.sass'

function Card({ children, state }: CardProps) {
    const CardState = `card--${state}`
    return <div className={CardState}>
        {children}
    </div>
}
export default Card