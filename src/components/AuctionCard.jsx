function AuctionCard({ auction, onBid, onDelete }) {
  return (
    <div className="product">
      {auction.image ? <img src={auction.image} alt={auction.name} /> : null}
      <h2>{auction.name}</h2>
      <p>Starting Bid: ₹{auction.startingBid}</p>
      <p>Current Bid: ₹{auction.currentBid}</p>
      <p>{auction.description}</p>
      {onBid && <button onClick={() => onBid(auction)}>Bid Now</button>}
      {onDelete && <button onClick={() => onDelete(auction.id)}>Delete</button>}
    </div>
  )
}

export default AuctionCard
