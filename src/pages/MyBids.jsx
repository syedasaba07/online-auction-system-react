function MyBids() {
  const bids = JSON.parse(localStorage.getItem('myBids') || '[]')
  return (
    <section className="hero">
      <h1>My Bids</h1>
      <p>View the products you have bid on.</p>
      {bids.length === 0 ? <p>You have not placed any bids yet.</p> : (
        <div className="products">
          {bids.map((bid, index) => (
            <div className="product" key={`${bid.product}-${index}`}>
              <h2>{bid.product}</h2>
              <p>Your Bid: ₹{bid.bidAmount}</p>
              <p>Date: {bid.date}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default MyBids
