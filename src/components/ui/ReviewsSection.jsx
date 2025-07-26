import React, { memo } from 'react'

const ReviewCard = memo(({ reviewer, rating, date, text }) => (
  <div className="review-card">
    <div className="reviewer">
      <div className="reviewer-avatar">{reviewer.initials}</div>
      <div className="reviewer-info">
        <h4>{reviewer.name}</h4>
        <p>{reviewer.details}</p>
      </div>
    </div>
    <div className="review-rating">
      <span className="stars">{'⭐'.repeat(rating)}</span>
      <span className="review-date">{date}</span>
    </div>
    <p className="review-text">{text}</p>
  </div>
))

const ReviewsSection = memo(() => (
  <section id="reviews" className="reviews">
    <div className="container">
      <div className="section-header">
        <h2>CUSTOMER REVIEWS</h2>
        <div className="rating">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-text">5.0 • 10 Reviews</span>
        </div>
      </div>

      <ReviewCard
        reviewer={{
          initials: "MW",
          name: "Marquis Wise",
          details: "2 reviews • 9 photos"
        }}
        rating={5}
        date="4 years ago"
        text="I have called LongPro a couple times for different treatments and scares. All times, he has come promptly, and have handled my bug problem with great professionalism. Gives good explanation of treatment and purpose, and he also has very affordable prices. I recommend LongPro for my and all extermination."
      />
    </div>
  </section>
))

export default ReviewsSection

