
# Creditworthiness Assessment Datapoints  

## **1. Community Reputation**  
- **Data Type**: String/Rating (e.g., "Good", "Average", "Poor")  
- **Way to Collect**:  
  - Conduct informal interviews with local customers, suppliers, and neighbors.  
  - **AI Method**: Sentiment analysis on social media mentions or reviews of the business (if available).  

## **2. Business Activity Observations**  
- **Data Type**: Integer/Estimated Value (e.g., daily customers, weekly revenue)  
- **Way to Collect**:  
  - Observe footfall at the business location or interview the entrepreneur.  
  - **AI Method**: Use a camera with computer vision to track customer footfall and sales activity.  

## **3. Informal Credit Relationships**  
- **Data Type**: Boolean/Rating (e.g., "Good credit history" or "Has defaults")  
- **Way to Collect**:  
  - Speak to suppliers or local moneylenders about repayment habits.  
  - **AI Method**: Text-based NLP analysis of informal contracts or ledgers to assess repayment trends.  

## **4. Asset Ownership**  
- **Data Type**: List/String (e.g., "sewing machine, livestock")  
- **Way to Collect**:  
  - Visit the business location to verify assets or interview the entrepreneur.  
  - **AI Method**: Use image recognition to identify and catalog assets from photos of the business location.  

## **5. Utility and Bill Payment Patterns**  
- **Data Type**: Boolean/Date (e.g., "Last payment date")  
- **Way to Collect**:  
  - Request copies of utility bills or verify payment records with the entrepreneur.  
  - **AI Method**: OCR (Optical Character Recognition) to scan and analyze bill payment patterns from uploaded documents.  

## **6. Local Market Standing**  
- **Data Type**: Rating/Integer (e.g., "Popular, Medium Footfall")  
- **Way to Collect**:  
  - Compare customer feedback and competitor analysis in the local area.  
  - **AI Method**: Use NLP to analyze social media posts and local forums for feedback on market standing.  

## **7. Participation in Welfare or Support Programs**  
- **Data Type**: Boolean/List (e.g., "Enrolled in MUDRA, SHGs")  
- **Way to Collect**:  
  - Cross-check enrollment documents or verify with NGOs and government offices.  
  - **AI Method**: Integrate with government APIs to fetch participation data (e.g., PMEGP, SHG programs).  

## **8. Family and Dependents**  
- **Data Type**: Integer (e.g., number of dependents)  
- **Way to Collect**:  
  - Interview the entrepreneur about household size and roles in the business.  
  - **AI Method**: Analyze census or demographic data for family size in the region.  

## **9. Seasonal and Environmental Impact**  
- **Data Type**: String/Rating (e.g., "High seasonal variation")  
- **Way to Collect**:  
  - Interview the entrepreneur about seasonal revenue changes and market trends.  
  - **AI Method**: Use historical sales data or local weather patterns to model seasonality impact.  

## **10. Behavioral Indicators**  
- **Data Type**: Rating/Score (e.g., "High risk-taker", "Good problem-solver")  
- **Way to Collect**:  
  - Use psychometric tests or observe problem-solving during interactions.  
  - **AI Method**: Deploy chatbot-based psychometric assessments for automated analysis.  

## **11. Business Location and Infrastructure**  
- **Data Type**: String/Rating (e.g., "Prime Location", "Moderate Traffic")  
- **Way to Collect**:  
  - Visit the business premises and use GPS-enabled tools for location data.  
  - **AI Method**: Analyze satellite images or Google Maps data to assess business location quality.  

## **12. Customer and Supplier Relationships**  
- **Data Type**: Rating/Count (e.g., "5 regular customers")  
- **Way to Collect**:  
  - Interview the entrepreneur, customers, or suppliers for relationship insights.  
  - **AI Method**: Use NLP to analyze text/chat history with customers or suppliers.  

## **13. Observed Consistency**  
- **Data Type**: Boolean (e.g., "Business open regularly")  
- **Way to Collect**:  
  - Visit the business at different times to monitor operational consistency.  
  - **AI Method**: Install IoT sensors or cameras to monitor business activity patterns.  

## **14. Training and Skill Development**  
- **Data Type**: Boolean/List (e.g., "Completed Skill India training")  
- **Way to Collect**:  
  - Ask for certificates or confirm participation with training organizers.  
  - **AI Method**: Cross-reference online training platforms or government databases for certifications.  

## **15. Debt and Liabilities**  
- **Data Type**: Float/Integer (e.g., "₹10,000 outstanding debt")  
- **Way to Collect**:  
  - Interview the entrepreneur and cross-verify with local lenders.  
  - **AI Method**: NLP analysis of informal financial records or bank statements.  

## **16. Savings and Insurance**  
- **Data Type**: Boolean/Float (e.g., "₹5,000 in chit fund savings")  
- **Way to Collect**:  
  - Ask the entrepreneur about savings methods and insurance policies.  
  - **AI Method**: Integrate with bank APIs for real-time financial insights.  

---

### Basic Card-Related Data Points  

## **17. Aadhaar Card**  
- **Data Type**: String (e.g., Unique Identification Number)  
- **Information**:  
  - Personal identity and address verification.  
  - Linkage with government welfare schemes.  
  - Mobile number and bank account verification (if linked).  
- **Way to Collect**: Request a photocopy or the UID number for verification.  
  - **AI Method**: Use OCR to scan Aadhaar details for automation.  

## **18. Ration Card**  
- **Data Type**: String/List (e.g., Family members, Category like BPL/APL)  
- **Information**:  
  - Family size and income category (BPL/APL/Antyodaya).  
  - Proof of address.  
  - Eligibility for subsidized goods (indicates financial constraints).  
- **Way to Collect**: Request a copy of the ration card for verification.  
  - **AI Method**: OCR to extract and validate details from the card.  

## **19. Voter ID Card**  
- **Data Type**: String (e.g., EPIC Number)  
- **Information**:  
  - Proof of identity and residence.  
  - Indicates civic participation (important for reliability).  
- **Way to Collect**: Request a copy or number for verification.  
  - **AI Method**: Use OCR for automated extraction of Voter ID details.  
