function Shop() {
    return (
        <>
            <h2>Shop</h2>
            <div
                style={{
                    background: '#fffbe6',
                    border: '2px solid #ffe066',
                    borderRadius: '12px',
                    padding: '40px 0',
                    margin: '40px 0',
                    textAlign: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#b8860b',
                    letterSpacing: '2px',
                    boxShadow: '0 4px 16px rgba(255, 215, 0, 0.10)'
                }}
            >
                🚧 Our Shop will be available soon! 🚧
                <div
                    style={{
                        fontSize: '1.1rem',
                        fontWeight: 'normal',
                        color: '#a88b2a',
                        marginTop: '18px',
                        letterSpacing: 'normal'
                    }}
                >
                    We will offer products from three different suppliers:<br />
                    <strong>• USA Supplier</strong> (for customers in the United States)<br />
                    <strong>• Europe Supplier</strong> (for customers in Europe)<br />
                    <strong>• Premium Supplier</strong> (exclusive, worldwide shipping)
                </div>
            </div>
        </>
    );
}

export default Shop;
