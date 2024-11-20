import os
from dotenv import load_dotenv
import streamlit as st
from fastapi import HTTPException
import google.generativeai as genai
from google.ai.generativelanguage import Content, Part, Blob
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI

# Load environment variables
load_dotenv()

# Retrieve API key from environment variable
API_KEY = os.getenv("GOOGLE_API_KEY")
if not API_KEY:
    raise Exception("API key not found. Please set the GOOGLE_API_KEY environment variable.")
else:
    genai.configure(api_key=API_KEY)  # Configure the API key

# Initialize the Google Gemini model
llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-pro",
    temperature=0,
    max_tokens=None,
    timeout=None,
    max_retries=2,
)

business_name = "Aryaman's Shop"
business_location = "Karnatak/Bengaluru/Electronic-City/Nilladri"

# The template for generating the response
generic_template = f'''You are a knowledgeable AI assistant. Analyze the uploaded image of a vendor shop and provide a detailed report using the following format:

{{
    "business_activity_observations": "Give the number of persons visible in the provided image only the number no explanation needed",
    "asset_Ownership": "Provide the comma-separated assets with their names",
    "seasonal_and_env_impact": "Provide either 'High Seasonal Variation', 'Moderate Seasonal Variation', 'Minimal Seasonal Variation', or 'Weather Sensitive' depending upon the nature of the business",
    "business_location": "The shop is located in {business_location} according to Google Maps. Provide either 'Prime Location', 'Moderate Traffic', 'Low Traffic Area', 'Home-Based', or 'Remote Area'",
    "local_market_standing": "The shop name is {business_name}, the shop location is {business_location} according to Google Maps. Provide either 'Highly Popular', 'Moderately Popular', 'Average', 'Low Footfall', or 'New Business' if busniess not found in google maps just give "Business Not Found""
    "customer_review":"range from 1 to 10 according to the goggle reviews and if not found just give "No Reviews Found""
}}

Strictly adhere to the provided JSON format when generating the response. Do not introduce any additional characters, formatting styles, or symbols. If the uploaded image is unclear or not related to a vendor shop, mention that the analysis is not possible for the respective fields and ensure all fields in the JSON format are addressed.'''

# Initialize the output parser
parser = StrOutputParser()

# Streamlit UI setup
st.title("Vendor Shop Image Analyzer")
st.write("Upload an image of a vendor shop to get an analysis.")

# File upload widget
uploaded_file = st.file_uploader("Upload an Image", type=["jpg", "jpeg", "png"])

if uploaded_file:
    # Validate the file type
    file_type = uploaded_file.type
    if file_type not in ["image/jpeg", "image/png"]:
        st.error("Invalid file type. Please upload a JPEG or PNG image.")
    else:
        try:
            # Read the uploaded image data
            bytes_data = uploaded_file.read()

            # Prepare the content parts with the image data and instructions
            content_parts = [
                Part(text=generic_template),  # System message with instructions
                Part(inline_data=Blob(mime_type=file_type, data=bytes_data))  # The image as binary data
            ]

            # Generate the content
            response = genai.GenerativeModel('gemini-1.5-pro').generate_content(Content(parts=content_parts))
            response.resolve()

            # Parse the AI's analysis result
            parsed_response = parser.invoke(response.text)

            # Display the AI's analysis result
            st.subheader("Analysis Result")
            st.write(parsed_response)

        except Exception as e:
            st.error(f"An error occurred: {str(e)}")
