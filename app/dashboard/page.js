'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import styles from './dashboard.module.css'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import { useAuth } from "../context/authContext"

const API = process.env.NEXT_PUBLIC_API_URL

export default function Dashboard() {
    const { token, user, authLoading  } = useAuth()

    const [activeTab, setActiveTab] = useState('orders')
    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState('all')

    const router = useRouter()


    // تحقق إن المستخدم admin
useEffect(() => {
    if (authLoading) return
    if (!token || user?.role !== 'admin') {
        router.push('/') // ✅ لو مش admin ودّيه للـ home
        return
    }
    fetchData()
}, [activeTab, token, authLoading])


    // useEffect(() => {
    //     fetchData()
    // }, [activeTab])

    async function fetchData() {
        if (!token) return 
        setLoading(true)
        try {
            if (activeTab === 'orders') {
                const res = await fetch(`${API}/api/orders`,
                    {
    headers: {
        'Authorization': `Bearer ${token}` 
    }
}
                )
                const data = await res.json()
                console.log(token)
                console.log(data)
                if (data.status === 'success') { // ✅ تحقق قبل ما تاخد الداتا
                    setOrders(data.data.orders)
                }

            } else if (activeTab === 'products') {
                const res = await fetch(`${API}/api/products?limit=100`)
                const data = await res.json()
                setProducts(data.data.products)
            } else {
                const res = await fetch(`${API}/api/users`, {
                headers: {
                    'Authorization': `Bearer ${token}` // ✅ users كمان محتاج token
                }
            })
                const data = await res.json()
                            if (data.status === 'success') {
                setUsers(data.data.users)
            }
            }
        } catch (err) {
            console.error(err)
        }
        setLoading(false)
    }

    async function deleteOrder(id) {
        if (!confirm('Delete this order?')) return
        await fetch(`${API}/api/orders/${id}`, { method: 'DELETE',
                headers: {
        'Authorization': `Bearer ${token}` 
    }
        })
        fetchData()
    }

    async function deleteProduct(id) {
        if (!confirm('Delete this product?')) return
        await fetch(`${API}/api/products/${id}`, { method: 'DELETE' ,
                headers: {
        'Authorization': `Bearer ${token}` 
    }
        })
        fetchData()
    }

    async function deleteUser(id) {
        if (!confirm('Delete this user?')) return
        await fetch(`${API}/api/users/${id}`, { method: 'DELETE' })
        fetchData()
    }

    async function updateOrderStatus(id, status) {
        await fetch(`${API}/api/orders/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        })
        fetchData()
    }

    const filteredOrders = orders.filter(o =>
        filter === 'all' ? true : o.orderData?.status === filter
    )
if (authLoading) return <div>Loading...</div> 
    return (
        <div className={styles.dash}>

            {/* Sidebar */}
            <div className={styles.sidebar}>
                <div className={styles.logo}>Shoo<span>zie</span></div>
                {['orders', 'products', 'users'].map(tab => (
                    <div
                        key={tab}
                        className={`${styles.navItem} ${activeTab === tab ? styles.active : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </div>
                ))}
            </div>

            {/* Main */}
            <div className={styles.main}>
                <h2 className={styles.pageTitle}>
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h2>

                {loading ? <p>Loading...</p> : (
                    <>
                        {/* Orders */}
                        {activeTab === 'orders' && (
                            <>
                                <div className={styles.tabs}>
                                    {['all', 'pending', 'delivered', 'cancelled'].map(f => (
                                        <button
                                            key={f}
                                            className={`${styles.tab} ${filter === f ? styles.activeTab : ''}`}
                                            onClick={() => setFilter(f)}
                                        >
                                            {f}
                                        </button>
                                    ))}
                                </div>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Client</th>
                                            <th>City</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredOrders.map(order => (
                                            <tr key={order._id}>
                                                <td>#{order._id.slice(0, 6)}</td>
                                                <td>{order.clientData?.fullName}</td>
                                                <td>{order.clientData?.location?.city}</td>
                                                <td>${order.orderData?.total}</td>
                                                <td>
                                                    <select
                                                        value={order.orderData?.status}
                                                        onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                                                        className={styles.statusSelect}
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="delivered">Delivered</option>
                                                        <option value="cancelled">Cancelled</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button className={styles.delBtn} onClick={() => deleteOrder(order._id)}>
                                                        <DeleteIcon fontSize="small" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        )}

                        {/* Products */}
                        {activeTab === 'products' && (
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Brand</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr key={product._id}>
                                            <td>{product.name}</td>
                                            <td>{product.category}</td>
                                            <td>{product.brand}</td>
                                            <td>${product.price}</td>
                                            <td>
                                                <button className={styles.delBtn} onClick={() => deleteProduct(product._id)}>
                                                    <DeleteIcon fontSize="small" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        {/* Users */}
                        {activeTab === 'users' && (
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>City</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user._id}>
                                            <td>{user.fullName}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.userLocation?.city}</td>
                                            <td>
                                                <button className={styles.delBtn} onClick={() => deleteUser(user._id)}>
                                                    <DeleteIcon fontSize="small" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}