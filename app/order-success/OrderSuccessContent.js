


'use client'


import styles from './orderSuccess.module.css'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import CheckIcon from '@mui/icons-material/Check'

export default function OrderSuccessPage() {

    const searchParams = useSearchParams()
    const orderId = searchParams.get('orderId').slice(0,6)
    const name = searchParams.get('name')
    let total = Number(searchParams.get('total')).toFixed(2)
    const city = searchParams.get('city')
    const commune = searchParams.get('commune')
    const items = searchParams.get('items')

    return (
        <div className={styles.page}>
            <div className={styles.card}>

                {/* Check Icon */}
                <div className={styles.checkCircle}>
                    <CheckIcon style={{ color: 'white', fontSize: '36px' }} />
                </div>

                <span className={styles.tag}>Order confirmed ✓</span>
                <h3 className={styles.title}>Thank you, {name}!</h3>
                <p className={styles.subtitle}>
                    Your order has been placed successfully. We'll contact you soon
                    to confirm your delivery details.
                </p>

                {/* Order Info */}
                <div className={styles.orderInfo}>
                    {[
                        { label: 'Order ID', value: `#${orderId}` },
                        { label: 'Items', value: `${items} products` },
                        { label: 'Total', value: `$${total}` },
                        { label: 'Delivery to', value: `${city}, ${commune}` },
                        { label: 'Estimated delivery', value: '1-4 days' },
                    ].map((row) => (
                        <div key={row.label} className={styles.orderRow}>
                            <span>{row.label}</span>
                            <span>{row.value}</span>
                        </div>
                    ))}
                </div>

                {/* Steps */}
                <div className={styles.steps}>
                    {[
                        { label: 'Order\nplaced', done: true },
                        { label: 'Being\nprepared', done: false },
                        { label: 'On the\nway', done: false },
                        { label: 'Delivered', done: false },
                    ].map((step, i) => (
                        <div key={i} className={styles.step}>
                            <div className={`${styles.stepDot} ${step.done ? styles.done : styles.pending}`}>
                                {step.done ? '✓' : i + 1}
                            </div>
                            <span className={`${styles.stepLabel} ${step.done ? styles.doneLabel : ''}`}>
                                {step.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className={styles.btns}>
                    <Link href="/" className={styles.btnOutline}>Back to home</Link>
                    <Link href="/products" className={styles.btnPrimary}>Shop more</Link>
                </div>
            </div>
        </div>
    )
}
