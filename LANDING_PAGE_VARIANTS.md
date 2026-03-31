# Landing Page Copy Variants

## 3 Alternative Hero Headlines

### Option 1 (Currently Used)
**The AI-Powered Sales Readiness Platform That Scales Your Revenue Team**

### Option 2
**Transform Sales Onboarding From Months to Weeks With AI Coaching**

### Option 3
**Reduce Turnover, Accelerate Ramp Time, and Scale Sales Excellence**

---

## 3 CTA Button Options

### Option 1 (Currently Used)
**Book a Demo**

### Option 2
**Schedule a Conversation**

### Option 3
**Request Access**

---

## Investor Pitch Summary

[Company Name] is building the AI-powered sales readiness platform that reduces ramp time, improves coaching consistency, and lowers turnover for B2B sales organizations. We serve a $10B+ market where every company struggles with the same problem: new sales reps take too long to become productive, and training quality varies wildly. Our platform delivers 24/7 AI coaching for reps, automation for managers, and real-time performance visibility for leadership - all in one ecosystem. We have built a defensible data flywheel: every interaction trains the model, creating compounding value for customers and network effects for the business. With high gross margins, predictable SaaS revenue, and a land-and-expand motion, we are positioned to become the category leader in AI-native sales enablement. This is a generational opportunity to transform how companies scale revenue teams.

---

## How to Use These Variants

To change the hero headline or CTA text, simply update the values in `/app/frontend/src/content.js`:

```javascript
// Change hero headline
hero: {
  headline: 'YOUR NEW HEADLINE HERE',
  ...
}

// Change CTA text
hero: {
  ...
  primaryCTA: 'YOUR NEW CTA TEXT',
}
```

All instances of the CTA throughout the landing page will automatically update.
