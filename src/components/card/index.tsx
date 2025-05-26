import type { CardProps } from './types';
import './card.sass'

function Card({ children, state ="default" }: CardProps) {
    const CardState = `card--${state}`
    return (
        <div data-testid="card-wraper" className={CardState}>
            {children}
        </div>
    )
}
export default Card