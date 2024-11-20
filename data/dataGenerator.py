import pandas as pd
import numpy as np
import random
from faker import Faker

# Initialize Faker for random realistic data
faker = Faker()

# Function to generate random data points
def generate_synthetic_data(num_entries):
    data = []
    for i in range(num_entries):
        entry = {
            "Entrepreneur ID": i + 1,
            "Community Reputation": random.choice(["Good", "Average", "Poor"]),
            "Daily Customers": random.randint(5, 50),
            "Weekly Revenue (₹)": random.randint(1000, 20000),
            "Informal Credit History": random.choice(["Good", "Defaults"]),
            "Assets Owned": ", ".join(random.sample(
                ["Sewing Machine", "Bicycle", "Livestock", "Motorbike", "Tools", "Small Shop", "Inventory", "None"], 
                random.randint(1, 3)
            )),
            "Last Utility Payment Date": faker.date_between(start_date='-1y', end_date='today'),
            "Local Market Standing": random.choice(["Popular", "Medium Footfall", "Low Footfall"]),
            "Welfare Program Participation": random.choice([True, False]),
            "Dependents": random.randint(0, 6),
            "Seasonality Impact": random.choice(["Low", "Moderate", "High"]),
            "Risk-Taking Score": random.choice(["Low", "Medium", "High"]),
            "Business Location Quality": random.choice(["Prime Location", "Moderate Traffic", "Remote Location"]),
            "Regular Customers": random.randint(2, 50),
            "Training Completed": random.choice(["Skill India Certified", "None"]),
            "Outstanding Debt (₹)": random.randint(0, 10000),
            "Savings (₹)": random.randint(0, 20000),
            "Aadhaar Linked": random.choice([True, False]),
            "Ration Card Type": random.choice(["BPL", "APL", "Antyodaya"]),
            "Voter ID Linked": random.choice([True, False]),
        }
        data.append(entry)
    return pd.DataFrame(data)

# Generate a dataset of 10 entries
num_entries = 100
synthetic_data = generate_synthetic_data(num_entries)

# Save to CSV for further use
synthetic_data.to_csv("synthetic_nano_entrepreneur_data.csv", index=False)

# Display the generated dataset
# print(synthetic_data)
