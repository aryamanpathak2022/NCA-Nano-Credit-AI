import pandas as pd
import random

# Function to generate synthetic data
def generate_creditworthiness_data(num_entries):
    data = []
    for _ in range(num_entries):
        entry = {
    "Stock at Start of Day": random.randint(50, 500),  # Initial stock quantity
    "Stock at End of Day": random.randint(0, 500),    # Final stock quantity
    "Community Reputation": random.choice(["Excellent", "Good", "Average", "Poor", "Unknown"]),
    "Business Activity Observations": random.randint(5, 500),  # Number of daily customers
    "Informal Credit Relationships": random.choice(["Good Credit History", "Has Defaults", "Unknown"]),
    "Asset Ownership": random.choice([
        "Sewing Machine", "Livestock", "Vehicle", "Shop Equipment", "None", 
        "Multiple Assets"
    ]),
    "Utility and Bill Payment Patterns": random.choice([
        "On Time", "Delayed Payments", "No Records", "Partially Paid"
    ]),
    "Local Market Standing": random.choice([
        "Highly Popular", "Moderately Popular", "Average", "Low Footfall", "New Business"
    ]),
    "Participation in Welfare or Support Programs": random.choice([
        "Enrolled in MUDRA", "Enrolled in SHG", "None", "Multiple Programs"
    ]),
    "Family and Dependents": random.randint(1, 10),
    "Seasonal and Environmental Impact": random.choice([
        "High Seasonal Variation", "Moderate Seasonal Variation", 
        "Minimal Seasonal Variation", "Weather Sensitive"
    ]),
    "Behavioral Indicators": random.choice([
        "High Risk-Taker", "Cautious", "Good Problem-Solver", "Indecisive"
    ]),
    "Business Location and Infrastructure": random.choice([
        "Prime Location", "Moderate Traffic", "Low Traffic Area", 
        "Home-Based", "Remote Area"
    ]),
    "Customer and Supplier Relationships": random.randint(1, 50),  # Number of regular connections
    "Observed Consistency": random.choice(["Regularly Open", "Irregular Operations"]),
    "Training and Skill Development": random.choice([
        "Completed Skill Training", "Ongoing Training", 
        "No Formal Training", "Multiple Certifications"
    ]),
    "Debt and Liabilities": round(random.uniform(1000, 50000), 2),  # INR
    "Savings and Insurance": random.choice([
        "Chit Fund Savings", "Insurance Policy", "None", "Both Savings and Insurance"
    ]),
    "Aadhaar Card": random.choice(["Verified", "Not Verified"]),
    "Ration Card": random.choice(["BPL", "APL", "Antyodaya", "Not Provided"]),
    "Voter ID Card": random.choice(["Verified", "Not Verified"]),
}
        data.append(entry)

    return pd.DataFrame(data)

# Generate synthetic data for 100 entries
df = generate_creditworthiness_data(100)

# Save to a CSV file
df.to_csv("synthetic_creditworthiness_data.csv", index=False)

# Display the first few rows
print(df.head())
